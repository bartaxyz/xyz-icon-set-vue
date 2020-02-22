import * as Vue from 'vue/dist/vue.js';
import { Component } from 'vue';
import { XmlDocument as XMLDocument } from 'xmldoc';
import XYZIconSet, { iconNames, IconComponents } from 'xyz-icon-set';

export {
	IconTheme,
	IconOptions,
	IconContstructorOptions,
	IconComponents,
	IconCategory,
	IconName,
	IconComponentName,
	iconCategories,
	iconNames,
	iconComponentNames,
} from 'xyz-icon-set';

const generateVueIcon = (createElement, context, source) => {
	const iconXML: XMLDocument = new XMLDocument(source);
	const { props, data } = context;

	return createElement('svg', {
		class: data.staticClass ? data.staticClass : '',
		staticClass: data.staticClass ? data.staticClass : '',
		domProps: {
			innerHTML: iconXML.children
				.map(iconXMLChild => iconXMLChild.toString())
				.join(''),
		},
		attrs: {
			...iconXML.attr,
			style: `fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;`,
			width: props.size ? `${props.size}px` : iconXML.attr.width,
			height: props.size ? `${props.size}px` : iconXML.attr.height,
			viewBox: '0 0 24 24',
			...data.attrs,
		},
	});
};

const iconComponents = {};

iconNames.forEach(iconName => {
	const IconClass = XYZIconSet[iconName];

	const IconComponent = Vue.component(iconName, {
		functional: true,
		props: {
			size: {
				type: Number,
				required: false,
			},
			theme: {
				type: String,
				required: false,
			},
			fillOpacity: {
				type: Number,
				required: false,
			},
		},
		render(createElement, context) {
			const icon = new IconClass({
				theme: context.props.theme || 'regular',
			});
			const iconSource = icon.toString({
				fillOpacity: parseFloat(context.props.fillOpacity) || 0,
			});

			return generateVueIcon(createElement, context, iconSource);
		},
	});

	iconComponents[iconName] = IconComponent;
});

export default iconComponents as IconComponents<Component>;
