import * as Vue from 'vue/dist/vue.js';
import { XmlDocument as XMLDocument } from 'xmldoc';
import XYZIconSet, { IconComponents } from 'xyz-icon-set';

const iconKeys = Object.keys(XYZIconSet);
const iconComponents = {};

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

iconKeys.forEach(iconKey => {
	const iconObject = XYZIconSet[iconKey];
	const name = iconObject.regular.name;
	const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

	iconComponents[`${capitalizedName}Icon`] = (Vue as any).component(
		`${capitalizedName}Icon`,
		{
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
			},
			render(createElement, context) {
				if (context.props.theme === 'thin') {
					return generateVueIcon(
						createElement,
						context,
						iconObject.thin.source,
					);
				}

				return generateVueIcon(
					createElement,
					context,
					iconObject.regular.source,
				);
			},
		},
	);
});

export default iconComponents as IconComponents;
