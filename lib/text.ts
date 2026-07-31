/** Abbreviations that end in a period but not a sentence. */
const ABBREVIATION = /\b(Co|Ltd|Inc|Corp|Dr|Mr|Ms|Mrs|St|vs|etc|approx|No|e\.g|i\.e)\.$/;

const SENTENCE_BREAK = /(?<=[.!?])\s+(?=[A-Z"“(])/;

function splitSentences(text: string): string[] {
  const parts = text.split(SENTENCE_BREAK);
  const sentences: string[] = [];

  for (const part of parts) {
    const previous = sentences[sentences.length - 1];
    // "Co., Ltd. for crank integration" is one sentence, not two.
    if (previous !== undefined && ABBREVIATION.test(previous)) {
      sentences[sentences.length - 1] = `${previous} ${part}`;
    } else {
      sentences.push(part);
    }
  }

  return sentences;
}

/**
 * Break one long string into balanced paragraphs at sentence boundaries.
 *
 * The competition write-ups arrive as single 400–500 word blocks, which are
 * unreadable as one paragraph. This only ever inserts breaks — it never edits,
 * reorders or drops a word, so the prose on the page still matches the proposal
 * exactly.
 *
 * Paragraphs are balanced rather than greedily filled: filling to the target and
 * starting over leaves a runt at the end, which reads as a mistake.
 */
export function paragraphize(text: string, target = 480): string[] {
  const trimmed = text.trim();
  // A little over target is still comfortable — don't split for the sake of it.
  if (trimmed.length <= target * 1.3) return [trimmed];

  const sentences = splitSentences(trimmed);
  if (sentences.length < 2) return [trimmed];

  const wanted = Math.min(
    Math.max(2, Math.round(trimmed.length / target)),
    sentences.length
  );
  const ideal = trimmed.length / wanted;

  const paragraphs: string[] = [];
  let buffer = "";

  for (let i = 0; i < sentences.length; i++) {
    buffer = buffer ? `${buffer} ${sentences[i]}` : sentences[i];

    const slotsLeft = wanted - paragraphs.length;
    const sentencesLeft = sentences.length - 1 - i;
    // Every remaining paragraph still needs at least one sentence.
    if (slotsLeft <= 1 || sentencesLeft < slotsLeft - 1) continue;

    // Close here if stopping lands nearer the ideal length than taking one
    // more sentence would.
    const withNext = buffer.length + 1 + sentences[i + 1].length;
    if (Math.abs(buffer.length - ideal) <= Math.abs(withNext - ideal)) {
      paragraphs.push(buffer);
      buffer = "";
    }
  }

  if (buffer) paragraphs.push(buffer);

  return paragraphs;
}
