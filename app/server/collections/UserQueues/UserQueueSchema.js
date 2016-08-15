import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';
import { Mongo } from 'meteor/mongo';

const UserQueueSchema = new SimpleSchema({
    userId: {
        type: String
    },

    roomId: {
        type: String,
    },

    songList: {
        type: [Object],
        defaultValue: []
    }
});

const UserQueue = new Mongo.Collection('user-queues');

UserQueue.attachSchema(UserQueueSchema);

export { UserQueue, UserQueueSchema };
