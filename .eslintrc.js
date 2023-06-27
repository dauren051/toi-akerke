module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		jasmine: true,
		"commonjs": true,
		"es6": true,
	},
	'extends': [
		'plugin:vue/strongly-recommended',
		'eslint:recommended'
	],
	rules: {
		'no-undef':'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'vue/no-unused-components': 'off',
		indent: 'off',
		'vue/html-indent':'off',
		'vue/attribute-hyphenation':'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
