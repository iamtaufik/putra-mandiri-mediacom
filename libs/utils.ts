import { Review } from '@/types/reviews';
import * as cheerio from 'cheerio';

export const getGoogleReviews = (html: string) => {
  const $ = cheerio.load(html);
  const reviews: Review[] = [];

  $('.gws-localreviews__google-review').each((i, el) => {
    reviews.push({
      user: {
        name: $(el).find('.TSUbDb').text(),
        thumbnail: $(el).find('.lDY1rd').attr('src') ?? '',
      },
      rating: Math.floor(
        parseFloat(
          $(el)
            .find('.lTi8oc')
            .attr('aria-label')
            ?.match(/(\d+,\d+|\d+)/)?.[0]
            ?.replace(',', '.') ?? '0'
        )
      ),
      duration: $(el).find('.dehysf').first().text(),
      snippet: $(el).find('.Jtu6Td').text(),
    });
  });

  return reviews;
};
