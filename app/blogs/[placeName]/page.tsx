import React from "react";

export default function PlaceDetail({
  params,
}: {
  params: { placeName: string };
}) {
  return <div>{params.placeName}</div>;
}
