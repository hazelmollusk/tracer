const { authenticate } = require('@feathersjs/authentication').hooks;
import { addVersion, clearVersions} from 'feathers-hooks';

const add = addVersion({
  excludeMask: ['id', 'qr'], 
  });
const clear = clearVersions();

const timestamp = (isNew = false) => {
  return async context => {
		context.data.modifed = new Date();
    if (isNew) {
			context.data.created = context.data.modified;
		}
    return context;
  };
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ add, timestamp(true) ],
    update: [ add, timestamp() ],
    patch: [ add, timestamp() ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [ add ],
    update: [ add ],
    patch: [ add ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [ add ],
    update: [ add ],
    patch: [ add ],
    remove: [ clear ]
  }
};
