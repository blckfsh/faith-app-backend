import { addNewVerse, getVerses, getVerseWithID, updateVerse, deleteVerse } from '../controllers/bibleController';
import { get } from 'mongoose';

const routes = (app) => {
    app.route('/bible')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getVerses)

        // Post endpoint
        .post(addNewVerse);

    app.route('/bible/:verseID')
        // Get a specific bible verse
        .get(getVerseWithID)

        // Updating specific bible verse
        .put(updateVerse)

        // Deleting a specific verse
        .delete(deleteVerse);

}

export default routes;