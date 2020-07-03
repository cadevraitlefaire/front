import { AbstractSerializer } from './AbstractSerializer';

export class SubjectSerializer extends AbstractSerializer {
  serialize(props) {
    super.serialize(props);
    this.name = props.name;
    return this;
  }
}
