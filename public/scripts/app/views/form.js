define(['app'], function (app) {
	var Form = Backbone.Marionette.ItemView.extend({
		initialize : function () {
			_.bindAll(this, 'valid', 'invalid');

			Backbone.Validation.bind(this, {
    		valid : this.valid,
    		invalid : this.invalid
  		});
		},

		valid : function () {
			this.clearErrors();
		},

		invalid : function (view, attr, error, selector) {
			var el = view.$('[name=' + attr + ']'), 
					parent = el.parent();

			parent.addClass('has-error')
			parent.remove('.help-block');
			parent.append('<span class="help-block has-error">' + error + '</span>');
		},

		clearErrors : function () {
			this.$('.has-error').removeClass('has-error');
  		this.$('.help-block').remove();
		}
	});

	return Form;
});