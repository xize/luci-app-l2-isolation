'use strict';
'require view';
'require form';
'require tools.widgets as widgets'

// Project code format is tabs, not spaces
return view.extend({
	render: function() {
		let m, s, o;

		/*
		The first argument to form.Map() maps to the configuration file available
		via uci at /etc/config/. In this case, 'example' maps to /etc/config/example.

		If the file is completely empty, the form sections will indicate that the
		section contains no values yet. As such, your package installation (LuCI app
		or software that the app configures) should lay down a basic configuration
		file with all the needed sections.

		The relevant ACL path for reading a configuration with UCI this way is
		read > uci > ["example"]

		The relevant ACL path for writing back the configuration is
		write > uci > ["example"]
		*/
		m = new form.Map('isolation', _('Isolation form'),
			_('Isolation configuration.'));

		s = m.section(form.TypedSection, 'isolation', _('isolation'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('is enabled?'),
			_('if enabled the script will create L2 isolation rules through ebtables-nft.'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(widgets.NetworkSelect, 'networks', _('Select DSA-only Network(s) in order to be client to client side isolated.'),
			_('isolate dsa devices on level 2.'));
		o.placeholder = 'placeholder';
        o.multiple=true;
		o.rmempty = false;
		o.editable = true;

		return m.render();
	},
});
