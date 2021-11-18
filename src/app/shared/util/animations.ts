import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeFadeAnimation = trigger('routeFadeAnimation', [
  transition(':increment', [
    style({
      position: 'relative',
      overflow: 'hidden',
    }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in',
            style({
              opacity: 0,
              transform: 'translateX(-50px)',
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            transform: 'translateX(50px)',
            opacity: 0,
          }),
          animate(
            '200ms 120ms ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition(':decrement', [
    style({
      position: 'relative',
    }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in',
            style({
              opacity: 0,
              transform: 'translateX(50px)',
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            transform: 'translateX(-50px)',
            opacity: 0,
          }),
          animate(
            '200ms 120ms ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
