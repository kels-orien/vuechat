/*eslint-disable*/
import Vue from 'vue'
import moment from 'moment'


Vue.filter('formatDate', function(value) {
    if (value) {
        return moment.unix(value).format('MMM Do YYYY @ h:mm a');
    }
});