module.exports = {
	keys: [
		"run node gen-keys.js to genereate new keys",
		"mwVDRlPTl1tcEE3E6N1gW5Bds/d4Gx8o",
		"9KLjZQSeGhmqCjHfZ1vqjVJ3mzAXtVpd",
		"3gtuh5BJWOPJoiDtR902c7taRa8tDYg5",
		"Q9Bcy0c9cnSaPxL7ODIik695LCTEpHt+",
		"F8AAQrBanuAKbr21fkgLbQtCfnLwr9NZ",
		],
	project: '../some_ergo_project/config.ergo.js', 
	//port: 3000,

	auth: { 
		type:"basic",
		users: [ // for basic only
			{
				username: "admin",
				//==pass1234. Use 'node gen-pass.js newpass' to generate a new hash
				passwordHash: "$2a$10$rOEl7nVIG1h.eQnQnJYCbOwq8qkc/sVUQVF15GYrkVhCF3yRWlOxC", 
				name: "Administrator", // if omitted, username is used
			},
		]
	},

	session: {
		key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
		maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
		overwrite: true, /** (boolean) can overwrite or not (default true) */
		httpOnly: true, /** (boolean) httpOnly or not (default true) */
		signed: true, /** (boolean) signed or not (default true) */		
	},

	default_fields: {
		site_title: 'Ergo',
		base_uri: '/ergo-admin/', // MUST end in /
	},
	
	template: {
		page: { // page is the default post type (generally), so it MUST be defined.
			title: { },
			subtitle: { },
			image: { type:"image"},
			date: { sidebar: true, type:"date"},
			draft: { sidebar: true, type:"checkbox" },
			popular: { sidebar: true, type:"checkbox" },
			featured: { sidebar: true, type:"checkbox" },
			tags: { sidebar: true, suggest:true },
			categories: { sidebar: true, suggest:true },
			metadesc: { sidebar: true },
			content: { type:"textarea"},
		}
	}
}