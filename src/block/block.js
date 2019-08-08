/**
 * BLOCK: importdoc-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
} = wp.editor;
const {
	PanelBody,
	TextControl,
} = wp.components;
import { DocPreview } from './components/DocPreview';


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cgb/block-importdoc-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('ImportDoc'), // Block title.
	icon: 'media-document', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'embed', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('ImportDoc')
	],
	attributes: {
		importDocId: {
			type: 'string'
		}
	},

	// Defining the edit interface
	edit: props => {
		function onChangeId(id) {
			props.setAttributes({ importDocId: id })
		}
		return [
			<InspectorControls key="inspector">
				<PanelBody title={__('ImportDoc Settings')} >
					<TextControl
						label={__('ImportDoc ID')}
						value={props.attributes.importDocId}
						onChange={onChangeId}
						help={__('Find your ImportDoc ID here: importdoc.com/documents')}
					/>
				</PanelBody>
			</InspectorControls>,
			<DocPreview id={props.attributes.importDocId} isSelected={props.isSelected} />
		];
	},

	save: () => {
		return null
	},
});
