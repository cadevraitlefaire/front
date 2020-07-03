export class AbstractSerializer {
  '@id' = '';
  id = '';
  name = '';

  serialize(props) {
    this['@id'] = props['@id'];
    this.id = props.id;
    return this;
  }
}
