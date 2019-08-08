<?php
/**
 * Plugin Name: ImportDoc Block
 * Plugin URI: https://importdoc.com/wordpress
 * Description: Put the contents of a Google Doc in a WordPress post.
 * Author: importdoc
 * Author URI: https://importdoc.com/
 * Version: 0.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
