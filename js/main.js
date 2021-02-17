const getData = async (id) => {
	popup(true);
	elem = document.getElementById("pop-description");
	try {
		await fetch('./server/server.php?id=' + id)
		.then(response => response.json())
		.then(data => {
			elem.innerHTML = data;
		});
	} catch (e) {
		elem.innerHTML = e;
	}
};

const popup = (show) => {
	if(show){
		document.getElementsByClassName("overlay")[0].style.width = "100%";
	} else {
		document.getElementsByClassName("overlay")[0].style.width = "0%";
		document.getElementById("pop-description").innerHTML = "";
	}
};


const data = [
	{
		id: 1,
		title: 'Pendant I',
		imgSource: 'item1.jpg',
	},
	{
		id: 2,
		title: 'Pendant II',
		imgSource: 'item2.jpg',
	},
	{
		id: 3,
		title: 'Pendant III',
		imgSource: 'item3.jpg',
	},
];

class Item {
	constructor(id, title, imgSource, containerID) {
		this.id = id;
		this.title = title;
		this.imgSource = imgSource;
		this.parentElement = document.getElementById(containerID);
		this.render();
	};

	createElement = (elem, value) => {
		const tmp = document.createElement(elem);
		tmp.innerHTML = value;
		return tmp;
	};

	createImage = (imgSource, altText) => {
		const img = document.createElement("img");
        img.src = './img/' + imgSource;
        img.alt = altText;
        const imgContainer = document.createElement("div");
        imgContainer.classList.add('imgContainer');
        imgContainer.appendChild(img);
        return imgContainer;
	};

	createButton = (sendParam, value) => {
		const btn = this.createElement("button", value);
		btn.addEventListener("click", function(evt) {
        	getData(sendParam);
        });
        return btn;
	};

	render = () => {
		const card = document.createElement("div");
        card.classList.add('card');
        card.setAttribute("data-item-id", this.id);
        card.appendChild(this.createElement("h3", this.title));
        card.appendChild(this.createImage(this.imgSource, this.title));
        card.appendChild(this.createButton(this.id, "Submit"));
        this.parentElement.appendChild(card);
	};
}

data.map((i) => {
	new Item(i.id, i.title, i.imgSource, "itemList2");
});
