import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors"


export const Filter = () => {
    const filterQuery = useSelector(getFilter);
    const dispatch = useDispatch();

    const onFilterChange = e => dispatch(setFilter(e.currentTarget.value));
    
    return (
        <div>
            <label>
                <p>Find contacts by name</p>
                <input type="text" value={filterQuery} onChange={onFilterChange} />
            </label>
        </div>
    )
}

