import { useContext } from "react"
import { MapView } from "../components/MapView"
import { PlacesContext } from "../context"
import { Loading } from "../components/Loading";

export const HomeScreen = () => {
    const {isLoading, userLocation} = useContext(PlacesContext);
    if( isLoading ){
        return <Loading />;
    }

    return (
    <div>
        { userLocation?.join(',')}
    </div>
)
}
