<?php
abstract class Item {
	protected $itemID;
	protected $items = [
		'1' => 'Antique Baltic Amber wire wrap pendant with pink Tourmaline',
		'2' => 'Ancient Tibetan Turquoise wire wrap pendant with green Tourmaline',
		'3' => 'Star ruby wirewrap pendant'
	];

	function __construct($id) {
		$this->itemID = is_int((int)$id)? (int)$id : null;
		$this->retData();
	}

	abstract public function retData();
}

class getItemDescription extends Item {
	public function retData() {
		if(is_int($this->itemID)){
			echo json_encode($this->items[$this->itemID]);
		} else {
			echo json_encode("Description was not found");
		}
	}
}

return new getItemDescription($_GET['id']);