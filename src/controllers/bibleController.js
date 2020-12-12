import mongoose from 'mongoose';
import { VerseSchema } from '../models/bibleModel';

const Verse = mongoose.model('Verse', VerseSchema);

export const addNewVerse = (req, res) => {
    let newVerse = new Verse(req.body);

    newVerse.save((err, verse) => {
        if (err) {
            res.send(err);
        }
        res.json(verse);
    });
}

export const getVerses = (req, res) => {
    
    Verse.find({}, (err, verse) => {
        if (err) {
            res.send(err);
        }
        res.json(verse);
    });
}

export const getVerseWithID = (req, res) => {

    Verse.findById(req.params.verseID, (err, verse) => {
        if (err) {
            res.send(err);
        }
        res.json(verse);
    });
}

export const updateVerse = (req, res) => {

    Verse.findOneAndUpdate({ _id: req.params.verseID }, req.body, { new: true, useFindAndModify: false }, (err, verse) => {
        if (err) {
            res.send(err);
        }
        res.json(verse);
    });
}

export const deleteVerse = (req, res) => {

    Verse.remove({ _id: req.params.verseID }, (err, verse) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted bible verse' });
    });
}