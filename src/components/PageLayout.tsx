// Three-column sticky layout used on every page.
// Left (25% sticky) | Middle (flex-1, bordered) | Right (25% sticky)
// Exact spacing from Framer MCP:
//   outer padding: 0px 20px, gap: 32px
//   left/right: position:sticky, height:100vh, padding:140px 0 8px 0
//   middle: padding:140px 16px 0 16px, border 0px 1px 0px 1px solid #e3e3e3
// Responsive: tablet/phone collapses to single column (sidebars hidden)

interface PageLayoutProps {
  left?: React.ReactNode;
  middle: React.ReactNode;
  right?: React.ReactNode;
}

export function PageLayout({ left, middle, right }: PageLayoutProps) {
  return (
    <>
      <div
        className="page-container"
        style={{
          display: 'flex',
          gap: '32px',
          padding: '0px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Left column — sticky */}
        <aside
          className="page-left"
          style={{
            width: '25%',
            flexShrink: 0,
            position: 'sticky',
            top: '0px',
            height: '100vh',
            paddingTop: '140px',
            paddingBottom: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            overflow: 'visible',
            gap: '8px',
          }}
        >
          {left}
        </aside>

        {/* Middle column — scrollable */}
        <main
          className="page-middle"
          style={{
            flex: 1,
            minWidth: 0,
            borderLeft: '1px solid #e3e3e3',
            borderRight: '1px solid #e3e3e3',
            paddingTop: '140px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: 0,
            backgroundColor: '#ffffff',
            overflow: 'visible',
          }}
        >
          {middle}
        </main>

        {/* Right column — sticky */}
        <aside
          className="page-right"
          style={{
            width: '25%',
            flexShrink: 0,
            position: 'sticky',
            top: '0px',
            height: '100vh',
            paddingTop: '140px',
            paddingBottom: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'visible',
            gap: '8px',
          }}
        >
          {right}
        </aside>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .page-container {
            padding: 0 !important;
            gap: 0 !important;
          }
          .page-left,
          .page-right {
            display: none !important;
          }
          .page-middle {
            border-left: none !important;
            border-right: none !important;
            padding-top: 80px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (min-width: 810px) and (max-width: 1199px) {
          .page-left,
          .page-right {
            display: none !important;
          }
          .page-middle {
            border-left: none !important;
            border-right: none !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .page-container {
            gap: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
