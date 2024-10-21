<?php
if(isset($_GET['file'])){
    file_get_contents($_GET['file']);
}
?>