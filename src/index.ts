import Vue from 'vue/dist/vue.js';
import XYZIconSet from 'xyz-icon-set';

const iconKeys = Object.keys(XYZIconSet);
const iconComponents = {};

iconKeys.forEach((iconKey) => {
    const iconObject = XYZIconSet[iconKey];
    const name = iconObject.regular.name;
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    iconComponents[capitalizedName] = Vue.component(`${capitalizedName}Icon`, {
        props: {
            theme: {
                type: String,
                required: false,
                default: 'regular',
            }
        },
        template: `
            ${iconObject.regular.source.replace('<svg ', '<svg v-if="theme ==\'regular\'" ')}
            ${iconObject.thin.source.replace('<svg ', '<svg v-else-if="theme ==\'thin\'" ')}
        `,
    });
});

export default iconComponents;
