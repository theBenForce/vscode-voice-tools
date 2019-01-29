// @ts-nocheck

const gulp = require('gulp');
const { writeFileSync } = require('fs');

gulp.task('schema', (cb) => {
    const alexaSchema = require('jovo-cli-platform-alexa/dist/validators/JovoModelAlexa.json');
    const googleSchema = require('jovo-cli-platform-google/dist/validators/JovoModelDialogFlow.json');

    alexaSchema.properties = Object.assign({}, alexaSchema.properties, googleSchema.properties);
    alexaSchema.definitions = Object.assign({}, alexaSchema.definitions, googleSchema.definitions);

    writeFileSync('./out/model-schema.json', JSON.stringify(alexaSchema));
    cb();
});