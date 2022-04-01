// Declare date-fns
const fns = require('date-fns')

module.exports = {
    // formats dates
    format_date: date => {
        return `${fns.format(new Date(date), 'MM/dd/yyyy')}`;
    },
    // format url
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    // pluralize words
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    }
};