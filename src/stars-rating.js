

function StarRating({rating}){

    var ranges = [2,4,6,8,10];

    return(
        <div className="stars-container">
        {
        ranges.map((star,index)=>{
            return(
                <span
                    key={index}
                    className="star"
                    style={{color: rating <= star ? "#e4e5e9" : "#ffc107"   }}
                >
                    &#9733;
                </span>
            )        
        })}
        </div>
    );
}

export default StarRating