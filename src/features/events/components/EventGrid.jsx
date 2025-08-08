// Lays out multiple event cards in a responsive grid/list

import EventCard from "./EventCard";
import BlueButton from "../../../components/BlueButton";
import TiltedCard from "./TiltedCard";
import FilterBar from "../../../components/filter/Filterbar";
import { useFilter } from "../../../context/FilterContext";

export default function EventGrid({ title = "Date Spots Nearby", fromPath }) {
  return (
    <div className="bg-white rounded p-4">
      <h1 className="mb-4">{title}</h1>
      <FilterBar className="mb-4" />
      <EventList fromPath={fromPath} />
    </div>
  );
}

function EventList({ fromPath }) {
  const { posts, page, setPage, limit } = useFilter();

  return (
    <>
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
    </>
  );
}
