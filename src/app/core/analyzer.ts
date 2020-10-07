export class Analyzer {
    parse(raw: string) {
        let data = JSON.parse(raw.trim());
        let tree = [];

        this.explorer(data, tree);
        console.log(tree);
    }

    private explorer(data: any, sections: any[]) {
        if (typeof data['__mapperVer'] === 'undefined') {
            for (let key in data) {
                if (typeof data[key] === 'undefined') {
                    continue;
                }
                if (typeof data[key] === 'object') {
                    let isArray = Array.isArray(data[key]);
                    let section = {key: key, childs: [], isArray: isArray};
                    sections.push(section);

                    if (!isArray) {
                        this.explorer(data[key], section.childs);
                    }
                }
            }
        }
    }
}