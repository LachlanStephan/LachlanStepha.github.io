<?php
    $res = [
        'subject' => "",
        'msg' => '',
        'status' => 500,
    ];

    if (!empty($_POST)) {
        $res['subject'] = $_POST['subject'];
        $res['msg'] = $_POST['message'];
        $res['status'] = 200;
    }

    echo json_encode($res);

?>
