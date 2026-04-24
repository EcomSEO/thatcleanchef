// Twitter card reuses the Open Graph image.
// Route segment config must be declared as literals so Next.js can
// statically analyze them — re-exports from ./opengraph-image would
// lose the literal info at build time.
import OpenGraphImage, {
  alt as ogAlt,
  size as ogSize,
  contentType as ogContentType,
} from "./opengraph-image";

export const runtime = "edge";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default OpenGraphImage;
