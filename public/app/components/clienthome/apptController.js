angular.module('gymScheduler')
  .controller('apptController', function($filter) {
    var appt = this;

    appt.date = '';

    function formatDate() {
      return appt.date = $filter('date')(Date.now(), 'EEEE, MMMM d, yyyy');
    }
    appt.formatDate = formatDate;
  });
