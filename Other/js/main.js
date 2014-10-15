/*
** Step Manager
 *
*/
(function( $ ){
    var stepManager = {
        currentStep: false,
        buttons: false,
        completeCls: 'completed',
        activeCls: 'active',
        inactiveCls: 'legend',
        prevCallbacks: {},
        previousHash: false,
        setCallbackForPreviousStep: function (step, callback) {
            this.prevCallbacks[step] = callback;
        },
        lastIndex: false,
        init: function (buttons) {
            this.buttons = buttons;

            this.currentStep = this.buttons.first().data('step');
            this.lastIndex = this.buttons.last().data('step');


            console.log(this.currentStep);
            console.log(this.lastIndex);

            var that = this;
            this.buttons.on('click', function () {
                var step = jQuery(this).data('step');
                if (that.gotoStep(step)) {
                    if (jQuery.isFunction(that.prevCallbacks[step])) {
                        that.prevCallbacks[step]();
                    }
                }
            });
            window.location.hash = 'step' + this.currentStep;
            this.refreshButtons();
        },
        gotoStep: function (num) {
            if (num == (this.currentStep - 1)) {
                this.currentStep = num;
                this.refreshButtons();
                return true;
            }
            return false;
        },
        nextStep: function () {
            this.previousHash = parseInt(this.currentStep);
            this.currentStep++;
            this.refreshButtons();
        },
        refreshButtons: function () {
            var that = this;
            this.buttons.each(function () {
                var self = jQuery(this), selfStep = self.data('step');
                self.removeClass(that.activeCls)
                    .removeClass(that.completeCls)
                    .removeClass(that.inactiveCls);
                if (selfStep == that.currentStep) {
                    self.addClass(that.activeCls);
                } else if (selfStep > that.currentStep) {
                    self.addClass(that.inactiveCls);
                } else {
                    self.addClass(that.completeCls);
                }
            })
        }
    };
//CallBack for Previous Step
    stepManager.setCallbackForPreviousStep(0, function () {

    });

    stepManager.setCallbackForPreviousStep(1, function () {

    });

    stepManager.setCallbackForPreviousStep(2, function () {

    });

    stepManager.setCallbackForPreviousStep(3, function () {

    });


    $('.legend-2').click(function(){
        stepManager.setCallbackForPreviousStep(this, function(){
            console.log('ololol')
        });
        console.log('click .legend-2');
    })

})( jQuery );










