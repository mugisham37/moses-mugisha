import React from 'react'
import { Availability } from './Availability'
import { Button } from './Button'

interface ProfileProps {
  theme?: 'light' | 'dark'
  showLinks?: boolean
}

export const Profile: React.FC<ProfileProps> = ({ theme = 'light', showLinks = true }) => {
  const textColor = theme === 'light' ? 'rgb(5, 5, 5)' : 'rgb(255, 255, 255)'
  const spanColor = theme === 'light' ? 'rgb(128, 128, 128)' : 'rgb(128, 128, 128)'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: '100%' }}>
      {/* Profile and Subheadline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Image + Name row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 0,
          }}
        >
          {/* Profile Image */}
          <div style={{ padding: '0 6px' }}>
            <div
              style={{
                width: 126,
                height: 126,
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src="https://framerusercontent.com/images/M4XXiqSPayq2HjtN6UaJK6ixZD4.jpg"
                alt="Alex Neozen"
                style={{
                  width: '100%',
                  height: 210,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: 3,
                }}
              />
            </div>
          </div>

          {/* Name and Role */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 8,
              padding: '0 6px',
            }}
          >
            <Availability textColor={textColor} dotColor={spanColor} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="text-name" style={{ color: textColor }}>
                Alex Neozen
              </span>
              <span className="text-span" style={{ color: spanColor }}>
                UI &amp; Product Designer
              </span>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <div style={{ padding: '0 6px' }}>
          <p
            className="text-subtitle"
            style={{ maxWidth: 410, color: textColor }}
          >
            Designing calm, precise interfaces guided by structure and typography.
          </p>
        </div>
      </div>

      {/* Links */}
      {showLinks && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button
            label="hello@neozen.com"
            href="mailto:email@email.com"
            external
            variant="simple-link-medium"
            textColor={textColor}
            hoverTextColor={spanColor}
          />
          <Button
            label="(+1) 444 333 222"
            href="tel:+40000000000"
            variant="simple-link-medium"
            textColor={textColor}
            hoverTextColor={spanColor}
          />
        </div>
      )}
    </div>
  )
}
