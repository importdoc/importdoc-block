const { Component } = wp.element;

export class DocPreview extends Component {
    constructor(props) {
        super(...arguments);
        this.props = props;
        this.state = {
            html: '',
        };
    }

    async componentDidMount() {
        if (this.props.id) this.fetchDocument(this.props.id)
    }

    async componentDidUpdate(prevProps) {
        if ((this.props.id !== prevProps.id) || (this.props.isSelected && (this.props.isSelected !== prevProps.isSelected))) {
            this.fetchDocument(this.props.id)
        }
    }

    async fetchDocument(id) {
        if (!id) return
        try {
            const response = await fetch(`https://api.importdoc.com/document?id=${encodeURIComponent(id)}`);
            const html = await response.text();
            this.setState({ html });
        } catch (err) {
            console.log(error.message)
        }
    }

    render() {
        if (!this.state.html) return (<p>Enter an ImportDoc ID to see a preview.</p>)
        return (
            <div id="__importdoc" dangerouslySetInnerHTML={{ __html: this.state.html }} />
        );
    }
}