import _ from "lodash";

type Detail = {'comment': string[]};

abstract class ItemPrototype {
    constructor(public name: string, public detail: Detail = {'comment': []}) {}

    addComment(comment: string) {
        this.detail.comment.push(comment);
    }

    abstract createCopy(): ItemPrototype;
}

class DeepCopyItem extends ItemPrototype {
    createCopy(): ItemPrototype {
        return _.cloneDeep(this);
    }
}

class ShallowCopyItem extends ItemPrototype {
    createCopy(): ItemPrototype {
        return _.clone(this);
    }
}

class ItemManager {
    items: {[key: string]: ItemPrototype} = {};

    resisterItem(key: string, item: ItemPrototype) {
        this.items[key] = item;
    }

    create(key: string) {
        if (key in this.items) {
            const item = this.items[key];
            return item.createCopy();
        }
        throw new Error('key does not exist')
    }
}