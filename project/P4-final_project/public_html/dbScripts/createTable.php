<?php
// Set default timezone
require('openDB.php');
try {
    /**************************************
    * Create table to store season data*
    /**************************************/

        $file_db->exec("PRAGMA foreign_keys = on");

   $theQuery = 'CREATE TABLE IF NOT EXISTS seasons (
     seasonID INTEGER PRIMARY KEY NOT NULL,
     seasonName TEXT,
     seasonClimate TEXT)';
   $file_db ->exec($theQuery);


      // Close file db connection
       $file_db = null;


  }
  catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }
  ?>
