import React, {memo} from "react";

import YPAppHeader from '@/components/app-header'
import YPAppContent from '@/components/app-content'
import YPAppFooter from '@/components/app-footer'
import AppPlayerBar from "./pages/player/app-player-bar";


export default memo(function App(props) {
  return (
    <div>
      <YPAppHeader/>
      <YPAppContent/>
      <YPAppFooter/>
      <AppPlayerBar/>
    </div>
  )
})
