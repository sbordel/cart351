<?php
// Set default timezone
//  date_default_timezone_set('UTC');
//https://www.sqlitetutorial.net/sqlite-foreign-key/
//https://www.techonthenet.com/sqlite/foreign_keys/foreign_keys.php
//** Important:
// we cannot insert into a table if the associated foreign key does NOT exist! */
require('openDB.php');
try {
    /**************************************
    * Create databases and                *
    * open connections                    *
    **************************************/
// ENABLE THE CONSTRAINT...
//The command returns an integer value: 1: enable, 0: disabled. If the command returns nothing, it means that your SQLite version doesn’t support foreign key constraints.

//If the SQLite library is compiled with foreign key constraint support,
//the application can use the PRAGMA foreign_keys command to enable or disable foreign key constraints at runtime.

//PRAGMA:: the code that consists of useful information on how a compiler or interpreter or assembler should process the program - only affects the associated compilers behaviour

    $file_db->exec("PRAGMA foreign_keys = on");

  $queryInsertEvents = array(
     "INSERT INTO seasons(seasonID, seasonName, seasonClimate) VALUES(1, 'winter', 'too much sun, too much water')",
     "INSERT INTO seasons(seasonID, seasonName, seasonClimate) VALUES(2, 'spring', 'too much water, too much fertilizer')",
     "INSERT INTO seasons(seasonID, seasonName, seasonClimate) VALUES(3, 'summer', 'too much sun')",
     "INSERT INTO seasons(seasonID, seasonName, seasonClimate) VALUES(4, 'fall', 'no sun, too much water')",
      );
   for($i =0; $i< count($queryInsertEvents); $i++){
     $file_db->exec($queryInsertEvents[$i]);
  }

  // if we reach this point then all the data has been inserted successfully.
  echo ("INSERTION OF ENTRY into seasons table successful");
      // Close file db connection
       $file_db = null;
  }

  catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }
  ?>
