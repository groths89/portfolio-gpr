export type Month1989 = 
  | 'JAN' | 'FEB' | 'MAR' | 'APR' 
  | 'MAY' | 'JUN' | 'JUL' | 'AUG' 
  | 'SEP' | 'OCT' | 'NOV' | 'DEC';

export interface GameClue {
  codeSnippet?: string;
  nextSectionHint?: string;
}

export interface NewspaperArticle {
  id: string;
  section: 'front' | 'tech' | 'sports' | 'opinion' | 'classifieds';
  month: Month1989;
  issueDate: string; // e.g., "MARCH 24, 1989"
  headline: string;
  deck?: string; // Sub-headline / Excerpt
  author?: string;
  content: string; // WP rendered HTML string (or parsed paragraphs)
  historicalContext?: string;
  gameClue?: GameClue;
}

export function splitClassifieds(): void {
  const source = document.getElementById("classifieds-source");
  const rightColumn = document.getElementById("classifieds-right");

  if (!source || !rightColumn || source.dataset.distributed === "true") return;

  const advertBlocks: HTMLElement[] = [];
  let currentAdvert: HTMLElement | undefined;

  Array.from(source.children).forEach((item) => {
    const isCategoryHeading =
      item.tagName === "P" &&
      item.children.length === 1 &&
      item.firstElementChild?.tagName === "STRONG";

    if (!currentAdvert || item.matches("h1, h2, h3, h4") || isCategoryHeading) {
      currentAdvert = document.createElement("div");
      currentAdvert.className = "classified-ad";
      advertBlocks.push(currentAdvert);
    }

    currentAdvert.append(item);
  });

  advertBlocks.forEach((advert, index) => {
    (index % 2 === 0 ? source : rightColumn).append(advert);
  });

  source.dataset.distributed = "true";
}

export function markSportsDecoderTable(): void {
  const tables = document.querySelectorAll("#sports-page .wp-block-table");
  for (const table of tables) {
    const tableElement = table as HTMLElement;
    const heading = table.previousElementSibling?.textContent || "";

    if (heading.includes("NATIONAL LEAGUE EAST STANDINGS")) {
      tableElement.classList.add("sports-decoder-table");
      if (tableElement.dataset.decoderInitialized === "true") return;

      const note = document.createElement("p");
      note.className = "sports-decoder-note";
      note.textContent =
        "FIELD NOTE // TEAM NAME INDEX: 3.2 / 2.6 / 4.2 / 2.4 | RANK . LETTER";
      tableElement.append(note);

      tableElement.addEventListener("pointermove", (event: PointerEvent) => {
        const tableBounds = tableElement.getBoundingClientRect();
        const noteBounds = note.getBoundingClientRect();
        const horizontalProgress =
          (event.clientX - tableBounds.left) / tableBounds.width;
        const verticalProgress =
          (event.clientY - tableBounds.top) / tableBounds.height;

        note.style.setProperty("--uv-x", `${horizontalProgress * noteBounds.width}px`);
        note.style.setProperty("--uv-y", `${verticalProgress * noteBounds.height}px`);
        note.classList.add("uv-active");
      });

      tableElement.addEventListener("pointerleave", () => {
        note.classList.remove("uv-active");
      });

      tableElement.dataset.decoderInitialized = "true";
      return;
    }
  }
}

export function plantTechCipher(): void {
  const techHeadings = document.querySelectorAll("#tech-page h2");
  const intelHeading = Array.from(techHeadings).find((heading) =>
    heading.textContent?.includes("INTEL UNVEILS 80486 PROCESSOR")
  );
  if (!intelHeading || document.querySelector("#tech-page .tech-cipher-letter")) return;

  const targetLetters = "VLUOHW";
  let targetIndex = 0;
  let currentElement = intelHeading.nextElementSibling;

  while (currentElement && currentElement.tagName !== "H2") {
    const paragraphs = currentElement.matches("p")
      ? [currentElement]
      : Array.from(currentElement.querySelectorAll("p"));

    for (const paragraph of paragraphs) {
      if (targetIndex >= targetLetters.length) break;

      const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      let textNode: Node | null;

      while ((textNode = walker.nextNode())) textNodes.push(textNode as Text);

      for (const node of textNodes) {
        if (targetIndex >= targetLetters.length) break;

        const fragment = document.createDocumentFragment();
        const usedWordStarts = new Set<number>();
        let cursor = 0;
        let changed = false;

        while (targetIndex < targetLetters.length) {
          const position = node.data
            .toUpperCase()
            .indexOf(targetLetters[targetIndex], cursor);
          if (position === -1) break;

          const prefix = node.data.slice(0, position);
          const wordStart = position - (prefix.match(/[A-Za-z]*$/)?.[0].length || 0);

          if (usedWordStarts.has(wordStart)) {
            cursor = position + 1;
            continue;
          }

          fragment.append(document.createTextNode(node.data.slice(cursor, position)));
          const letter = document.createElement("span");
          letter.className = "tech-cipher-letter";
          letter.textContent = node.data[position];
          fragment.append(letter);

          usedWordStarts.add(wordStart);
          cursor = position + 1;
          changed = true;
          targetIndex += 1;
        }

        if (changed) {
          fragment.append(document.createTextNode(node.data.slice(cursor)));
          node.replaceWith(fragment);
        }
      }
    }
    currentElement = currentElement.nextElementSibling;
  }
}

export function revealTechCipher(): void {
  document.querySelectorAll("#tech-page .tech-cipher-letter").forEach((letter) => {
    letter.classList.add("revealed");
  });
}

export function initializeNewspaperFeatures(): void {
  splitClassifieds();
  markSportsDecoderTable();
  plantTechCipher();
}