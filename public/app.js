'use strict';

// const data = [
//   {id:1, title:'Cats are awesome', priority:'Low'},
//   {id:2, title:'Dogs are awesome', priority:'High'},
//   {id:3, title:'Cows are awesome', priority:'Medium'},
//   {id:4, title:'Lizards are awesome', priority:'Low'},
// ];

class KanbanPage extends React.Component{
  constructor(){
    super();

    this.state = {
      data:[],
    };
    this.onKanbanData = this.onKanbanData.bind(this)
  };

  onKanbanData(data){
    console.log(data);
    const parsedData = JSON.parse(data.currentTarget.response).data
    console.log(parsedData);
    this.setState({data:parsedData})
  }
  onKanbanError(data){
    console.error(error);
  }

  loadDataFromKanban(apiUrl){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', this.onKanbanData);
    oReq.addEventListener('err', this.onKanbanData);

    oReq.open('GET', apiUrl);
    oReq.send();
  }

  componentWillMount() {
    this.loadDataFromKanban(this.props.url + 'Q');
    this.loadDataFromKanban(this.props.url + 'P');
    this.loadDataFromKanban(this.props.url + 'D');
  }

  render() {
    return(
      <div>
        <h1>Kanban Page</h1>
        <KanbanList data={this.state.data} />
      </div>
    )
  }
};

KanbanPage.defaultProps = {
  data: React.PropTypes.array,
}

KanbanPage.defaultProps = {
  data: [],
}

class KanbanList extends React.Component {
  render(){
    //console.log(this.props.data);
  const kanbanListNode = this.props.data.map((dataItem) =>{
    return(
      <KanbanItem
        status={dataItem.status}
        title={dataItem.title}
        priority={dataItem.priority}
        createdBy={dataItem.createdBy}
        assignedTo={dataItem.assignedTo}
        key={dataItem.id}
      />
    )
  })
    return(
      <div>
        <h2>Kanban List</h2>
        {kanbanListNode}
      </div>
    )
  }
}
class KanbanItem extends React.Component {

  render(){
    return(
      <div className="redditItem">
        <h1>{this.props.status}</h1>
        <h4>{this.props.title}</h4>
        <p>{this.props.priority}</p>
        <p>{this.props.createdBy}</p>
        <p>{this.props.assignedTo}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <KanbanPage url='http://localhost:3000/api'/>,
  document.getElementById('root')
);