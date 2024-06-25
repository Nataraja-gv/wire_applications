import { createContext } from "react";
import { eventData } from "../data/EventData";
import { MenuData } from "../../data/menu-data/MenuData"
import {galleryData} from "../../data/gallery/GalleryData"
import {reviews} from "../../data/reviewData/ReviewData"

export const EventContext = createContext();
const ContextProvider = ({ children }) => {
  const EventValues = { eventData, MenuData ,galleryData,reviews};
  // console.log("eventValues", EventValues)
  return (
    <EventContext.Provider value={EventValues}>
      {children}
    </EventContext.Provider>
  );
};

export default ContextProvider;
