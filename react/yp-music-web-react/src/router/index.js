import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

// import Discover from '@/pages/discover'
// import Mine from '@/pages/mine'
// import Friend from '@/pages/friend'
// import Recommend from '@/pages/discover/c-pages/recommend'
// import Artist from '@/pages/discover/c-pages/artist'
// import Album from '@/pages/discover/c-pages/album'
// import Djradio from '@/pages/discover/c-pages/djradio'
// import Playlist from '@/pages/discover/c-pages/playlist'
// import Toplist from '@/pages/discover/c-pages/toplist'

// code splitting
const Discover = lazy(() => import("@/pages/discover"));
const Mine = lazy(() => import("@/pages/mine"));
const Friend = lazy(() => import("@/pages/friend"));
const Recommend = lazy(() => import("@/pages/discover/c-pages/recommend"));
const Artist = lazy(() => import("@/pages/discover/c-pages/artist"));
const Album = lazy(() => import("@/pages/discover/c-pages/album"));
const Djradio = lazy(() => import("@/pages/discover/c-pages/djradio"));
const Playlist = lazy(() => import("@/pages/discover/c-pages/playlist"));
const Toplist = lazy(() => import("@/pages/discover/c-pages/toplist"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/discover" />,
    },
    {
      path: "/discover",
      element: <Discover />,
      children: [
        {
          index: true,
          element: <Navigate to="/discover/recommend" />,
        },
        {
          path: "recommend",
          element: <Recommend />,
        },
        {
          path: "artist",
          element: <Artist />,
        },
        {
          path: "album",
          element: <Album />,
        },
        {
          path: "djradio",
          element: <Djradio />,
        },
        {
          path: "playlist",
          element: <Playlist />,
        },
        {
          path: "toplist",
          element: <Toplist />,
        },
      ],
    },
    {
      path: "/mine",
      element: <Mine />,
    },
    {
      path: "/friend",
      element: <Friend />,
    },
  ]);

  return routes;
};

export default Routes;
