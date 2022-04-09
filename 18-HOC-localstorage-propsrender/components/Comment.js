import WithFetching from "./withFetching";
import withLoading from "./withLoading";
const Comment = ({ link: postLink ,data,loading,error}) => {

  return (

      
        <div>
          <p className="comment">{data.body}</p>
          <div>
            <span className="by">Commented By:</span>
            <span className="name">{data.name}</span>
          </div>
        </div>
      

  );
};
export default WithFetching(withLoading(Comment))  ;


