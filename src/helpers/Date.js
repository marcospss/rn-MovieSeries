import moment from 'moment';

export default {
  shortFormat(date) {
    if (date) {
      return moment(date).format('L');
    }
    return null;
  },

  longFormat(date) {
    if (date) {
      return moment(date).format('LL');
    }
    return null;
  },
};
