// Lays out multiple event cards in a responsive grid/list

import { useState, useEffect } from "react";
import { useApi } from "../../../context/ApiContext";
import EventCard from "./EventCard";
import BlueButton from "../../../components/BlueButton";
import TiltedCard from "./TiltedCard";
import useQuery from "../../../hooks/useQuery";
import FilterBar from "../../../components/filter/Filterbar";

export default function EventGrid({ title = "Date Spots Nearby", fromPath }) {
  const { request } = useApi();
  const [page, setPage] = useState(1);
  const limit = 10;
  const {
    data: posts,
    loading,
    error
  } = useQuery(`/posts/${page}/${limit}`, "posts", [page]);

  if (loading || !posts) return <p>Loading events...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
     <div className="bg-white rounded p-4">
      <h1 className="mb-4">{title}</h1>
      <FilterBar />
      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12">
            <TiltedCard
              containerHeight="auto"
              containerWidth="100%"
              imageHeight="auto"
              imageWidth="100%"
              rotateAmplitude={0}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<EventCard post={post} fromPath={fromPath} />}
            >
              <EventCard post={post} fromPath={fromPath} />
            </TiltedCard>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <BlueButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous Page
        </BlueButton>
        <span>Page {page}</span>
        <BlueButton
          onClick={() => setPage(page + 1)}
          disabled={posts.length < limit}
        >
          Next Page
        </BlueButton>
      </div>
    </div>
  );
}
