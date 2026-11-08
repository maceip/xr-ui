import React, { useEffect, useMemo, useState } from 'react';
import {
  AUTHORIZATION_CATALOG,
  CatalogCardRenderer,
} from './components/AuthorizationCatalog';
import {
  BALLISTIC_ALTERNATIVES_META,
  BallisticAlternativeId,
} from './components/BallisticAlternatives';

export const App: React.FC = () => {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const initialCardId = params.get('card') || AUTHORIZATION_CATALOG[0].id;
  const initialBallistic =
    (params.get('ballistic') as BallisticAlternativeId) || 'deflected-vector';
  const hudOnly = params.get('hud') === '1';

  const [selectedCardId, setSelectedCardId] = useState<string>(initialCardId);
  const [ballisticVariant, setBallisticVariant] =
    useState<BallisticAlternativeId>(initialBallistic);
  const [focusedActionIndex, setFocusedActionIndex] = useState<number>(0);
  const [lastSettlement, setLastSettlement] = useState<string | null>(null);

  const activeItem =
    AUTHORIZATION_CATALOG.find((c) => c.id === selectedCardId) ||
    AUTHORIZATION_CATALOG[0];

  useEffect(() => {
    setFocusedActionIndex(0);
  }, [selectedCardId, ballisticVariant]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedActionIndex((prev) => (prev + 1) % activeItem.actions.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedActionIndex(
          (prev) =>
            (prev - 1 + activeItem.actions.length) % activeItem.actions.length
        );
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const act = activeItem.actions[focusedActionIndex];
        if (act) {
          setLastSettlement(`${activeItem.id}:${act.id}`);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeItem, focusedActionIndex]);

  // Pure 600x600 Waveguide HUD mode for direct glasses rendering or clean 600x600 specimen capture
  if (hudOnly) {
    return (
      <div
        id="waveguide-frame"
        style={{
          width: 600,
          height: 600,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <CatalogCardRenderer
          item={activeItem}
          ballisticVariant={ballisticVariant}
          focusedActionIndex={focusedActionIndex}
          onSelectAction={(actId, idx) => {
            setFocusedActionIndex(idx);
            setLastSettlement(`${activeItem.id}:${actId}`);
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0B0D11',
        color: '#F1F5F9',
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid #222630',
          paddingBottom: 18,
        }}
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.06em' }}>
            XR-UI · HEAD-WORN WAVEGUIDE COMPONENT LIBRARY (600×600)
          </div>
          <h1 style={{ margin: '4px 0 0 0', fontSize: 24, fontWeight: 700 }}>
            Single-Surface Authorization Modals &amp; Ballistic Agent Trajectory Primitives
          </h1>
        </div>
        {lastSettlement && (
          <div
            style={{
              fontSize: 13,
              color: '#94A3B8',
              backgroundColor: '#181B22',
              padding: '6px 12px',
              borderRadius: 8,
              border: '1px solid #2E3440',
            }}
          >
            Last pinch action: <strong style={{ color: '#FFFFFF' }}>{lastSettlement}</strong>
          </div>
        )}
      </header>

      {/* Top Interactive Workbench: 600x600 Waveguide Viewport + Component/Variant Selectors */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '600px 1fr',
          gap: 28,
          alignItems: 'start',
        }}
      >
        {/* Exact 600x600 Meta Ray-Ban Display Waveguide Frame */}
        <div
          id="waveguide-frame"
          style={{
            width: 600,
            height: 600,
            backgroundColor: '#000000',
            border: '1px solid #262B36',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
          }}
        >
          <CatalogCardRenderer
            item={activeItem}
            ballisticVariant={ballisticVariant}
            focusedActionIndex={focusedActionIndex}
            onSelectAction={(actId, idx) => {
              setFocusedActionIndex(idx);
              setLastSettlement(`${activeItem.id}:${actId}`);
            }}
          />
        </div>

        {/* Controls: 12 Common Modals + 5 Ballistic Agent Alternatives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#94A3B8', marginBottom: 10 }}>
              12 COMMON AUTHORIZATION &amp; SETTLEMENT MODALS
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 8,
              }}
            >
              {AUTHORIZATION_CATALOG.map((item) => {
                const active = item.id === activeItem.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCardId(item.id)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 12px',
                      borderRadius: 10,
                      backgroundColor: active ? '#252932' : '#14171E',
                      border: active ? '1.5px solid #FFFFFF' : '1px solid #262B36',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      fontSize: 13.5,
                      fontWeight: active ? 700 : 500,
                    }}
                  >
                    <span style={{ color: '#94A3B8', marginRight: 6 }}>
                      #{item.number}
                    </span>
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5 Alternatives for "Agent Going Ballistic: Done -> Doing -> Should Do" */}
          <div
            style={{
              backgroundColor: '#14171E',
              border: '1px solid #262B36',
              borderRadius: 12,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: '#FBBF24' }}>
              5 MINIMAL-ENTROPY ALTERNATIVES FOR &ldquo;AGENT GOING BALLISTIC&rdquo; (DONE → DOING → SHOULD DO)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {BALLISTIC_ALTERNATIVES_META.map((alt) => {
                const selected =
                  activeItem.id === 'ballistic-agent' &&
                  ballisticVariant === alt.id;
                return (
                  <button
                    key={alt.id}
                    type="button"
                    onClick={() => {
                      setSelectedCardId('ballistic-agent');
                      setBallisticVariant(alt.id);
                    }}
                    style={{
                      textAlign: 'left',
                      padding: '10px 12px',
                      borderRadius: 9,
                      backgroundColor: selected ? '#252932' : '#1A1E27',
                      border: selected
                        ? '1.5px solid #FBBF24'
                        : '1px solid #2A303D',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>
                      {alt.shortName}: {alt.title}
                    </div>
                    <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 3 }}>
                      {alt.rationale}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
