import { Six_Caps, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";

export const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});

export const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});
