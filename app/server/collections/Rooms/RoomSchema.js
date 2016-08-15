import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';
import { Mongo } from 'meteor/mongo';

const RoomSchema = new SimpleSchema({
    adminId: {
        type: String,
    },

    coordinates: {
        type: Object,
        blackbox: true
    },
    /**
     * id of spotify playlist?  Songs will be added to here
     */
    playlistId: {
        type: String,
    }
});

const Rooms = new Mongo.Collection('rooms');

Rooms.attachSchema(RoomSchema);

export { Rooms, RoomSchema };
