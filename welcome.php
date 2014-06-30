<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		//die('tidak ditemukan');
		$this->load->helper('url');
		//$this->load->view('welcome_message');
		//$this->no_mvc();
	}
	
	//dibawah ini cuma tambahan
	public function halo()
	{
	$data['title'] = "halo world";
	$this->load->view("krt", $data);
	/*echo "hai";
	echo "<br></br>";
	echo "ini adalah contoh";*/
	}
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */