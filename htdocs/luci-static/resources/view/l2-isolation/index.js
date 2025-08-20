'use strict';
'require view';
'require form';
'require fs';
'require tools.widgets as widgets'
'require ui'

// Project code format is tabs, not spaces
return view.extend({
        render: function() {
                let m, s, o;

                m = new form.Map('isolation');

                s = m.section(form.TypedSection, 'global', _('Layer 2 Isolation'));
                s.anonymous = true;

                o = s.option(form.Flag, 'enabled', _('is enabled?'),
                        _('if enabled the script will create L2 isolation rules through ebtables-nft.'));
                o.default = '1';
                o.rmempty = false;

                o = s.option(widgets.DeviceSelect, 'networks', _('Select DSA-only Network(s) in order to be client to client side isolated.'),
                        _('isolate dsa devices on level 2.'));
                o.placeholder = 'placeholder';
                                o.multiple=true;
                o.rmempty = false;
                o.editable = true;

                return m.render();
        }, handleSaveApply: function() {
                
                this.handleSave().then(function() {
                        ui.changes.apply();
                        fs.exec("set_isolation");
                });

        }
});
