try {
  (() => {
    var B2 = Object.create;
    var Da = Object.defineProperty;
    var L2 = Object.getOwnPropertyDescriptor;
    var q2 = Object.getOwnPropertyNames;
    var M2 = Object.getPrototypeOf,
      U2 = Object.prototype.hasOwnProperty;
    var et = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, r) => (typeof require < 'u' ? require : t)[r],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Tt = (e, t) => () => (e && (t = e((e = 0))), t);
    var J = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      Hl = (e, t) => {
        for (var r in t) Da(e, r, { get: t[r], enumerable: !0 });
      },
      J2 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of q2(t))
            !U2.call(e, o) &&
              o !== r &&
              Da(e, o, {
                get: () => t[o],
                enumerable: !(n = L2(t, o)) || n.enumerable,
              });
        return e;
      };
    var ao = (e, t, r) => (
      (r = e != null ? B2(M2(e)) : {}),
      J2(
        t || !e || !e.__esModule
          ? Da(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    );
    var S = Tt(() => {});
    var A = Tt(() => {});
    var T = Tt(() => {});
    var $2,
      Gl,
      z2,
      Wl,
      V2,
      H2,
      mn,
      rr,
      G2,
      gn,
      W2,
      Kl,
      K2,
      Yl,
      Y2,
      X2,
      nr,
      Q2,
      Xl,
      tt,
      bn,
      Fa = Tt(() => {
        S();
        A();
        T();
        ($2 = Object.create),
          (Gl = Object.defineProperty),
          (z2 = Object.getOwnPropertyDescriptor),
          (Wl = Object.getOwnPropertyNames),
          (V2 = Object.getPrototypeOf),
          (H2 = Object.prototype.hasOwnProperty),
          (mn = ((e) =>
            typeof et < 'u'
              ? et
              : typeof Proxy < 'u'
                ? new Proxy(e, { get: (t, r) => (typeof et < 'u' ? et : t)[r] })
                : e)(function (e) {
            if (typeof et < 'u') return et.apply(this, arguments);
            throw Error('Dynamic require of "' + e + '" is not supported');
          })),
          (rr = (e, t) =>
            function () {
              return (
                t || (0, e[Wl(e)[0]])((t = { exports: {} }).exports, t),
                t.exports
              );
            }),
          (G2 = (e, t, r, n) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
              for (let o of Wl(t))
                !H2.call(e, o) &&
                  o !== r &&
                  Gl(e, o, {
                    get: () => t[o],
                    enumerable: !(n = z2(t, o)) || n.enumerable,
                  });
            return e;
          }),
          (gn = (e, t, r) => (
            (r = e != null ? $2(V2(e)) : {}),
            G2(
              t || !e || !e.__esModule
                ? Gl(r, 'default', { value: e, enumerable: !0 })
                : r,
              e
            )
          )),
          (W2 = Object.create),
          (Kl = Object.defineProperty),
          (K2 = Object.getOwnPropertyDescriptor),
          (Yl = Object.getOwnPropertyNames),
          (Y2 = Object.getPrototypeOf),
          (X2 = Object.prototype.hasOwnProperty),
          (nr = (e, t) =>
            function () {
              return (
                t || (0, e[Yl(e)[0]])((t = { exports: {} }).exports, t),
                t.exports
              );
            }),
          (Q2 = (e, t, r, n) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
              for (let o of Yl(t))
                !X2.call(e, o) &&
                  o !== r &&
                  Kl(e, o, {
                    get: () => t[o],
                    enumerable: !(n = K2(t, o)) || n.enumerable,
                  });
            return e;
          }),
          (Xl = (e, t, r) => (
            (r = e != null ? W2(Y2(e)) : {}),
            Q2(
              t || !e || !e.__esModule
                ? Kl(r, 'default', { value: e, enumerable: !0 })
                : r,
              e
            )
          )),
          (tt = (e) => `control-${e.replace(/\s+/g, '-')}`),
          (bn = (e) => `set-${e.replace(/\s+/g, '-')}`);
      });
    var E,
      Ql,
      jt,
      F6,
      j6,
      N6,
      B6,
      Zl,
      L6,
      Oe,
      vn,
      ja,
      q6,
      M6,
      U6,
      J6,
      eu,
      $6,
      z6,
      V6,
      $e,
      tu,
      H6,
      G6,
      ze,
      W6,
      K6,
      Y6,
      ru,
      Nt,
      X6,
      Xe,
      he,
      Q6,
      Z6,
      e8,
      io = Tt(() => {
        S();
        A();
        T();
        (E = __REACT__),
          ({
            Children: Ql,
            Component: jt,
            Fragment: F6,
            Profiler: j6,
            PureComponent: N6,
            StrictMode: B6,
            Suspense: Zl,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: L6,
            cloneElement: Oe,
            createContext: vn,
            createElement: ja,
            createFactory: q6,
            createRef: M6,
            forwardRef: U6,
            isValidElement: J6,
            lazy: eu,
            memo: $6,
            startTransition: z6,
            unstable_act: V6,
            useCallback: $e,
            useContext: tu,
            useDebugValue: H6,
            useDeferredValue: G6,
            useEffect: ze,
            useId: W6,
            useImperativeHandle: K6,
            useInsertionEffect: Y6,
            useLayoutEffect: ru,
            useMemo: Nt,
            useReducer: X6,
            useRef: Xe,
            useState: he,
            useSyncExternalStore: Q6,
            useTransition: Z6,
            version: e8,
          } = __REACT__);
      });
    var au = {};
    Hl(au, {
      A: () => t1,
      ActionBar: () => Na,
      AddonPanel: () => Ba,
      Badge: () => La,
      Bar: () => qa,
      Blockquote: () => r1,
      Button: () => Bt,
      ClipboardCode: () => n1,
      Code: () => o1,
      DL: () => a1,
      Div: () => i1,
      DocumentWrapper: () => s1,
      EmptyTabContent: () => Ma,
      ErrorFormatter: () => l1,
      FlexBar: () => Ua,
      Form: () => dt,
      H1: () => u1,
      H2: () => Ja,
      H3: () => c1,
      H4: () => p1,
      H5: () => d1,
      H6: () => f1,
      HR: () => y1,
      IconButton: () => ht,
      IconButtonSkeleton: () => h1,
      Icons: () => m1,
      Img: () => g1,
      LI: () => b1,
      Link: () => ar,
      ListItem: () => v1,
      Loader: () => x1,
      Modal: () => mt,
      OL: () => E1,
      P: () => w1,
      Placeholder: () => S1,
      Pre: () => A1,
      ResetWrapper: () => $a,
      ScrollArea: () => T1,
      Separator: () => C1,
      Spaced: () => za,
      Span: () => _1,
      StorybookIcon: () => O1,
      StorybookLogo: () => I1,
      Symbols: () => P1,
      SyntaxHighlighter: () => so,
      TT: () => k1,
      TabBar: () => R1,
      TabButton: () => D1,
      TabWrapper: () => F1,
      Table: () => j1,
      Tabs: () => N1,
      TabsState: () => B1,
      TooltipLinkList: () => L1,
      TooltipMessage: () => q1,
      TooltipNote: () => ir,
      UL: () => M1,
      WithTooltip: () => Lt,
      WithTooltipPure: () => Va,
      Zoom: () => Ha,
      codeCommon: () => Ir,
      components: () => Ga,
      createCopyToClipboardFunction: () => U1,
      default: () => e1,
      getStoryHref: () => J1,
      icons: () => $1,
      interleaveSeparators: () => z1,
      nameSpaceClassNames: () => Wa,
      resetComponents: () => V1,
      withReset: () => Pr,
    });
    var e1,
      t1,
      Na,
      Ba,
      La,
      qa,
      r1,
      Bt,
      n1,
      o1,
      a1,
      i1,
      s1,
      Ma,
      l1,
      Ua,
      dt,
      u1,
      Ja,
      c1,
      p1,
      d1,
      f1,
      y1,
      ht,
      h1,
      m1,
      g1,
      b1,
      ar,
      v1,
      x1,
      mt,
      E1,
      w1,
      S1,
      A1,
      $a,
      T1,
      C1,
      za,
      _1,
      O1,
      I1,
      P1,
      so,
      k1,
      R1,
      D1,
      F1,
      j1,
      N1,
      B1,
      L1,
      q1,
      ir,
      M1,
      Lt,
      Va,
      Ha,
      Ir,
      Ga,
      U1,
      J1,
      $1,
      z1,
      Wa,
      V1,
      Pr,
      lo = Tt(() => {
        S();
        A();
        T();
        (e1 = __STORYBOOK_COMPONENTS__),
          ({
            A: t1,
            ActionBar: Na,
            AddonPanel: Ba,
            Badge: La,
            Bar: qa,
            Blockquote: r1,
            Button: Bt,
            ClipboardCode: n1,
            Code: o1,
            DL: a1,
            Div: i1,
            DocumentWrapper: s1,
            EmptyTabContent: Ma,
            ErrorFormatter: l1,
            FlexBar: Ua,
            Form: dt,
            H1: u1,
            H2: Ja,
            H3: c1,
            H4: p1,
            H5: d1,
            H6: f1,
            HR: y1,
            IconButton: ht,
            IconButtonSkeleton: h1,
            Icons: m1,
            Img: g1,
            LI: b1,
            Link: ar,
            ListItem: v1,
            Loader: x1,
            Modal: mt,
            OL: E1,
            P: w1,
            Placeholder: S1,
            Pre: A1,
            ResetWrapper: $a,
            ScrollArea: T1,
            Separator: C1,
            Spaced: za,
            Span: _1,
            StorybookIcon: O1,
            StorybookLogo: I1,
            Symbols: P1,
            SyntaxHighlighter: so,
            TT: k1,
            TabBar: R1,
            TabButton: D1,
            TabWrapper: F1,
            Table: j1,
            Tabs: N1,
            TabsState: B1,
            TooltipLinkList: L1,
            TooltipMessage: q1,
            TooltipNote: ir,
            UL: M1,
            WithTooltip: Lt,
            WithTooltipPure: Va,
            Zoom: Ha,
            codeCommon: Ir,
            components: Ga,
            createCopyToClipboardFunction: U1,
            getStoryHref: J1,
            icons: $1,
            interleaveSeparators: z1,
            nameSpaceClassNames: Wa,
            resetComponents: V1,
            withReset: Pr,
          } = __STORYBOOK_COMPONENTS__);
      });
    var g9,
      b9,
      v9,
      x9,
      Ru,
      E9,
      go,
      Du,
      w9,
      S9,
      A9,
      T9,
      C9,
      _9,
      O9,
      Fu,
      I9,
      P9,
      ti,
      k9,
      W,
      ri,
      R9,
      ni,
      D9,
      oi = Tt(() => {
        S();
        A();
        T();
        (g9 = __STORYBOOK_THEMING__),
          ({
            CacheProvider: b9,
            ClassNames: v9,
            Global: x9,
            ThemeProvider: Ru,
            background: E9,
            color: go,
            convert: Du,
            create: w9,
            createCache: S9,
            createGlobal: A9,
            createReset: T9,
            css: C9,
            darken: _9,
            ensure: O9,
            ignoreSsrWarning: Fu,
            isPropValid: I9,
            jsx: P9,
            keyframes: ti,
            lighten: k9,
            styled: W,
            themes: ri,
            typography: R9,
            useTheme: ni,
            withTheme: D9,
          } = __STORYBOOK_THEMING__);
      });
    var L9,
      q9,
      M9,
      ai,
      U9,
      J9,
      $9,
      z9,
      V9,
      H9,
      G9,
      W9,
      K9,
      Y9,
      X9,
      Q9,
      Z9,
      eU,
      tU,
      rU,
      nU,
      oU,
      aU,
      iU,
      sU,
      lU,
      uU,
      cU,
      pU,
      dU,
      fU,
      yU,
      hU,
      mU,
      gU,
      bU,
      vU,
      xU,
      EU,
      wU,
      SU,
      AU,
      TU,
      ju,
      Nu,
      CU,
      Bu,
      ii,
      _U,
      OU,
      Lu,
      IU,
      PU,
      kU,
      RU,
      DU,
      FU,
      jU,
      NU,
      BU,
      LU,
      qU,
      MU,
      UU,
      JU,
      $U,
      zU,
      VU,
      HU,
      GU,
      WU,
      KU,
      YU,
      XU,
      QU,
      ZU,
      eJ,
      tJ,
      rJ,
      nJ,
      oJ,
      aJ,
      iJ,
      sJ,
      bo,
      lJ,
      uJ,
      cJ,
      pJ,
      dJ,
      fJ,
      yJ,
      qu,
      Mu,
      hJ,
      mJ,
      gJ,
      bJ,
      vJ,
      xJ,
      EJ,
      wJ,
      SJ,
      AJ,
      TJ,
      CJ,
      _J,
      OJ,
      IJ,
      PJ,
      kJ,
      RJ,
      DJ,
      FJ,
      jJ,
      NJ,
      BJ,
      LJ,
      qJ,
      MJ,
      UJ,
      JJ,
      $J,
      zJ,
      VJ,
      HJ,
      GJ,
      Uu,
      WJ,
      KJ,
      YJ,
      XJ,
      QJ,
      ZJ,
      e$,
      Ju,
      t$,
      r$,
      n$,
      o$,
      a$,
      i$,
      s$,
      l$,
      u$,
      c$,
      p$,
      d$,
      f$,
      y$,
      h$,
      m$,
      g$,
      b$,
      v$,
      x$,
      E$,
      w$,
      S$,
      A$,
      T$,
      C$,
      _$,
      O$,
      I$,
      P$,
      k$,
      R$,
      D$,
      F$,
      j$,
      N$,
      B$,
      L$,
      q$,
      M$,
      U$,
      J$,
      $$,
      z$,
      V$,
      H$,
      G$,
      W$,
      K$,
      Y$,
      X$,
      Q$,
      Z$,
      ez,
      tz,
      rz,
      nz,
      oz,
      $u,
      az,
      iz,
      sz,
      lz,
      uz,
      cz,
      pz,
      dz,
      fz,
      yz,
      hz,
      mz,
      gz,
      si,
      bz,
      vz,
      xz,
      Ez,
      wz,
      Sz,
      Az,
      Tz,
      Cz,
      _z,
      zu,
      Oz,
      Iz,
      Pz,
      kz,
      Rz,
      Vu,
      Hu,
      Gu,
      Dz,
      li = Tt(() => {
        S();
        A();
        T();
        (L9 = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: q9,
            AccessibilityIcon: M9,
            AddIcon: ai,
            AdminIcon: U9,
            AlertAltIcon: J9,
            AlertIcon: $9,
            AlignLeftIcon: z9,
            AlignRightIcon: V9,
            AppleIcon: H9,
            ArrowDownIcon: G9,
            ArrowLeftIcon: W9,
            ArrowRightIcon: K9,
            ArrowSolidDownIcon: Y9,
            ArrowSolidLeftIcon: X9,
            ArrowSolidRightIcon: Q9,
            ArrowSolidUpIcon: Z9,
            ArrowUpIcon: eU,
            AzureDevOpsIcon: tU,
            BackIcon: rU,
            BasketIcon: nU,
            BatchAcceptIcon: oU,
            BatchDenyIcon: aU,
            BeakerIcon: iU,
            BellIcon: sU,
            BitbucketIcon: lU,
            BoldIcon: uU,
            BookIcon: cU,
            BookmarkHollowIcon: pU,
            BookmarkIcon: dU,
            BottomBarIcon: fU,
            BottomBarToggleIcon: yU,
            BoxIcon: hU,
            BranchIcon: mU,
            BrowserIcon: gU,
            ButtonIcon: bU,
            CPUIcon: vU,
            CalendarIcon: xU,
            CameraIcon: EU,
            CategoryIcon: wU,
            CertificateIcon: SU,
            ChangedIcon: AU,
            ChatIcon: TU,
            CheckIcon: ju,
            ChevronDownIcon: Nu,
            ChevronLeftIcon: CU,
            ChevronRightIcon: Bu,
            ChevronSmallDownIcon: ii,
            ChevronSmallLeftIcon: _U,
            ChevronSmallRightIcon: OU,
            ChevronSmallUpIcon: Lu,
            ChevronUpIcon: IU,
            ChromaticIcon: PU,
            ChromeIcon: kU,
            CircleHollowIcon: RU,
            CircleIcon: DU,
            ClearIcon: FU,
            CloseAltIcon: jU,
            CloseIcon: NU,
            CloudHollowIcon: BU,
            CloudIcon: LU,
            CogIcon: qU,
            CollapseIcon: MU,
            CommandIcon: UU,
            CommentAddIcon: JU,
            CommentIcon: $U,
            CommentsIcon: zU,
            CommitIcon: VU,
            CompassIcon: HU,
            ComponentDrivenIcon: GU,
            ComponentIcon: WU,
            ContrastIcon: KU,
            ControlsIcon: YU,
            CopyIcon: XU,
            CreditIcon: QU,
            CrossIcon: ZU,
            DashboardIcon: eJ,
            DatabaseIcon: tJ,
            DeleteIcon: rJ,
            DiamondIcon: nJ,
            DirectionIcon: oJ,
            DiscordIcon: aJ,
            DocChartIcon: iJ,
            DocListIcon: sJ,
            DocumentIcon: bo,
            DownloadIcon: lJ,
            DragIcon: uJ,
            EditIcon: cJ,
            EllipsisIcon: pJ,
            EmailIcon: dJ,
            ExpandAltIcon: fJ,
            ExpandIcon: yJ,
            EyeCloseIcon: qu,
            EyeIcon: Mu,
            FaceHappyIcon: hJ,
            FaceNeutralIcon: mJ,
            FaceSadIcon: gJ,
            FacebookIcon: bJ,
            FailedIcon: vJ,
            FastForwardIcon: xJ,
            FigmaIcon: EJ,
            FilterIcon: wJ,
            FlagIcon: SJ,
            FolderIcon: AJ,
            FormIcon: TJ,
            GDriveIcon: CJ,
            GithubIcon: _J,
            GitlabIcon: OJ,
            GlobeIcon: IJ,
            GoogleIcon: PJ,
            GraphBarIcon: kJ,
            GraphLineIcon: RJ,
            GraphqlIcon: DJ,
            GridAltIcon: FJ,
            GridIcon: jJ,
            GrowIcon: NJ,
            HeartHollowIcon: BJ,
            HeartIcon: LJ,
            HomeIcon: qJ,
            HourglassIcon: MJ,
            InfoIcon: UJ,
            ItalicIcon: JJ,
            JumpToIcon: $J,
            KeyIcon: zJ,
            LightningIcon: VJ,
            LightningOffIcon: HJ,
            LinkBrokenIcon: GJ,
            LinkIcon: Uu,
            LinkedinIcon: WJ,
            LinuxIcon: KJ,
            ListOrderedIcon: YJ,
            ListUnorderedIcon: XJ,
            LocationIcon: QJ,
            LockIcon: ZJ,
            MarkdownIcon: e$,
            MarkupIcon: Ju,
            MediumIcon: t$,
            MemoryIcon: r$,
            MenuIcon: n$,
            MergeIcon: o$,
            MirrorIcon: a$,
            MobileIcon: i$,
            MoonIcon: s$,
            NutIcon: l$,
            OutboxIcon: u$,
            OutlineIcon: c$,
            PaintBrushIcon: p$,
            PaperClipIcon: d$,
            ParagraphIcon: f$,
            PassedIcon: y$,
            PhoneIcon: h$,
            PhotoDragIcon: m$,
            PhotoIcon: g$,
            PinAltIcon: b$,
            PinIcon: v$,
            PlayBackIcon: x$,
            PlayIcon: E$,
            PlayNextIcon: w$,
            PlusIcon: S$,
            PointerDefaultIcon: A$,
            PointerHandIcon: T$,
            PowerIcon: C$,
            PrintIcon: _$,
            ProceedIcon: O$,
            ProfileIcon: I$,
            PullRequestIcon: P$,
            QuestionIcon: k$,
            RSSIcon: R$,
            RedirectIcon: D$,
            ReduxIcon: F$,
            RefreshIcon: j$,
            ReplyIcon: N$,
            RepoIcon: B$,
            RequestChangeIcon: L$,
            RewindIcon: q$,
            RulerIcon: M$,
            SearchIcon: U$,
            ShareAltIcon: J$,
            ShareIcon: $$,
            ShieldIcon: z$,
            SideBySideIcon: V$,
            SidebarAltIcon: H$,
            SidebarAltToggleIcon: G$,
            SidebarIcon: W$,
            SidebarToggleIcon: K$,
            SpeakerIcon: Y$,
            StackedIcon: X$,
            StarHollowIcon: Q$,
            StarIcon: Z$,
            StickerIcon: ez,
            StopAltIcon: tz,
            StopIcon: rz,
            StorybookIcon: nz,
            StructureIcon: oz,
            SubtractIcon: $u,
            SunIcon: az,
            SupportIcon: iz,
            SwitchAltIcon: sz,
            SyncIcon: lz,
            TabletIcon: uz,
            ThumbsUpIcon: cz,
            TimeIcon: pz,
            TimerIcon: dz,
            TransferIcon: fz,
            TrashIcon: yz,
            TwitterIcon: hz,
            TypeIcon: mz,
            UbuntuIcon: gz,
            UndoIcon: si,
            UnfoldIcon: bz,
            UnlockIcon: vz,
            UnpinIcon: xz,
            UploadIcon: Ez,
            UserAddIcon: wz,
            UserAltIcon: Sz,
            UserIcon: Az,
            UsersIcon: Tz,
            VSCodeIcon: Cz,
            VerifiedIcon: _z,
            VideoIcon: zu,
            WandIcon: Oz,
            WatchIcon: Iz,
            WindowsIcon: Pz,
            WrenchIcon: kz,
            YoutubeIcon: Rz,
            ZoomIcon: Vu,
            ZoomOutIcon: Hu,
            ZoomResetIcon: Gu,
            iconList: Dz,
          } = __STORYBOOK_ICONS__);
      });
    var ui = J((Lz, Wu) => {
      S();
      A();
      T();
      function H1(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
          o[r] = t(e[r], r, e);
        return o;
      }
      Wu.exports = H1;
    });
    var Yu = J((Jz, Ku) => {
      S();
      A();
      T();
      function G1() {
        (this.__data__ = []), (this.size = 0);
      }
      Ku.exports = G1;
    });
    var vo = J((Hz, Xu) => {
      S();
      A();
      T();
      function W1(e, t) {
        return e === t || (e !== e && t !== t);
      }
      Xu.exports = W1;
    });
    var En = J((Yz, Qu) => {
      S();
      A();
      T();
      var K1 = vo();
      function Y1(e, t) {
        for (var r = e.length; r--; ) if (K1(e[r][0], t)) return r;
        return -1;
      }
      Qu.exports = Y1;
    });
    var ec = J((e7, Zu) => {
      S();
      A();
      T();
      var X1 = En(),
        Q1 = Array.prototype,
        Z1 = Q1.splice;
      function ex(e) {
        var t = this.__data__,
          r = X1(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : Z1.call(t, r, 1), --this.size, !0;
      }
      Zu.exports = ex;
    });
    var rc = J((o7, tc) => {
      S();
      A();
      T();
      var tx = En();
      function rx(e) {
        var t = this.__data__,
          r = tx(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      tc.exports = rx;
    });
    var oc = J((l7, nc) => {
      S();
      A();
      T();
      var nx = En();
      function ox(e) {
        return nx(this.__data__, e) > -1;
      }
      nc.exports = ox;
    });
    var ic = J((d7, ac) => {
      S();
      A();
      T();
      var ax = En();
      function ix(e, t) {
        var r = this.__data__,
          n = ax(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      }
      ac.exports = ix;
    });
    var wn = J((m7, sc) => {
      S();
      A();
      T();
      var sx = Yu(),
        lx = ec(),
        ux = rc(),
        cx = oc(),
        px = ic();
      function Rr(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Rr.prototype.clear = sx;
      Rr.prototype.delete = lx;
      Rr.prototype.get = ux;
      Rr.prototype.has = cx;
      Rr.prototype.set = px;
      sc.exports = Rr;
    });
    var uc = J((x7, lc) => {
      S();
      A();
      T();
      var dx = wn();
      function fx() {
        (this.__data__ = new dx()), (this.size = 0);
      }
      lc.exports = fx;
    });
    var pc = J((A7, cc) => {
      S();
      A();
      T();
      function yx(e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      }
      cc.exports = yx;
    });
    var fc = J((O7, dc) => {
      S();
      A();
      T();
      function hx(e) {
        return this.__data__.get(e);
      }
      dc.exports = hx;
    });
    var hc = J((R7, yc) => {
      S();
      A();
      T();
      function mx(e) {
        return this.__data__.has(e);
      }
      yc.exports = mx;
    });
    var ci = J((N7, mc) => {
      S();
      A();
      T();
      var gx =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window;
      mc.exports = gx;
    });
    var st = J((M7, gc) => {
      S();
      A();
      T();
      var bx = ci(),
        vx = typeof self == 'object' && self && self.Object === Object && self,
        xx = bx || vx || Function('return this')();
      gc.exports = xx;
    });
    var Dr = J((z7, bc) => {
      S();
      A();
      T();
      var Ex = st(),
        wx = Ex.Symbol;
      bc.exports = wx;
    });
    var wc = J((W7, Ec) => {
      S();
      A();
      T();
      var vc = Dr(),
        xc = Object.prototype,
        Sx = xc.hasOwnProperty,
        Ax = xc.toString,
        Sn = vc ? vc.toStringTag : void 0;
      function Tx(e) {
        var t = Sx.call(e, Sn),
          r = e[Sn];
        try {
          e[Sn] = void 0;
          var n = !0;
        } catch {}
        var o = Ax.call(e);
        return n && (t ? (e[Sn] = r) : delete e[Sn]), o;
      }
      Ec.exports = Tx;
    });
    var Ac = J((Q7, Sc) => {
      S();
      A();
      T();
      var Cx = Object.prototype,
        _x = Cx.toString;
      function Ox(e) {
        return _x.call(e);
      }
      Sc.exports = Ox;
    });
    var Fr = J((rV, _c) => {
      S();
      A();
      T();
      var Tc = Dr(),
        Ix = wc(),
        Px = Ac(),
        kx = '[object Null]',
        Rx = '[object Undefined]',
        Cc = Tc ? Tc.toStringTag : void 0;
      function Dx(e) {
        return e == null
          ? e === void 0
            ? Rx
            : kx
          : Cc && Cc in Object(e)
            ? Ix(e)
            : Px(e);
      }
      _c.exports = Dx;
    });
    var gt = J((iV, Oc) => {
      S();
      A();
      T();
      function Fx(e) {
        var t = typeof e;
        return e != null && (t == 'object' || t == 'function');
      }
      Oc.exports = Fx;
    });
    var pi = J((cV, Ic) => {
      S();
      A();
      T();
      var jx = Fr(),
        Nx = gt(),
        Bx = '[object AsyncFunction]',
        Lx = '[object Function]',
        qx = '[object GeneratorFunction]',
        Mx = '[object Proxy]';
      function Ux(e) {
        if (!Nx(e)) return !1;
        var t = jx(e);
        return t == Lx || t == qx || t == Bx || t == Mx;
      }
      Ic.exports = Ux;
    });
    var kc = J((yV, Pc) => {
      S();
      A();
      T();
      var Jx = st(),
        $x = Jx['__core-js_shared__'];
      Pc.exports = $x;
    });
    var Fc = J((bV, Dc) => {
      S();
      A();
      T();
      var di = kc(),
        Rc = (function () {
          var e = /[^.]+$/.exec((di && di.keys && di.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })();
      function zx(e) {
        return !!Rc && Rc in e;
      }
      Dc.exports = zx;
    });
    var fi = J((wV, jc) => {
      S();
      A();
      T();
      var Vx = Function.prototype,
        Hx = Vx.toString;
      function Gx(e) {
        if (e != null) {
          try {
            return Hx.call(e);
          } catch {}
          try {
            return e + '';
          } catch {}
        }
        return '';
      }
      jc.exports = Gx;
    });
    var Bc = J((CV, Nc) => {
      S();
      A();
      T();
      var Wx = pi(),
        Kx = Fc(),
        Yx = gt(),
        Xx = fi(),
        Qx = /[\\^$.*+?()[\]{}|]/g,
        Zx = /^\[object .+?Constructor\]$/,
        eE = Function.prototype,
        tE = Object.prototype,
        rE = eE.toString,
        nE = tE.hasOwnProperty,
        oE = RegExp(
          '^' +
            rE
              .call(nE)
              .replace(Qx, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      function aE(e) {
        if (!Yx(e) || Kx(e)) return !1;
        var t = Wx(e) ? oE : Zx;
        return t.test(Xx(e));
      }
      Nc.exports = aE;
    });
    var qc = J((PV, Lc) => {
      S();
      A();
      T();
      function iE(e, t) {
        return e?.[t];
      }
      Lc.exports = iE;
    });
    var qt = J((FV, Mc) => {
      S();
      A();
      T();
      var sE = Bc(),
        lE = qc();
      function uE(e, t) {
        var r = lE(e, t);
        return sE(r) ? r : void 0;
      }
      Mc.exports = uE;
    });
    var xo = J((LV, Uc) => {
      S();
      A();
      T();
      var cE = qt(),
        pE = st(),
        dE = cE(pE, 'Map');
      Uc.exports = dE;
    });
    var An = J((JV, Jc) => {
      S();
      A();
      T();
      var fE = qt(),
        yE = fE(Object, 'create');
      Jc.exports = yE;
    });
    var Vc = J((HV, zc) => {
      S();
      A();
      T();
      var $c = An();
      function hE() {
        (this.__data__ = $c ? $c(null) : {}), (this.size = 0);
      }
      zc.exports = hE;
    });
    var Gc = J((YV, Hc) => {
      S();
      A();
      T();
      function mE(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      Hc.exports = mE;
    });
    var Kc = J((eH, Wc) => {
      S();
      A();
      T();
      var gE = An(),
        bE = '__lodash_hash_undefined__',
        vE = Object.prototype,
        xE = vE.hasOwnProperty;
      function EE(e) {
        var t = this.__data__;
        if (gE) {
          var r = t[e];
          return r === bE ? void 0 : r;
        }
        return xE.call(t, e) ? t[e] : void 0;
      }
      Wc.exports = EE;
    });
    var Xc = J((oH, Yc) => {
      S();
      A();
      T();
      var wE = An(),
        SE = Object.prototype,
        AE = SE.hasOwnProperty;
      function TE(e) {
        var t = this.__data__;
        return wE ? t[e] !== void 0 : AE.call(t, e);
      }
      Yc.exports = TE;
    });
    var Zc = J((lH, Qc) => {
      S();
      A();
      T();
      var CE = An(),
        _E = '__lodash_hash_undefined__';
      function OE(e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = CE && t === void 0 ? _E : t),
          this
        );
      }
      Qc.exports = OE;
    });
    var tp = J((dH, ep) => {
      S();
      A();
      T();
      var IE = Vc(),
        PE = Gc(),
        kE = Kc(),
        RE = Xc(),
        DE = Zc();
      function jr(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      jr.prototype.clear = IE;
      jr.prototype.delete = PE;
      jr.prototype.get = kE;
      jr.prototype.has = RE;
      jr.prototype.set = DE;
      ep.exports = jr;
    });
    var op = J((mH, np) => {
      S();
      A();
      T();
      var rp = tp(),
        FE = wn(),
        jE = xo();
      function NE() {
        (this.size = 0),
          (this.__data__ = {
            hash: new rp(),
            map: new (jE || FE)(),
            string: new rp(),
          });
      }
      np.exports = NE;
    });
    var ip = J((xH, ap) => {
      S();
      A();
      T();
      function BE(e) {
        var t = typeof e;
        return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
          ? e !== '__proto__'
          : e === null;
      }
      ap.exports = BE;
    });
    var Tn = J((AH, sp) => {
      S();
      A();
      T();
      var LE = ip();
      function qE(e, t) {
        var r = e.__data__;
        return LE(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
      }
      sp.exports = qE;
    });
    var up = J((OH, lp) => {
      S();
      A();
      T();
      var ME = Tn();
      function UE(e) {
        var t = ME(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      }
      lp.exports = UE;
    });
    var pp = J((RH, cp) => {
      S();
      A();
      T();
      var JE = Tn();
      function $E(e) {
        return JE(this, e).get(e);
      }
      cp.exports = $E;
    });
    var fp = J((NH, dp) => {
      S();
      A();
      T();
      var zE = Tn();
      function VE(e) {
        return zE(this, e).has(e);
      }
      dp.exports = VE;
    });
    var hp = J((MH, yp) => {
      S();
      A();
      T();
      var HE = Tn();
      function GE(e, t) {
        var r = HE(this, e),
          n = r.size;
        return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
      }
      yp.exports = GE;
    });
    var Eo = J((zH, mp) => {
      S();
      A();
      T();
      var WE = op(),
        KE = up(),
        YE = pp(),
        XE = fp(),
        QE = hp();
      function Nr(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Nr.prototype.clear = WE;
      Nr.prototype.delete = KE;
      Nr.prototype.get = YE;
      Nr.prototype.has = XE;
      Nr.prototype.set = QE;
      mp.exports = Nr;
    });
    var bp = J((WH, gp) => {
      S();
      A();
      T();
      var ZE = wn(),
        ew = xo(),
        tw = Eo(),
        rw = 200;
      function nw(e, t) {
        var r = this.__data__;
        if (r instanceof ZE) {
          var n = r.__data__;
          if (!ew || n.length < rw - 1)
            return n.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new tw(n);
        }
        return r.set(e, t), (this.size = r.size), this;
      }
      gp.exports = nw;
    });
    var wo = J((QH, vp) => {
      S();
      A();
      T();
      var ow = wn(),
        aw = uc(),
        iw = pc(),
        sw = fc(),
        lw = hc(),
        uw = bp();
      function Br(e) {
        var t = (this.__data__ = new ow(e));
        this.size = t.size;
      }
      Br.prototype.clear = aw;
      Br.prototype.delete = iw;
      Br.prototype.get = sw;
      Br.prototype.has = lw;
      Br.prototype.set = uw;
      vp.exports = Br;
    });
    var Ep = J((rG, xp) => {
      S();
      A();
      T();
      var cw = '__lodash_hash_undefined__';
      function pw(e) {
        return this.__data__.set(e, cw), this;
      }
      xp.exports = pw;
    });
    var Sp = J((iG, wp) => {
      S();
      A();
      T();
      function dw(e) {
        return this.__data__.has(e);
      }
      wp.exports = dw;
    });
    var yi = J((cG, Ap) => {
      S();
      A();
      T();
      var fw = Eo(),
        yw = Ep(),
        hw = Sp();
      function So(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.__data__ = new fw(); ++t < r; ) this.add(e[t]);
      }
      So.prototype.add = So.prototype.push = yw;
      So.prototype.has = hw;
      Ap.exports = So;
    });
    var Cp = J((yG, Tp) => {
      S();
      A();
      T();
      function mw(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      Tp.exports = mw;
    });
    var hi = J((bG, _p) => {
      S();
      A();
      T();
      function gw(e, t) {
        return e.has(t);
      }
      _p.exports = gw;
    });
    var mi = J((wG, Op) => {
      S();
      A();
      T();
      var bw = yi(),
        vw = Cp(),
        xw = hi(),
        Ew = 1,
        ww = 2;
      function Sw(e, t, r, n, o, a) {
        var i = r & Ew,
          s = e.length,
          l = t.length;
        if (s != l && !(i && l > s)) return !1;
        var u = a.get(e),
          c = a.get(t);
        if (u && c) return u == t && c == e;
        var d = -1,
          y = !0,
          f = r & ww ? new bw() : void 0;
        for (a.set(e, t), a.set(t, e); ++d < s; ) {
          var h = e[d],
            g = t[d];
          if (n) var _ = i ? n(g, h, d, t, e, a) : n(h, g, d, e, t, a);
          if (_ !== void 0) {
            if (_) continue;
            y = !1;
            break;
          }
          if (f) {
            if (
              !vw(t, function (x, v) {
                if (!xw(f, v) && (h === x || o(h, x, r, n, a)))
                  return f.push(v);
              })
            ) {
              y = !1;
              break;
            }
          } else if (!(h === g || o(h, g, r, n, a))) {
            y = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), y;
      }
      Op.exports = Sw;
    });
    var gi = J((CG, Ip) => {
      S();
      A();
      T();
      var Aw = st(),
        Tw = Aw.Uint8Array;
      Ip.exports = Tw;
    });
    var kp = J((PG, Pp) => {
      S();
      A();
      T();
      function Cw(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (n, o) {
            r[++t] = [o, n];
          }),
          r
        );
      }
      Pp.exports = Cw;
    });
    var Ao = J((FG, Rp) => {
      S();
      A();
      T();
      function _w(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (n) {
            r[++t] = n;
          }),
          r
        );
      }
      Rp.exports = _w;
    });
    var Bp = J((LG, Np) => {
      S();
      A();
      T();
      var Dp = Dr(),
        Fp = gi(),
        Ow = vo(),
        Iw = mi(),
        Pw = kp(),
        kw = Ao(),
        Rw = 1,
        Dw = 2,
        Fw = '[object Boolean]',
        jw = '[object Date]',
        Nw = '[object Error]',
        Bw = '[object Map]',
        Lw = '[object Number]',
        qw = '[object RegExp]',
        Mw = '[object Set]',
        Uw = '[object String]',
        Jw = '[object Symbol]',
        $w = '[object ArrayBuffer]',
        zw = '[object DataView]',
        jp = Dp ? Dp.prototype : void 0,
        bi = jp ? jp.valueOf : void 0;
      function Vw(e, t, r, n, o, a, i) {
        switch (r) {
          case zw:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case $w:
            return !(e.byteLength != t.byteLength || !a(new Fp(e), new Fp(t)));
          case Fw:
          case jw:
          case Lw:
            return Ow(+e, +t);
          case Nw:
            return e.name == t.name && e.message == t.message;
          case qw:
          case Uw:
            return e == t + '';
          case Bw:
            var s = Pw;
          case Mw:
            var l = n & Rw;
            if ((s || (s = kw), e.size != t.size && !l)) return !1;
            var u = i.get(e);
            if (u) return u == t;
            (n |= Dw), i.set(e, t);
            var c = Iw(s(e), s(t), n, o, a, i);
            return i.delete(e), c;
          case Jw:
            if (bi) return bi.call(e) == bi.call(t);
        }
        return !1;
      }
      Np.exports = Vw;
    });
    var vi = J((JG, Lp) => {
      S();
      A();
      T();
      function Hw(e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
        return e;
      }
      Lp.exports = Hw;
    });
    var bt = J((HG, qp) => {
      S();
      A();
      T();
      var Gw = Array.isArray;
      qp.exports = Gw;
    });
    var xi = J((YG, Mp) => {
      S();
      A();
      T();
      var Ww = vi(),
        Kw = bt();
      function Yw(e, t, r) {
        var n = t(e);
        return Kw(e) ? n : Ww(n, r(e));
      }
      Mp.exports = Yw;
    });
    var Jp = J((eW, Up) => {
      S();
      A();
      T();
      function Xw(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length, o = 0, a = [];
          ++r < n;

        ) {
          var i = e[r];
          t(i, r, e) && (a[o++] = i);
        }
        return a;
      }
      Up.exports = Xw;
    });
    var Ei = J((oW, $p) => {
      S();
      A();
      T();
      function Qw() {
        return [];
      }
      $p.exports = Qw;
    });
    var To = J((lW, Vp) => {
      S();
      A();
      T();
      var Zw = Jp(),
        eS = Ei(),
        tS = Object.prototype,
        rS = tS.propertyIsEnumerable,
        zp = Object.getOwnPropertySymbols,
        nS = zp
          ? function (e) {
              return e == null
                ? []
                : ((e = Object(e)),
                  Zw(zp(e), function (t) {
                    return rS.call(e, t);
                  }));
            }
          : eS;
      Vp.exports = nS;
    });
    var Gp = J((dW, Hp) => {
      S();
      A();
      T();
      function oS(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      }
      Hp.exports = oS;
    });
    var Mt = J((mW, Wp) => {
      S();
      A();
      T();
      function aS(e) {
        return e != null && typeof e == 'object';
      }
      Wp.exports = aS;
    });
    var Yp = J((xW, Kp) => {
      S();
      A();
      T();
      var iS = Fr(),
        sS = Mt(),
        lS = '[object Arguments]';
      function uS(e) {
        return sS(e) && iS(e) == lS;
      }
      Kp.exports = uS;
    });
    var wi = J((AW, Zp) => {
      S();
      A();
      T();
      var Xp = Yp(),
        cS = Mt(),
        Qp = Object.prototype,
        pS = Qp.hasOwnProperty,
        dS = Qp.propertyIsEnumerable,
        fS = Xp(
          (function () {
            return arguments;
          })()
        )
          ? Xp
          : function (e) {
              return cS(e) && pS.call(e, 'callee') && !dS.call(e, 'callee');
            };
      Zp.exports = fS;
    });
    var td = J((OW, ed) => {
      S();
      A();
      T();
      function yS() {
        return !1;
      }
      ed.exports = yS;
    });
    var Co = J((Cn, Lr) => {
      S();
      A();
      T();
      var hS = st(),
        mS = td(),
        od = typeof Cn == 'object' && Cn && !Cn.nodeType && Cn,
        rd = od && typeof Lr == 'object' && Lr && !Lr.nodeType && Lr,
        gS = rd && rd.exports === od,
        nd = gS ? hS.Buffer : void 0,
        bS = nd ? nd.isBuffer : void 0,
        vS = bS || mS;
      Lr.exports = vS;
    });
    var _o = J((jW, ad) => {
      S();
      A();
      T();
      var xS = 9007199254740991,
        ES = /^(?:0|[1-9]\d*)$/;
      function wS(e, t) {
        var r = typeof e;
        return (
          (t = t ?? xS),
          !!t &&
            (r == 'number' || (r != 'symbol' && ES.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        );
      }
      ad.exports = wS;
    });
    var Oo = J((qW, id) => {
      S();
      A();
      T();
      var SS = 9007199254740991;
      function AS(e) {
        return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= SS;
      }
      id.exports = AS;
    });
    var ld = J(($W, sd) => {
      S();
      A();
      T();
      var TS = Fr(),
        CS = Oo(),
        _S = Mt(),
        OS = '[object Arguments]',
        IS = '[object Array]',
        PS = '[object Boolean]',
        kS = '[object Date]',
        RS = '[object Error]',
        DS = '[object Function]',
        FS = '[object Map]',
        jS = '[object Number]',
        NS = '[object Object]',
        BS = '[object RegExp]',
        LS = '[object Set]',
        qS = '[object String]',
        MS = '[object WeakMap]',
        US = '[object ArrayBuffer]',
        JS = '[object DataView]',
        $S = '[object Float32Array]',
        zS = '[object Float64Array]',
        VS = '[object Int8Array]',
        HS = '[object Int16Array]',
        GS = '[object Int32Array]',
        WS = '[object Uint8Array]',
        KS = '[object Uint8ClampedArray]',
        YS = '[object Uint16Array]',
        XS = '[object Uint32Array]',
        be = {};
      be[$S] =
        be[zS] =
        be[VS] =
        be[HS] =
        be[GS] =
        be[WS] =
        be[KS] =
        be[YS] =
        be[XS] =
          !0;
      be[OS] =
        be[IS] =
        be[US] =
        be[PS] =
        be[JS] =
        be[kS] =
        be[RS] =
        be[DS] =
        be[FS] =
        be[jS] =
        be[NS] =
        be[BS] =
        be[LS] =
        be[qS] =
        be[MS] =
          !1;
      function QS(e) {
        return _S(e) && CS(e.length) && !!be[TS(e)];
      }
      sd.exports = QS;
    });
    var Io = J((GW, ud) => {
      S();
      A();
      T();
      function ZS(e) {
        return function (t) {
          return e(t);
        };
      }
      ud.exports = ZS;
    });
    var Po = J((_n, qr) => {
      S();
      A();
      T();
      var eA = ci(),
        cd = typeof _n == 'object' && _n && !_n.nodeType && _n,
        On = cd && typeof qr == 'object' && qr && !qr.nodeType && qr,
        tA = On && On.exports === cd,
        Si = tA && eA.process,
        rA = (function () {
          try {
            var e = On && On.require && On.require('util').types;
            return e || (Si && Si.binding && Si.binding('util'));
          } catch {}
        })();
      qr.exports = rA;
    });
    var Ai = J((eK, fd) => {
      S();
      A();
      T();
      var nA = ld(),
        oA = Io(),
        pd = Po(),
        dd = pd && pd.isTypedArray,
        aA = dd ? oA(dd) : nA;
      fd.exports = aA;
    });
    var Ti = J((oK, yd) => {
      S();
      A();
      T();
      var iA = Gp(),
        sA = wi(),
        lA = bt(),
        uA = Co(),
        cA = _o(),
        pA = Ai(),
        dA = Object.prototype,
        fA = dA.hasOwnProperty;
      function yA(e, t) {
        var r = lA(e),
          n = !r && sA(e),
          o = !r && !n && uA(e),
          a = !r && !n && !o && pA(e),
          i = r || n || o || a,
          s = i ? iA(e.length, String) : [],
          l = s.length;
        for (var u in e)
          (t || fA.call(e, u)) &&
            !(
              i &&
              (u == 'length' ||
                (o && (u == 'offset' || u == 'parent')) ||
                (a &&
                  (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
                cA(u, l))
            ) &&
            s.push(u);
        return s;
      }
      yd.exports = yA;
    });
    var ko = J((lK, hd) => {
      S();
      A();
      T();
      var hA = Object.prototype;
      function mA(e) {
        var t = e && e.constructor,
          r = (typeof t == 'function' && t.prototype) || hA;
        return e === r;
      }
      hd.exports = mA;
    });
    var Ci = J((dK, md) => {
      S();
      A();
      T();
      function gA(e, t) {
        return function (r) {
          return e(t(r));
        };
      }
      md.exports = gA;
    });
    var bd = J((mK, gd) => {
      S();
      A();
      T();
      var bA = Ci(),
        vA = bA(Object.keys, Object);
      gd.exports = vA;
    });
    var xd = J((xK, vd) => {
      S();
      A();
      T();
      var xA = ko(),
        EA = bd(),
        wA = Object.prototype,
        SA = wA.hasOwnProperty;
      function AA(e) {
        if (!xA(e)) return EA(e);
        var t = [];
        for (var r in Object(e))
          SA.call(e, r) && r != 'constructor' && t.push(r);
        return t;
      }
      vd.exports = AA;
    });
    var _i = J((AK, Ed) => {
      S();
      A();
      T();
      var TA = pi(),
        CA = Oo();
      function _A(e) {
        return e != null && CA(e.length) && !TA(e);
      }
      Ed.exports = _A;
    });
    var In = J((OK, wd) => {
      S();
      A();
      T();
      var OA = Ti(),
        IA = xd(),
        PA = _i();
      function kA(e) {
        return PA(e) ? OA(e) : IA(e);
      }
      wd.exports = kA;
    });
    var Oi = J((RK, Sd) => {
      S();
      A();
      T();
      var RA = xi(),
        DA = To(),
        FA = In();
      function jA(e) {
        return RA(e, FA, DA);
      }
      Sd.exports = jA;
    });
    var Cd = J((NK, Td) => {
      S();
      A();
      T();
      var Ad = Oi(),
        NA = 1,
        BA = Object.prototype,
        LA = BA.hasOwnProperty;
      function qA(e, t, r, n, o, a) {
        var i = r & NA,
          s = Ad(e),
          l = s.length,
          u = Ad(t),
          c = u.length;
        if (l != c && !i) return !1;
        for (var d = l; d--; ) {
          var y = s[d];
          if (!(i ? y in t : LA.call(t, y))) return !1;
        }
        var f = a.get(e),
          h = a.get(t);
        if (f && h) return f == t && h == e;
        var g = !0;
        a.set(e, t), a.set(t, e);
        for (var _ = i; ++d < l; ) {
          y = s[d];
          var x = e[y],
            v = t[y];
          if (n) var O = i ? n(v, x, y, t, e, a) : n(x, v, y, e, t, a);
          if (!(O === void 0 ? x === v || o(x, v, r, n, a) : O)) {
            g = !1;
            break;
          }
          _ || (_ = y == 'constructor');
        }
        if (g && !_) {
          var C = e.constructor,
            I = t.constructor;
          C != I &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              typeof C == 'function' &&
              C instanceof C &&
              typeof I == 'function' &&
              I instanceof I
            ) &&
            (g = !1);
        }
        return a.delete(e), a.delete(t), g;
      }
      Td.exports = qA;
    });
    var Od = J((MK, _d) => {
      S();
      A();
      T();
      var MA = qt(),
        UA = st(),
        JA = MA(UA, 'DataView');
      _d.exports = JA;
    });
    var Pd = J((zK, Id) => {
      S();
      A();
      T();
      var $A = qt(),
        zA = st(),
        VA = $A(zA, 'Promise');
      Id.exports = VA;
    });
    var Ii = J((WK, kd) => {
      S();
      A();
      T();
      var HA = qt(),
        GA = st(),
        WA = HA(GA, 'Set');
      kd.exports = WA;
    });
    var Dd = J((QK, Rd) => {
      S();
      A();
      T();
      var KA = qt(),
        YA = st(),
        XA = KA(YA, 'WeakMap');
      Rd.exports = XA;
    });
    var Pn = J((rY, Md) => {
      S();
      A();
      T();
      var Pi = Od(),
        ki = xo(),
        Ri = Pd(),
        Di = Ii(),
        Fi = Dd(),
        qd = Fr(),
        Mr = fi(),
        Fd = '[object Map]',
        QA = '[object Object]',
        jd = '[object Promise]',
        Nd = '[object Set]',
        Bd = '[object WeakMap]',
        Ld = '[object DataView]',
        ZA = Mr(Pi),
        eT = Mr(ki),
        tT = Mr(Ri),
        rT = Mr(Di),
        nT = Mr(Fi),
        sr = qd;
      ((Pi && sr(new Pi(new ArrayBuffer(1))) != Ld) ||
        (ki && sr(new ki()) != Fd) ||
        (Ri && sr(Ri.resolve()) != jd) ||
        (Di && sr(new Di()) != Nd) ||
        (Fi && sr(new Fi()) != Bd)) &&
        (sr = function (e) {
          var t = qd(e),
            r = t == QA ? e.constructor : void 0,
            n = r ? Mr(r) : '';
          if (n)
            switch (n) {
              case ZA:
                return Ld;
              case eT:
                return Fd;
              case tT:
                return jd;
              case rT:
                return Nd;
              case nT:
                return Bd;
            }
          return t;
        });
      Md.exports = sr;
    });
    var Wd = J((iY, Gd) => {
      S();
      A();
      T();
      var ji = wo(),
        oT = mi(),
        aT = Bp(),
        iT = Cd(),
        Ud = Pn(),
        Jd = bt(),
        $d = Co(),
        sT = Ai(),
        lT = 1,
        zd = '[object Arguments]',
        Vd = '[object Array]',
        Ro = '[object Object]',
        uT = Object.prototype,
        Hd = uT.hasOwnProperty;
      function cT(e, t, r, n, o, a) {
        var i = Jd(e),
          s = Jd(t),
          l = i ? Vd : Ud(e),
          u = s ? Vd : Ud(t);
        (l = l == zd ? Ro : l), (u = u == zd ? Ro : u);
        var c = l == Ro,
          d = u == Ro,
          y = l == u;
        if (y && $d(e)) {
          if (!$d(t)) return !1;
          (i = !0), (c = !1);
        }
        if (y && !c)
          return (
            a || (a = new ji()),
            i || sT(e) ? oT(e, t, r, n, o, a) : aT(e, t, l, r, n, o, a)
          );
        if (!(r & lT)) {
          var f = c && Hd.call(e, '__wrapped__'),
            h = d && Hd.call(t, '__wrapped__');
          if (f || h) {
            var g = f ? e.value() : e,
              _ = h ? t.value() : t;
            return a || (a = new ji()), o(g, _, r, n, a);
          }
        }
        return y ? (a || (a = new ji()), iT(e, t, r, n, o, a)) : !1;
      }
      Gd.exports = cT;
    });
    var Ni = J((cY, Xd) => {
      S();
      A();
      T();
      var pT = Wd(),
        Kd = Mt();
      function Yd(e, t, r, n, o) {
        return e === t
          ? !0
          : e == null || t == null || (!Kd(e) && !Kd(t))
            ? e !== e && t !== t
            : pT(e, t, r, n, Yd, o);
      }
      Xd.exports = Yd;
    });
    var Zd = J((yY, Qd) => {
      S();
      A();
      T();
      var dT = wo(),
        fT = Ni(),
        yT = 1,
        hT = 2;
      function mT(e, t, r, n) {
        var o = r.length,
          a = o,
          i = !n;
        if (e == null) return !a;
        for (e = Object(e); o--; ) {
          var s = r[o];
          if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
        }
        for (; ++o < a; ) {
          s = r[o];
          var l = s[0],
            u = e[l],
            c = s[1];
          if (i && s[2]) {
            if (u === void 0 && !(l in e)) return !1;
          } else {
            var d = new dT();
            if (n) var y = n(u, c, l, e, t, d);
            if (!(y === void 0 ? fT(c, u, yT | hT, n, d) : y)) return !1;
          }
        }
        return !0;
      }
      Qd.exports = mT;
    });
    var Bi = J((bY, ef) => {
      S();
      A();
      T();
      var gT = gt();
      function bT(e) {
        return e === e && !gT(e);
      }
      ef.exports = bT;
    });
    var rf = J((wY, tf) => {
      S();
      A();
      T();
      var vT = Bi(),
        xT = In();
      function ET(e) {
        for (var t = xT(e), r = t.length; r--; ) {
          var n = t[r],
            o = e[n];
          t[r] = [n, o, vT(o)];
        }
        return t;
      }
      tf.exports = ET;
    });
    var Li = J((CY, nf) => {
      S();
      A();
      T();
      function wT(e, t) {
        return function (r) {
          return r == null
            ? !1
            : r[e] === t && (t !== void 0 || e in Object(r));
        };
      }
      nf.exports = wT;
    });
    var af = J((PY, of) => {
      S();
      A();
      T();
      var ST = Zd(),
        AT = rf(),
        TT = Li();
      function CT(e) {
        var t = AT(e);
        return t.length == 1 && t[0][2]
          ? TT(t[0][0], t[0][1])
          : function (r) {
              return r === e || ST(r, e, t);
            };
      }
      of.exports = CT;
    });
    var kn = J((FY, sf) => {
      S();
      A();
      T();
      var _T = Fr(),
        OT = Mt(),
        IT = '[object Symbol]';
      function PT(e) {
        return typeof e == 'symbol' || (OT(e) && _T(e) == IT);
      }
      sf.exports = PT;
    });
    var Do = J((LY, lf) => {
      S();
      A();
      T();
      var kT = bt(),
        RT = kn(),
        DT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        FT = /^\w*$/;
      function jT(e, t) {
        if (kT(e)) return !1;
        var r = typeof e;
        return r == 'number' ||
          r == 'symbol' ||
          r == 'boolean' ||
          e == null ||
          RT(e)
          ? !0
          : FT.test(e) || !DT.test(e) || (t != null && e in Object(t));
      }
      lf.exports = jT;
    });
    var pf = J((JY, cf) => {
      S();
      A();
      T();
      var uf = Eo(),
        NT = 'Expected a function';
      function qi(e, t) {
        if (typeof e != 'function' || (t != null && typeof t != 'function'))
          throw new TypeError(NT);
        var r = function () {
          var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(o)) return a.get(o);
          var i = e.apply(this, n);
          return (r.cache = a.set(o, i) || a), i;
        };
        return (r.cache = new (qi.Cache || uf)()), r;
      }
      qi.Cache = uf;
      cf.exports = qi;
    });
    var ff = J((HY, df) => {
      S();
      A();
      T();
      var BT = pf(),
        LT = 500;
      function qT(e) {
        var t = BT(e, function (n) {
            return r.size === LT && r.clear(), n;
          }),
          r = t.cache;
        return t;
      }
      df.exports = qT;
    });
    var hf = J((YY, yf) => {
      S();
      A();
      T();
      var MT = ff(),
        UT =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        JT = /\\(\\)?/g,
        $T = MT(function (e) {
          var t = [];
          return (
            e.charCodeAt(0) === 46 && t.push(''),
            e.replace(UT, function (r, n, o, a) {
              t.push(o ? a.replace(JT, '$1') : n || r);
            }),
            t
          );
        });
      yf.exports = $T;
    });
    var Ef = J((eX, xf) => {
      S();
      A();
      T();
      var mf = Dr(),
        zT = ui(),
        VT = bt(),
        HT = kn(),
        GT = 1 / 0,
        gf = mf ? mf.prototype : void 0,
        bf = gf ? gf.toString : void 0;
      function vf(e) {
        if (typeof e == 'string') return e;
        if (VT(e)) return zT(e, vf) + '';
        if (HT(e)) return bf ? bf.call(e) : '';
        var t = e + '';
        return t == '0' && 1 / e == -GT ? '-0' : t;
      }
      xf.exports = vf;
    });
    var Sf = J((oX, wf) => {
      S();
      A();
      T();
      var WT = Ef();
      function KT(e) {
        return e == null ? '' : WT(e);
      }
      wf.exports = KT;
    });
    var Rn = J((lX, Af) => {
      S();
      A();
      T();
      var YT = bt(),
        XT = Do(),
        QT = hf(),
        ZT = Sf();
      function eC(e, t) {
        return YT(e) ? e : XT(e, t) ? [e] : QT(ZT(e));
      }
      Af.exports = eC;
    });
    var Ur = J((dX, Tf) => {
      S();
      A();
      T();
      var tC = kn(),
        rC = 1 / 0;
      function nC(e) {
        if (typeof e == 'string' || tC(e)) return e;
        var t = e + '';
        return t == '0' && 1 / e == -rC ? '-0' : t;
      }
      Tf.exports = nC;
    });
    var Fo = J((mX, Cf) => {
      S();
      A();
      T();
      var oC = Rn(),
        aC = Ur();
      function iC(e, t) {
        t = oC(t, e);
        for (var r = 0, n = t.length; e != null && r < n; ) e = e[aC(t[r++])];
        return r && r == n ? e : void 0;
      }
      Cf.exports = iC;
    });
    var Of = J((xX, _f) => {
      S();
      A();
      T();
      var sC = Fo();
      function lC(e, t, r) {
        var n = e == null ? void 0 : sC(e, t);
        return n === void 0 ? r : n;
      }
      _f.exports = lC;
    });
    var Pf = J((AX, If) => {
      S();
      A();
      T();
      function uC(e, t) {
        return e != null && t in Object(e);
      }
      If.exports = uC;
    });
    var Rf = J((OX, kf) => {
      S();
      A();
      T();
      var cC = Rn(),
        pC = wi(),
        dC = bt(),
        fC = _o(),
        yC = Oo(),
        hC = Ur();
      function mC(e, t, r) {
        t = cC(t, e);
        for (var n = -1, o = t.length, a = !1; ++n < o; ) {
          var i = hC(t[n]);
          if (!(a = e != null && r(e, i))) break;
          e = e[i];
        }
        return a || ++n != o
          ? a
          : ((o = e == null ? 0 : e.length),
            !!o && yC(o) && fC(i, o) && (dC(e) || pC(e)));
      }
      kf.exports = mC;
    });
    var Ff = J((RX, Df) => {
      S();
      A();
      T();
      var gC = Pf(),
        bC = Rf();
      function vC(e, t) {
        return e != null && bC(e, t, gC);
      }
      Df.exports = vC;
    });
    var Nf = J((NX, jf) => {
      S();
      A();
      T();
      var xC = Ni(),
        EC = Of(),
        wC = Ff(),
        SC = Do(),
        AC = Bi(),
        TC = Li(),
        CC = Ur(),
        _C = 1,
        OC = 2;
      function IC(e, t) {
        return SC(e) && AC(t)
          ? TC(CC(e), t)
          : function (r) {
              var n = EC(r, e);
              return n === void 0 && n === t ? wC(r, e) : xC(t, n, _C | OC);
            };
      }
      jf.exports = IC;
    });
    var Lf = J((MX, Bf) => {
      S();
      A();
      T();
      function PC(e) {
        return e;
      }
      Bf.exports = PC;
    });
    var Mf = J((zX, qf) => {
      S();
      A();
      T();
      function kC(e) {
        return function (t) {
          return t?.[e];
        };
      }
      qf.exports = kC;
    });
    var Jf = J((WX, Uf) => {
      S();
      A();
      T();
      var RC = Fo();
      function DC(e) {
        return function (t) {
          return RC(t, e);
        };
      }
      Uf.exports = DC;
    });
    var zf = J((QX, $f) => {
      S();
      A();
      T();
      var FC = Mf(),
        jC = Jf(),
        NC = Do(),
        BC = Ur();
      function LC(e) {
        return NC(e) ? FC(BC(e)) : jC(e);
      }
      $f.exports = LC;
    });
    var Hf = J((rQ, Vf) => {
      S();
      A();
      T();
      var qC = af(),
        MC = Nf(),
        UC = Lf(),
        JC = bt(),
        $C = zf();
      function zC(e) {
        return typeof e == 'function'
          ? e
          : e == null
            ? UC
            : typeof e == 'object'
              ? JC(e)
                ? MC(e[0], e[1])
                : qC(e)
              : $C(e);
      }
      Vf.exports = zC;
    });
    var Wf = J((iQ, Gf) => {
      S();
      A();
      T();
      var VC = qt(),
        HC = (function () {
          try {
            var e = VC(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch {}
        })();
      Gf.exports = HC;
    });
    var Mi = J((cQ, Yf) => {
      S();
      A();
      T();
      var Kf = Wf();
      function GC(e, t, r) {
        t == '__proto__' && Kf
          ? Kf(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      }
      Yf.exports = GC;
    });
    var jo = J((yQ, Xf) => {
      S();
      A();
      T();
      var WC = Mi(),
        KC = vo(),
        YC = Object.prototype,
        XC = YC.hasOwnProperty;
      function QC(e, t, r) {
        var n = e[t];
        (!(XC.call(e, t) && KC(n, r)) || (r === void 0 && !(t in e))) &&
          WC(e, t, r);
      }
      Xf.exports = QC;
    });
    var ey = J((bQ, Zf) => {
      S();
      A();
      T();
      var ZC = jo(),
        e_ = Rn(),
        t_ = _o(),
        Qf = gt(),
        r_ = Ur();
      function n_(e, t, r, n) {
        if (!Qf(e)) return e;
        t = e_(t, e);
        for (
          var o = -1, a = t.length, i = a - 1, s = e;
          s != null && ++o < a;

        ) {
          var l = r_(t[o]),
            u = r;
          if (l === '__proto__' || l === 'constructor' || l === 'prototype')
            return e;
          if (o != i) {
            var c = s[l];
            (u = n ? n(c, l, s) : void 0),
              u === void 0 && (u = Qf(c) ? c : t_(t[o + 1]) ? [] : {});
          }
          ZC(s, l, u), (s = s[l]);
        }
        return e;
      }
      Zf.exports = n_;
    });
    var ry = J((wQ, ty) => {
      S();
      A();
      T();
      var o_ = Fo(),
        a_ = ey(),
        i_ = Rn();
      function s_(e, t, r) {
        for (var n = -1, o = t.length, a = {}; ++n < o; ) {
          var i = t[n],
            s = o_(e, i);
          r(s, i) && a_(a, i_(i, e), s);
        }
        return a;
      }
      ty.exports = s_;
    });
    var Ui = J((CQ, ny) => {
      S();
      A();
      T();
      var l_ = Ci(),
        u_ = l_(Object.getPrototypeOf, Object);
      ny.exports = u_;
    });
    var Ji = J((PQ, oy) => {
      S();
      A();
      T();
      var c_ = vi(),
        p_ = Ui(),
        d_ = To(),
        f_ = Ei(),
        y_ = Object.getOwnPropertySymbols,
        h_ = y_
          ? function (e) {
              for (var t = []; e; ) c_(t, d_(e)), (e = p_(e));
              return t;
            }
          : f_;
      oy.exports = h_;
    });
    var iy = J((FQ, ay) => {
      S();
      A();
      T();
      function m_(e) {
        var t = [];
        if (e != null) for (var r in Object(e)) t.push(r);
        return t;
      }
      ay.exports = m_;
    });
    var ly = J((LQ, sy) => {
      S();
      A();
      T();
      var g_ = gt(),
        b_ = ko(),
        v_ = iy(),
        x_ = Object.prototype,
        E_ = x_.hasOwnProperty;
      function w_(e) {
        if (!g_(e)) return v_(e);
        var t = b_(e),
          r = [];
        for (var n in e)
          (n == 'constructor' && (t || !E_.call(e, n))) || r.push(n);
        return r;
      }
      sy.exports = w_;
    });
    var No = J((JQ, uy) => {
      S();
      A();
      T();
      var S_ = Ti(),
        A_ = ly(),
        T_ = _i();
      function C_(e) {
        return T_(e) ? S_(e, !0) : A_(e);
      }
      uy.exports = C_;
    });
    var $i = J((HQ, cy) => {
      S();
      A();
      T();
      var __ = xi(),
        O_ = Ji(),
        I_ = No();
      function P_(e) {
        return __(e, I_, O_);
      }
      cy.exports = P_;
    });
    var dy = J((YQ, py) => {
      S();
      A();
      T();
      var k_ = ui(),
        R_ = Hf(),
        D_ = ry(),
        F_ = $i();
      function j_(e, t) {
        if (e == null) return {};
        var r = k_(F_(e), function (n) {
          return [n];
        });
        return (
          (t = R_(t)),
          D_(e, r, function (n, o) {
            return t(n, o[0]);
          })
        );
      }
      py.exports = j_;
    });
    var hy = J((sZ, yy) => {
      S();
      A();
      T();
      function N_(e, t, r, n) {
        for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
          if (t(e[a], a, e)) return a;
        return -1;
      }
      yy.exports = N_;
    });
    var gy = J((pZ, my) => {
      S();
      A();
      T();
      function B_(e) {
        return e !== e;
      }
      my.exports = B_;
    });
    var vy = J((hZ, by) => {
      S();
      A();
      T();
      function L_(e, t, r) {
        for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n;
        return -1;
      }
      by.exports = L_;
    });
    var Ey = J((vZ, xy) => {
      S();
      A();
      T();
      var q_ = hy(),
        M_ = gy(),
        U_ = vy();
      function J_(e, t, r) {
        return t === t ? U_(e, t, r) : q_(e, M_, r);
      }
      xy.exports = J_;
    });
    var Sy = J((SZ, wy) => {
      S();
      A();
      T();
      var $_ = Ey();
      function z_(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && $_(e, t, 0) > -1;
      }
      wy.exports = z_;
    });
    var Ty = J((_Z, Ay) => {
      S();
      A();
      T();
      function V_(e, t, r) {
        for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
          if (r(t, e[n])) return !0;
        return !1;
      }
      Ay.exports = V_;
    });
    var _y = J((kZ, Cy) => {
      S();
      A();
      T();
      function H_() {}
      Cy.exports = H_;
    });
    var Iy = J((jZ, Oy) => {
      S();
      A();
      T();
      var zi = Ii(),
        G_ = _y(),
        W_ = Ao(),
        K_ = 1 / 0,
        Y_ =
          zi && 1 / W_(new zi([, -0]))[1] == K_
            ? function (e) {
                return new zi(e);
              }
            : G_;
      Oy.exports = Y_;
    });
    var ky = J((qZ, Py) => {
      S();
      A();
      T();
      var X_ = yi(),
        Q_ = Sy(),
        Z_ = Ty(),
        eO = hi(),
        tO = Iy(),
        rO = Ao(),
        nO = 200;
      function oO(e, t, r) {
        var n = -1,
          o = Q_,
          a = e.length,
          i = !0,
          s = [],
          l = s;
        if (r) (i = !1), (o = Z_);
        else if (a >= nO) {
          var u = t ? null : tO(e);
          if (u) return rO(u);
          (i = !1), (o = eO), (l = new X_());
        } else l = t ? [] : s;
        e: for (; ++n < a; ) {
          var c = e[n],
            d = t ? t(c) : c;
          if (((c = r || c !== 0 ? c : 0), i && d === d)) {
            for (var y = l.length; y--; ) if (l[y] === d) continue e;
            t && l.push(d), s.push(c);
          } else o(l, d, r) || (l !== s && l.push(d), s.push(c));
        }
        return s;
      }
      Py.exports = oO;
    });
    var Dy = J(($Z, Ry) => {
      S();
      A();
      T();
      var aO = ky();
      function iO(e) {
        return e && e.length ? aO(e) : [];
      }
      Ry.exports = iO;
    });
    var jy = J((GZ, Fy) => {
      S();
      A();
      T();
      function sO(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length;
          ++r < n && t(e[r], r, e) !== !1;

        );
        return e;
      }
      Fy.exports = sO;
    });
    var Dn = J((XZ, Ny) => {
      S();
      A();
      T();
      var lO = jo(),
        uO = Mi();
      function cO(e, t, r, n) {
        var o = !r;
        r || (r = {});
        for (var a = -1, i = t.length; ++a < i; ) {
          var s = t[a],
            l = n ? n(r[s], e[s], s, r, e) : void 0;
          l === void 0 && (l = e[s]), o ? uO(r, s, l) : lO(r, s, l);
        }
        return r;
      }
      Ny.exports = cO;
    });
    var Ly = J((tee, By) => {
      S();
      A();
      T();
      var pO = Dn(),
        dO = In();
      function fO(e, t) {
        return e && pO(t, dO(t), e);
      }
      By.exports = fO;
    });
    var My = J((aee, qy) => {
      S();
      A();
      T();
      var yO = Dn(),
        hO = No();
      function mO(e, t) {
        return e && yO(t, hO(t), e);
      }
      qy.exports = mO;
    });
    var Vy = J((Fn, Jr) => {
      S();
      A();
      T();
      var gO = st(),
        zy = typeof Fn == 'object' && Fn && !Fn.nodeType && Fn,
        Uy = zy && typeof Jr == 'object' && Jr && !Jr.nodeType && Jr,
        bO = Uy && Uy.exports === zy,
        Jy = bO ? gO.Buffer : void 0,
        $y = Jy ? Jy.allocUnsafe : void 0;
      function vO(e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = $y ? $y(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      Jr.exports = vO;
    });
    var Gy = J((dee, Hy) => {
      S();
      A();
      T();
      function xO(e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      }
      Hy.exports = xO;
    });
    var Ky = J((mee, Wy) => {
      S();
      A();
      T();
      var EO = Dn(),
        wO = To();
      function SO(e, t) {
        return EO(e, wO(e), t);
      }
      Wy.exports = SO;
    });
    var Xy = J((xee, Yy) => {
      S();
      A();
      T();
      var AO = Dn(),
        TO = Ji();
      function CO(e, t) {
        return AO(e, TO(e), t);
      }
      Yy.exports = CO;
    });
    var Zy = J((Aee, Qy) => {
      S();
      A();
      T();
      var _O = Object.prototype,
        OO = _O.hasOwnProperty;
      function IO(e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            typeof e[0] == 'string' &&
            OO.call(e, 'index') &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      }
      Qy.exports = IO;
    });
    var Lo = J((Oee, th) => {
      S();
      A();
      T();
      var eh = gi();
      function PO(e) {
        var t = new e.constructor(e.byteLength);
        return new eh(t).set(new eh(e)), t;
      }
      th.exports = PO;
    });
    var nh = J((Ree, rh) => {
      S();
      A();
      T();
      var kO = Lo();
      function RO(e, t) {
        var r = t ? kO(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      rh.exports = RO;
    });
    var ah = J((Nee, oh) => {
      S();
      A();
      T();
      var DO = /\w*$/;
      function FO(e) {
        var t = new e.constructor(e.source, DO.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      }
      oh.exports = FO;
    });
    var ch = J((Mee, uh) => {
      S();
      A();
      T();
      var ih = Dr(),
        sh = ih ? ih.prototype : void 0,
        lh = sh ? sh.valueOf : void 0;
      function jO(e) {
        return lh ? Object(lh.call(e)) : {};
      }
      uh.exports = jO;
    });
    var dh = J((zee, ph) => {
      S();
      A();
      T();
      var NO = Lo();
      function BO(e, t) {
        var r = t ? NO(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      ph.exports = BO;
    });
    var yh = J((Wee, fh) => {
      S();
      A();
      T();
      var LO = Lo(),
        qO = nh(),
        MO = ah(),
        UO = ch(),
        JO = dh(),
        $O = '[object Boolean]',
        zO = '[object Date]',
        VO = '[object Map]',
        HO = '[object Number]',
        GO = '[object RegExp]',
        WO = '[object Set]',
        KO = '[object String]',
        YO = '[object Symbol]',
        XO = '[object ArrayBuffer]',
        QO = '[object DataView]',
        ZO = '[object Float32Array]',
        eI = '[object Float64Array]',
        tI = '[object Int8Array]',
        rI = '[object Int16Array]',
        nI = '[object Int32Array]',
        oI = '[object Uint8Array]',
        aI = '[object Uint8ClampedArray]',
        iI = '[object Uint16Array]',
        sI = '[object Uint32Array]';
      function lI(e, t, r) {
        var n = e.constructor;
        switch (t) {
          case XO:
            return LO(e);
          case $O:
          case zO:
            return new n(+e);
          case QO:
            return qO(e, r);
          case ZO:
          case eI:
          case tI:
          case rI:
          case nI:
          case oI:
          case aI:
          case iI:
          case sI:
            return JO(e, r);
          case VO:
            return new n();
          case HO:
          case KO:
            return new n(e);
          case GO:
            return MO(e);
          case WO:
            return new n();
          case YO:
            return UO(e);
        }
      }
      fh.exports = lI;
    });
    var gh = J((Qee, mh) => {
      S();
      A();
      T();
      var uI = gt(),
        hh = Object.create,
        cI = (function () {
          function e() {}
          return function (t) {
            if (!uI(t)) return {};
            if (hh) return hh(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      mh.exports = cI;
    });
    var vh = J((rte, bh) => {
      S();
      A();
      T();
      var pI = gh(),
        dI = Ui(),
        fI = ko();
      function yI(e) {
        return typeof e.constructor == 'function' && !fI(e) ? pI(dI(e)) : {};
      }
      bh.exports = yI;
    });
    var Eh = J((ite, xh) => {
      S();
      A();
      T();
      var hI = Pn(),
        mI = Mt(),
        gI = '[object Map]';
      function bI(e) {
        return mI(e) && hI(e) == gI;
      }
      xh.exports = bI;
    });
    var Th = J((cte, Ah) => {
      S();
      A();
      T();
      var vI = Eh(),
        xI = Io(),
        wh = Po(),
        Sh = wh && wh.isMap,
        EI = Sh ? xI(Sh) : vI;
      Ah.exports = EI;
    });
    var _h = J((yte, Ch) => {
      S();
      A();
      T();
      var wI = Pn(),
        SI = Mt(),
        AI = '[object Set]';
      function TI(e) {
        return SI(e) && wI(e) == AI;
      }
      Ch.exports = TI;
    });
    var kh = J((bte, Ph) => {
      S();
      A();
      T();
      var CI = _h(),
        _I = Io(),
        Oh = Po(),
        Ih = Oh && Oh.isSet,
        OI = Ih ? _I(Ih) : CI;
      Ph.exports = OI;
    });
    var Nh = J((wte, jh) => {
      S();
      A();
      T();
      var II = wo(),
        PI = jy(),
        kI = jo(),
        RI = Ly(),
        DI = My(),
        FI = Vy(),
        jI = Gy(),
        NI = Ky(),
        BI = Xy(),
        LI = Oi(),
        qI = $i(),
        MI = Pn(),
        UI = Zy(),
        JI = yh(),
        $I = vh(),
        zI = bt(),
        VI = Co(),
        HI = Th(),
        GI = gt(),
        WI = kh(),
        KI = In(),
        YI = No(),
        XI = 1,
        QI = 2,
        ZI = 4,
        Rh = '[object Arguments]',
        eP = '[object Array]',
        tP = '[object Boolean]',
        rP = '[object Date]',
        nP = '[object Error]',
        Dh = '[object Function]',
        oP = '[object GeneratorFunction]',
        aP = '[object Map]',
        iP = '[object Number]',
        Fh = '[object Object]',
        sP = '[object RegExp]',
        lP = '[object Set]',
        uP = '[object String]',
        cP = '[object Symbol]',
        pP = '[object WeakMap]',
        dP = '[object ArrayBuffer]',
        fP = '[object DataView]',
        yP = '[object Float32Array]',
        hP = '[object Float64Array]',
        mP = '[object Int8Array]',
        gP = '[object Int16Array]',
        bP = '[object Int32Array]',
        vP = '[object Uint8Array]',
        xP = '[object Uint8ClampedArray]',
        EP = '[object Uint16Array]',
        wP = '[object Uint32Array]',
        ge = {};
      ge[Rh] =
        ge[eP] =
        ge[dP] =
        ge[fP] =
        ge[tP] =
        ge[rP] =
        ge[yP] =
        ge[hP] =
        ge[mP] =
        ge[gP] =
        ge[bP] =
        ge[aP] =
        ge[iP] =
        ge[Fh] =
        ge[sP] =
        ge[lP] =
        ge[uP] =
        ge[cP] =
        ge[vP] =
        ge[xP] =
        ge[EP] =
        ge[wP] =
          !0;
      ge[nP] = ge[Dh] = ge[pP] = !1;
      function qo(e, t, r, n, o, a) {
        var i,
          s = t & XI,
          l = t & QI,
          u = t & ZI;
        if ((r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)) return i;
        if (!GI(e)) return e;
        var c = zI(e);
        if (c) {
          if (((i = UI(e)), !s)) return jI(e, i);
        } else {
          var d = MI(e),
            y = d == Dh || d == oP;
          if (VI(e)) return FI(e, s);
          if (d == Fh || d == Rh || (y && !o)) {
            if (((i = l || y ? {} : $I(e)), !s))
              return l ? BI(e, DI(i, e)) : NI(e, RI(i, e));
          } else {
            if (!ge[d]) return o ? e : {};
            i = JI(e, d, s);
          }
        }
        a || (a = new II());
        var f = a.get(e);
        if (f) return f;
        a.set(e, i),
          WI(e)
            ? e.forEach(function (_) {
                i.add(qo(_, t, r, _, e, a));
              })
            : HI(e) &&
              e.forEach(function (_, x) {
                i.set(x, qo(_, t, r, x, e, a));
              });
        var h = u ? (l ? qI : LI) : l ? YI : KI,
          g = c ? void 0 : h(e);
        return (
          PI(g || e, function (_, x) {
            g && ((x = _), (_ = e[x])), kI(i, x, qo(_, t, r, x, e, a));
          }),
          i
        );
      }
      jh.exports = qo;
    });
    var Lh = J((Cte, Bh) => {
      S();
      A();
      T();
      var SP = Nh(),
        AP = 1,
        TP = 4;
      function CP(e) {
        return SP(e, AP | TP);
      }
      Bh.exports = CP;
    });
    var _0 = J((noe, C0) => {
      S();
      A();
      T();
      var Fj = st(),
        jj = function () {
          return Fj.Date.now();
        };
      C0.exports = jj;
    });
    var I0 = J((soe, O0) => {
      S();
      A();
      T();
      var Nj = /\s/;
      function Bj(e) {
        for (var t = e.length; t-- && Nj.test(e.charAt(t)); );
        return t;
      }
      O0.exports = Bj;
    });
    var k0 = J((poe, P0) => {
      S();
      A();
      T();
      var Lj = I0(),
        qj = /^\s+/;
      function Mj(e) {
        return e && e.slice(0, Lj(e) + 1).replace(qj, '');
      }
      P0.exports = Mj;
    });
    var j0 = J((hoe, F0) => {
      S();
      A();
      T();
      var Uj = k0(),
        R0 = gt(),
        Jj = kn(),
        D0 = NaN,
        $j = /^[-+]0x[0-9a-f]+$/i,
        zj = /^0b[01]+$/i,
        Vj = /^0o[0-7]+$/i,
        Hj = parseInt;
      function Gj(e) {
        if (typeof e == 'number') return e;
        if (Jj(e)) return D0;
        if (R0(e)) {
          var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
          e = R0(t) ? t + '' : t;
        }
        if (typeof e != 'string') return e === 0 ? e : +e;
        e = Uj(e);
        var r = zj.test(e);
        return r || Vj.test(e)
          ? Hj(e.slice(2), r ? 2 : 8)
          : $j.test(e)
            ? D0
            : +e;
      }
      F0.exports = Gj;
    });
    var L0 = J((voe, B0) => {
      S();
      A();
      T();
      var Wj = gt(),
        il = _0(),
        N0 = j0(),
        Kj = 'Expected a function',
        Yj = Math.max,
        Xj = Math.min;
      function Qj(e, t, r) {
        var n,
          o,
          a,
          i,
          s,
          l,
          u = 0,
          c = !1,
          d = !1,
          y = !0;
        if (typeof e != 'function') throw new TypeError(Kj);
        (t = N0(t) || 0),
          Wj(r) &&
            ((c = !!r.leading),
            (d = 'maxWait' in r),
            (a = d ? Yj(N0(r.maxWait) || 0, t) : a),
            (y = 'trailing' in r ? !!r.trailing : y));
        function f(P) {
          var F = n,
            D = o;
          return (n = o = void 0), (u = P), (i = e.apply(D, F)), i;
        }
        function h(P) {
          return (u = P), (s = setTimeout(x, t)), c ? f(P) : i;
        }
        function g(P) {
          var F = P - l,
            D = P - u,
            U = t - F;
          return d ? Xj(U, a - D) : U;
        }
        function _(P) {
          var F = P - l,
            D = P - u;
          return l === void 0 || F >= t || F < 0 || (d && D >= a);
        }
        function x() {
          var P = il();
          if (_(P)) return v(P);
          s = setTimeout(x, g(P));
        }
        function v(P) {
          return (s = void 0), y && n ? f(P) : ((n = o = void 0), i);
        }
        function O() {
          s !== void 0 && clearTimeout(s), (u = 0), (n = l = o = s = void 0);
        }
        function C() {
          return s === void 0 ? i : v(il());
        }
        function I() {
          var P = il(),
            F = _(P);
          if (((n = arguments), (o = this), (l = P), F)) {
            if (s === void 0) return h(l);
            if (d) return clearTimeout(s), (s = setTimeout(x, t)), f(l);
          }
          return s === void 0 && (s = setTimeout(x, t)), i;
        }
        return (I.cancel = O), (I.flush = C), I;
      }
      B0.exports = Qj;
    });
    var ov = {};
    Hl(ov, { ColorControl: () => nv, default: () => LN });
    function hr() {
      return (hr =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function dl(e, t) {
      if (e == null) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        t.indexOf((r = a[n])) >= 0 || (o[r] = e[r]);
      return o;
    }
    function sl(e) {
      var t = Xe(e),
        r = Xe(function (n) {
          t.current && t.current(n);
        });
      return (t.current = e), r.current;
    }
    function Z0(e, t, r) {
      var n = sl(r),
        o = he(function () {
          return e.toHsva(t);
        }),
        a = o[0],
        i = o[1],
        s = Xe({ color: t, hsva: a });
      ze(
        function () {
          if (!e.equal(t, s.current.color)) {
            var u = e.toHsva(t);
            (s.current = { hsva: u, color: t }), i(u);
          }
        },
        [t, e]
      ),
        ze(
          function () {
            var u;
            X0(a, s.current.hsva) ||
              e.equal((u = e.fromHsva(a)), s.current.color) ||
              ((s.current = { hsva: a, color: u }), n(u));
          },
          [a, e, n]
        );
      var l = $e(function (u) {
        i(function (c) {
          return Object.assign({}, c, u);
        });
      }, []);
      return [a, l];
    }
    var z0,
      Zj,
      V0,
      eN,
      tN,
      Xr,
      Kn,
      ll,
      q0,
      M0,
      fl,
      Yn,
      yl,
      Je,
      rN,
      nN,
      ul,
      oN,
      aN,
      iN,
      sN,
      H0,
      cl,
      ga,
      G0,
      lN,
      ya,
      uN,
      W0,
      K0,
      Y0,
      X0,
      Q0,
      cN,
      pN,
      dN,
      U0,
      ev,
      fN,
      yN,
      hN,
      mN,
      tv,
      gN,
      bN,
      vN,
      xN,
      ut,
      EN,
      wN,
      SN,
      AN,
      TN,
      CN,
      _N,
      J0,
      ON,
      IN,
      rv,
      ha,
      PN,
      kN,
      RN,
      pl,
      DN,
      FN,
      ma,
      $0,
      Yr,
      jN,
      NN,
      ba,
      BN,
      nv,
      LN,
      av = Tt(() => {
        S();
        A();
        T();
        Fa();
        io();
        z0 = ao(L0());
        oi();
        lo();
        li();
        (Zj = rr({
          '../../node_modules/color-name/index.js'(e, t) {
            t.exports = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50],
            };
          },
        })),
          (V0 = rr({
            '../../node_modules/color-convert/conversions.js'(e, t) {
              var r = Zj(),
                n = {};
              for (let i of Object.keys(r)) n[r[i]] = i;
              var o = {
                rgb: { channels: 3, labels: 'rgb' },
                hsl: { channels: 3, labels: 'hsl' },
                hsv: { channels: 3, labels: 'hsv' },
                hwb: { channels: 3, labels: 'hwb' },
                cmyk: { channels: 4, labels: 'cmyk' },
                xyz: { channels: 3, labels: 'xyz' },
                lab: { channels: 3, labels: 'lab' },
                lch: { channels: 3, labels: 'lch' },
                hex: { channels: 1, labels: ['hex'] },
                keyword: { channels: 1, labels: ['keyword'] },
                ansi16: { channels: 1, labels: ['ansi16'] },
                ansi256: { channels: 1, labels: ['ansi256'] },
                hcg: { channels: 3, labels: ['h', 'c', 'g'] },
                apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
                gray: { channels: 1, labels: ['gray'] },
              };
              t.exports = o;
              for (let i of Object.keys(o)) {
                if (!('channels' in o[i]))
                  throw new Error('missing channels property: ' + i);
                if (!('labels' in o[i]))
                  throw new Error('missing channel labels property: ' + i);
                if (o[i].labels.length !== o[i].channels)
                  throw new Error('channel and label counts mismatch: ' + i);
                let { channels: s, labels: l } = o[i];
                delete o[i].channels,
                  delete o[i].labels,
                  Object.defineProperty(o[i], 'channels', { value: s }),
                  Object.defineProperty(o[i], 'labels', { value: l });
              }
              (o.rgb.hsl = function (i) {
                let s = i[0] / 255,
                  l = i[1] / 255,
                  u = i[2] / 255,
                  c = Math.min(s, l, u),
                  d = Math.max(s, l, u),
                  y = d - c,
                  f,
                  h;
                d === c
                  ? (f = 0)
                  : s === d
                    ? (f = (l - u) / y)
                    : l === d
                      ? (f = 2 + (u - s) / y)
                      : u === d && (f = 4 + (s - l) / y),
                  (f = Math.min(f * 60, 360)),
                  f < 0 && (f += 360);
                let g = (c + d) / 2;
                return (
                  d === c
                    ? (h = 0)
                    : g <= 0.5
                      ? (h = y / (d + c))
                      : (h = y / (2 - d - c)),
                  [f, h * 100, g * 100]
                );
              }),
                (o.rgb.hsv = function (i) {
                  let s,
                    l,
                    u,
                    c,
                    d,
                    y = i[0] / 255,
                    f = i[1] / 255,
                    h = i[2] / 255,
                    g = Math.max(y, f, h),
                    _ = g - Math.min(y, f, h),
                    x = function (v) {
                      return (g - v) / 6 / _ + 1 / 2;
                    };
                  return (
                    _ === 0
                      ? ((c = 0), (d = 0))
                      : ((d = _ / g),
                        (s = x(y)),
                        (l = x(f)),
                        (u = x(h)),
                        y === g
                          ? (c = u - l)
                          : f === g
                            ? (c = 1 / 3 + s - u)
                            : h === g && (c = 2 / 3 + l - s),
                        c < 0 ? (c += 1) : c > 1 && (c -= 1)),
                    [c * 360, d * 100, g * 100]
                  );
                }),
                (o.rgb.hwb = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2],
                    c = o.rgb.hsl(i)[0],
                    d = (1 / 255) * Math.min(s, Math.min(l, u));
                  return (
                    (u = 1 - (1 / 255) * Math.max(s, Math.max(l, u))),
                    [c, d * 100, u * 100]
                  );
                }),
                (o.rgb.cmyk = function (i) {
                  let s = i[0] / 255,
                    l = i[1] / 255,
                    u = i[2] / 255,
                    c = Math.min(1 - s, 1 - l, 1 - u),
                    d = (1 - s - c) / (1 - c) || 0,
                    y = (1 - l - c) / (1 - c) || 0,
                    f = (1 - u - c) / (1 - c) || 0;
                  return [d * 100, y * 100, f * 100, c * 100];
                });
              function a(i, s) {
                return (
                  (i[0] - s[0]) ** 2 + (i[1] - s[1]) ** 2 + (i[2] - s[2]) ** 2
                );
              }
              (o.rgb.keyword = function (i) {
                let s = n[i];
                if (s) return s;
                let l = 1 / 0,
                  u;
                for (let c of Object.keys(r)) {
                  let d = r[c],
                    y = a(i, d);
                  y < l && ((l = y), (u = c));
                }
                return u;
              }),
                (o.keyword.rgb = function (i) {
                  return r[i];
                }),
                (o.rgb.xyz = function (i) {
                  let s = i[0] / 255,
                    l = i[1] / 255,
                    u = i[2] / 255;
                  (s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92),
                    (l =
                      l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
                    (u =
                      u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92);
                  let c = s * 0.4124 + l * 0.3576 + u * 0.1805,
                    d = s * 0.2126 + l * 0.7152 + u * 0.0722,
                    y = s * 0.0193 + l * 0.1192 + u * 0.9505;
                  return [c * 100, d * 100, y * 100];
                }),
                (o.rgb.lab = function (i) {
                  let s = o.rgb.xyz(i),
                    l = s[0],
                    u = s[1],
                    c = s[2];
                  (l /= 95.047),
                    (u /= 100),
                    (c /= 108.883),
                    (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
                    (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
                    (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116);
                  let d = 116 * u - 16,
                    y = 500 * (l - u),
                    f = 200 * (u - c);
                  return [d, y, f];
                }),
                (o.hsl.rgb = function (i) {
                  let s = i[0] / 360,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c,
                    d,
                    y;
                  if (l === 0) return (y = u * 255), [y, y, y];
                  u < 0.5 ? (c = u * (1 + l)) : (c = u + l - u * l);
                  let f = 2 * u - c,
                    h = [0, 0, 0];
                  for (let g = 0; g < 3; g++)
                    (d = s + (1 / 3) * -(g - 1)),
                      d < 0 && d++,
                      d > 1 && d--,
                      6 * d < 1
                        ? (y = f + (c - f) * 6 * d)
                        : 2 * d < 1
                          ? (y = c)
                          : 3 * d < 2
                            ? (y = f + (c - f) * (2 / 3 - d) * 6)
                            : (y = f),
                      (h[g] = y * 255);
                  return h;
                }),
                (o.hsl.hsv = function (i) {
                  let s = i[0],
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = l,
                    d = Math.max(u, 0.01);
                  (u *= 2),
                    (l *= u <= 1 ? u : 2 - u),
                    (c *= d <= 1 ? d : 2 - d);
                  let y = (u + l) / 2,
                    f = u === 0 ? (2 * c) / (d + c) : (2 * l) / (u + l);
                  return [s, f * 100, y * 100];
                }),
                (o.hsv.rgb = function (i) {
                  let s = i[0] / 60,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = Math.floor(s) % 6,
                    d = s - Math.floor(s),
                    y = 255 * u * (1 - l),
                    f = 255 * u * (1 - l * d),
                    h = 255 * u * (1 - l * (1 - d));
                  switch (((u *= 255), c)) {
                    case 0:
                      return [u, h, y];
                    case 1:
                      return [f, u, y];
                    case 2:
                      return [y, u, h];
                    case 3:
                      return [y, f, u];
                    case 4:
                      return [h, y, u];
                    case 5:
                      return [u, y, f];
                  }
                }),
                (o.hsv.hsl = function (i) {
                  let s = i[0],
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = Math.max(u, 0.01),
                    d,
                    y;
                  y = (2 - l) * u;
                  let f = (2 - l) * c;
                  return (
                    (d = l * c),
                    (d /= f <= 1 ? f : 2 - f),
                    (d = d || 0),
                    (y /= 2),
                    [s, d * 100, y * 100]
                  );
                }),
                (o.hwb.rgb = function (i) {
                  let s = i[0] / 360,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = l + u,
                    d;
                  c > 1 && ((l /= c), (u /= c));
                  let y = Math.floor(6 * s),
                    f = 1 - u;
                  (d = 6 * s - y), y & 1 && (d = 1 - d);
                  let h = l + d * (f - l),
                    g,
                    _,
                    x;
                  switch (y) {
                    default:
                    case 6:
                    case 0:
                      (g = f), (_ = h), (x = l);
                      break;
                    case 1:
                      (g = h), (_ = f), (x = l);
                      break;
                    case 2:
                      (g = l), (_ = f), (x = h);
                      break;
                    case 3:
                      (g = l), (_ = h), (x = f);
                      break;
                    case 4:
                      (g = h), (_ = l), (x = f);
                      break;
                    case 5:
                      (g = f), (_ = l), (x = h);
                      break;
                  }
                  return [g * 255, _ * 255, x * 255];
                }),
                (o.cmyk.rgb = function (i) {
                  let s = i[0] / 100,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = i[3] / 100,
                    d = 1 - Math.min(1, s * (1 - c) + c),
                    y = 1 - Math.min(1, l * (1 - c) + c),
                    f = 1 - Math.min(1, u * (1 - c) + c);
                  return [d * 255, y * 255, f * 255];
                }),
                (o.xyz.rgb = function (i) {
                  let s = i[0] / 100,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c,
                    d,
                    y;
                  return (
                    (c = s * 3.2406 + l * -1.5372 + u * -0.4986),
                    (d = s * -0.9689 + l * 1.8758 + u * 0.0415),
                    (y = s * 0.0557 + l * -0.204 + u * 1.057),
                    (c =
                      c > 0.0031308
                        ? 1.055 * c ** (1 / 2.4) - 0.055
                        : c * 12.92),
                    (d =
                      d > 0.0031308
                        ? 1.055 * d ** (1 / 2.4) - 0.055
                        : d * 12.92),
                    (y =
                      y > 0.0031308
                        ? 1.055 * y ** (1 / 2.4) - 0.055
                        : y * 12.92),
                    (c = Math.min(Math.max(0, c), 1)),
                    (d = Math.min(Math.max(0, d), 1)),
                    (y = Math.min(Math.max(0, y), 1)),
                    [c * 255, d * 255, y * 255]
                  );
                }),
                (o.xyz.lab = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2];
                  (s /= 95.047),
                    (l /= 100),
                    (u /= 108.883),
                    (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116),
                    (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
                    (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116);
                  let c = 116 * l - 16,
                    d = 500 * (s - l),
                    y = 200 * (l - u);
                  return [c, d, y];
                }),
                (o.lab.xyz = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2],
                    c,
                    d,
                    y;
                  (d = (s + 16) / 116), (c = l / 500 + d), (y = d - u / 200);
                  let f = d ** 3,
                    h = c ** 3,
                    g = y ** 3;
                  return (
                    (d = f > 0.008856 ? f : (d - 16 / 116) / 7.787),
                    (c = h > 0.008856 ? h : (c - 16 / 116) / 7.787),
                    (y = g > 0.008856 ? g : (y - 16 / 116) / 7.787),
                    (c *= 95.047),
                    (d *= 100),
                    (y *= 108.883),
                    [c, d, y]
                  );
                }),
                (o.lab.lch = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2],
                    c;
                  (c = (Math.atan2(u, l) * 360) / 2 / Math.PI),
                    c < 0 && (c += 360);
                  let d = Math.sqrt(l * l + u * u);
                  return [s, d, c];
                }),
                (o.lch.lab = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = (i[2] / 360) * 2 * Math.PI,
                    c = l * Math.cos(u),
                    d = l * Math.sin(u);
                  return [s, c, d];
                }),
                (o.rgb.ansi16 = function (i, s = null) {
                  let [l, u, c] = i,
                    d = s === null ? o.rgb.hsv(i)[2] : s;
                  if (((d = Math.round(d / 50)), d === 0)) return 30;
                  let y =
                    30 +
                    ((Math.round(c / 255) << 2) |
                      (Math.round(u / 255) << 1) |
                      Math.round(l / 255));
                  return d === 2 && (y += 60), y;
                }),
                (o.hsv.ansi16 = function (i) {
                  return o.rgb.ansi16(o.hsv.rgb(i), i[2]);
                }),
                (o.rgb.ansi256 = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2];
                  return s === l && l === u
                    ? s < 8
                      ? 16
                      : s > 248
                        ? 231
                        : Math.round(((s - 8) / 247) * 24) + 232
                    : 16 +
                        36 * Math.round((s / 255) * 5) +
                        6 * Math.round((l / 255) * 5) +
                        Math.round((u / 255) * 5);
                }),
                (o.ansi16.rgb = function (i) {
                  let s = i % 10;
                  if (s === 0 || s === 7)
                    return (
                      i > 50 && (s += 3.5), (s = (s / 10.5) * 255), [s, s, s]
                    );
                  let l = (~~(i > 50) + 1) * 0.5,
                    u = (s & 1) * l * 255,
                    c = ((s >> 1) & 1) * l * 255,
                    d = ((s >> 2) & 1) * l * 255;
                  return [u, c, d];
                }),
                (o.ansi256.rgb = function (i) {
                  if (i >= 232) {
                    let d = (i - 232) * 10 + 8;
                    return [d, d, d];
                  }
                  i -= 16;
                  let s,
                    l = (Math.floor(i / 36) / 5) * 255,
                    u = (Math.floor((s = i % 36) / 6) / 5) * 255,
                    c = ((s % 6) / 5) * 255;
                  return [l, u, c];
                }),
                (o.rgb.hex = function (i) {
                  let s = (
                    ((Math.round(i[0]) & 255) << 16) +
                    ((Math.round(i[1]) & 255) << 8) +
                    (Math.round(i[2]) & 255)
                  )
                    .toString(16)
                    .toUpperCase();
                  return '000000'.substring(s.length) + s;
                }),
                (o.hex.rgb = function (i) {
                  let s = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                  if (!s) return [0, 0, 0];
                  let l = s[0];
                  s[0].length === 3 &&
                    (l = l
                      .split('')
                      .map((f) => f + f)
                      .join(''));
                  let u = parseInt(l, 16),
                    c = (u >> 16) & 255,
                    d = (u >> 8) & 255,
                    y = u & 255;
                  return [c, d, y];
                }),
                (o.rgb.hcg = function (i) {
                  let s = i[0] / 255,
                    l = i[1] / 255,
                    u = i[2] / 255,
                    c = Math.max(Math.max(s, l), u),
                    d = Math.min(Math.min(s, l), u),
                    y = c - d,
                    f,
                    h;
                  return (
                    y < 1 ? (f = d / (1 - y)) : (f = 0),
                    y <= 0
                      ? (h = 0)
                      : c === s
                        ? (h = ((l - u) / y) % 6)
                        : c === l
                          ? (h = 2 + (u - s) / y)
                          : (h = 4 + (s - l) / y),
                    (h /= 6),
                    (h %= 1),
                    [h * 360, y * 100, f * 100]
                  );
                }),
                (o.hsl.hcg = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = l < 0.5 ? 2 * s * l : 2 * s * (1 - l),
                    c = 0;
                  return (
                    u < 1 && (c = (l - 0.5 * u) / (1 - u)),
                    [i[0], u * 100, c * 100]
                  );
                }),
                (o.hsv.hcg = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = s * l,
                    c = 0;
                  return (
                    u < 1 && (c = (l - u) / (1 - u)), [i[0], u * 100, c * 100]
                  );
                }),
                (o.hcg.rgb = function (i) {
                  let s = i[0] / 360,
                    l = i[1] / 100,
                    u = i[2] / 100;
                  if (l === 0) return [u * 255, u * 255, u * 255];
                  let c = [0, 0, 0],
                    d = (s % 1) * 6,
                    y = d % 1,
                    f = 1 - y,
                    h = 0;
                  switch (Math.floor(d)) {
                    case 0:
                      (c[0] = 1), (c[1] = y), (c[2] = 0);
                      break;
                    case 1:
                      (c[0] = f), (c[1] = 1), (c[2] = 0);
                      break;
                    case 2:
                      (c[0] = 0), (c[1] = 1), (c[2] = y);
                      break;
                    case 3:
                      (c[0] = 0), (c[1] = f), (c[2] = 1);
                      break;
                    case 4:
                      (c[0] = y), (c[1] = 0), (c[2] = 1);
                      break;
                    default:
                      (c[0] = 1), (c[1] = 0), (c[2] = f);
                  }
                  return (
                    (h = (1 - l) * u),
                    [
                      (l * c[0] + h) * 255,
                      (l * c[1] + h) * 255,
                      (l * c[2] + h) * 255,
                    ]
                  );
                }),
                (o.hcg.hsv = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = s + l * (1 - s),
                    c = 0;
                  return u > 0 && (c = s / u), [i[0], c * 100, u * 100];
                }),
                (o.hcg.hsl = function (i) {
                  let s = i[1] / 100,
                    l = (i[2] / 100) * (1 - s) + 0.5 * s,
                    u = 0;
                  return (
                    l > 0 && l < 0.5
                      ? (u = s / (2 * l))
                      : l >= 0.5 && l < 1 && (u = s / (2 * (1 - l))),
                    [i[0], u * 100, l * 100]
                  );
                }),
                (o.hcg.hwb = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = s + l * (1 - s);
                  return [i[0], (u - s) * 100, (1 - u) * 100];
                }),
                (o.hwb.hcg = function (i) {
                  let s = i[1] / 100,
                    l = 1 - i[2] / 100,
                    u = l - s,
                    c = 0;
                  return (
                    u < 1 && (c = (l - u) / (1 - u)), [i[0], u * 100, c * 100]
                  );
                }),
                (o.apple.rgb = function (i) {
                  return [
                    (i[0] / 65535) * 255,
                    (i[1] / 65535) * 255,
                    (i[2] / 65535) * 255,
                  ];
                }),
                (o.rgb.apple = function (i) {
                  return [
                    (i[0] / 255) * 65535,
                    (i[1] / 255) * 65535,
                    (i[2] / 255) * 65535,
                  ];
                }),
                (o.gray.rgb = function (i) {
                  return [
                    (i[0] / 100) * 255,
                    (i[0] / 100) * 255,
                    (i[0] / 100) * 255,
                  ];
                }),
                (o.gray.hsl = function (i) {
                  return [0, 0, i[0]];
                }),
                (o.gray.hsv = o.gray.hsl),
                (o.gray.hwb = function (i) {
                  return [0, 100, i[0]];
                }),
                (o.gray.cmyk = function (i) {
                  return [0, 0, 0, i[0]];
                }),
                (o.gray.lab = function (i) {
                  return [i[0], 0, 0];
                }),
                (o.gray.hex = function (i) {
                  let s = Math.round((i[0] / 100) * 255) & 255,
                    l = ((s << 16) + (s << 8) + s).toString(16).toUpperCase();
                  return '000000'.substring(l.length) + l;
                }),
                (o.rgb.gray = function (i) {
                  return [((i[0] + i[1] + i[2]) / 3 / 255) * 100];
                });
            },
          })),
          (eN = rr({
            '../../node_modules/color-convert/route.js'(e, t) {
              var r = V0();
              function n() {
                let s = {},
                  l = Object.keys(r);
                for (let u = l.length, c = 0; c < u; c++)
                  s[l[c]] = { distance: -1, parent: null };
                return s;
              }
              function o(s) {
                let l = n(),
                  u = [s];
                for (l[s].distance = 0; u.length; ) {
                  let c = u.pop(),
                    d = Object.keys(r[c]);
                  for (let y = d.length, f = 0; f < y; f++) {
                    let h = d[f],
                      g = l[h];
                    g.distance === -1 &&
                      ((g.distance = l[c].distance + 1),
                      (g.parent = c),
                      u.unshift(h));
                  }
                }
                return l;
              }
              function a(s, l) {
                return function (u) {
                  return l(s(u));
                };
              }
              function i(s, l) {
                let u = [l[s].parent, s],
                  c = r[l[s].parent][s],
                  d = l[s].parent;
                for (; l[d].parent; )
                  u.unshift(l[d].parent),
                    (c = a(r[l[d].parent][d], c)),
                    (d = l[d].parent);
                return (c.conversion = u), c;
              }
              t.exports = function (s) {
                let l = o(s),
                  u = {},
                  c = Object.keys(l);
                for (let d = c.length, y = 0; y < d; y++) {
                  let f = c[y];
                  l[f].parent !== null && (u[f] = i(f, l));
                }
                return u;
              };
            },
          })),
          (tN = rr({
            '../../node_modules/color-convert/index.js'(e, t) {
              var r = V0(),
                n = eN(),
                o = {},
                a = Object.keys(r);
              function i(l) {
                let u = function (...c) {
                  let d = c[0];
                  return d == null ? d : (d.length > 1 && (c = d), l(c));
                };
                return 'conversion' in l && (u.conversion = l.conversion), u;
              }
              function s(l) {
                let u = function (...c) {
                  let d = c[0];
                  if (d == null) return d;
                  d.length > 1 && (c = d);
                  let y = l(c);
                  if (typeof y == 'object')
                    for (let f = y.length, h = 0; h < f; h++)
                      y[h] = Math.round(y[h]);
                  return y;
                };
                return 'conversion' in l && (u.conversion = l.conversion), u;
              }
              a.forEach((l) => {
                (o[l] = {}),
                  Object.defineProperty(o[l], 'channels', {
                    value: r[l].channels,
                  }),
                  Object.defineProperty(o[l], 'labels', { value: r[l].labels });
                let u = n(l);
                Object.keys(u).forEach((c) => {
                  let d = u[c];
                  (o[l][c] = s(d)), (o[l][c].raw = i(d));
                });
              }),
                (t.exports = o);
            },
          }));
        (Xr = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = 1),
            e > r ? r : e < t ? t : e
          );
        }),
          (Kn = function (e) {
            return 'touches' in e;
          }),
          (ll = function (e) {
            return (e && e.ownerDocument.defaultView) || self;
          }),
          (q0 = function (e, t, r) {
            var n = e.getBoundingClientRect(),
              o = Kn(t)
                ? (function (a, i) {
                    for (var s = 0; s < a.length; s++)
                      if (a[s].identifier === i) return a[s];
                    return a[0];
                  })(t.touches, r)
                : t;
            return {
              left: Xr((o.pageX - (n.left + ll(e).pageXOffset)) / n.width),
              top: Xr((o.pageY - (n.top + ll(e).pageYOffset)) / n.height),
            };
          }),
          (M0 = function (e) {
            !Kn(e) && e.preventDefault();
          }),
          (fl = E.memo(function (e) {
            var t = e.onMove,
              r = e.onKey,
              n = dl(e, ['onMove', 'onKey']),
              o = Xe(null),
              a = sl(t),
              i = sl(r),
              s = Xe(null),
              l = Xe(!1),
              u = Nt(
                function () {
                  var f = function (_) {
                      M0(_),
                        (Kn(_) ? _.touches.length > 0 : _.buttons > 0) &&
                        o.current
                          ? a(q0(o.current, _, s.current))
                          : g(!1);
                    },
                    h = function () {
                      return g(!1);
                    };
                  function g(_) {
                    var x = l.current,
                      v = ll(o.current),
                      O = _ ? v.addEventListener : v.removeEventListener;
                    O(x ? 'touchmove' : 'mousemove', f),
                      O(x ? 'touchend' : 'mouseup', h);
                  }
                  return [
                    function (_) {
                      var x = _.nativeEvent,
                        v = o.current;
                      if (
                        v &&
                        (M0(x),
                        !(function (C, I) {
                          return I && !Kn(C);
                        })(x, l.current) && v)
                      ) {
                        if (Kn(x)) {
                          l.current = !0;
                          var O = x.changedTouches || [];
                          O.length && (s.current = O[0].identifier);
                        }
                        v.focus(), a(q0(v, x, s.current)), g(!0);
                      }
                    },
                    function (_) {
                      var x = _.which || _.keyCode;
                      x < 37 ||
                        x > 40 ||
                        (_.preventDefault(),
                        i({
                          left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0,
                          top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0,
                        }));
                    },
                    g,
                  ];
                },
                [i, a]
              ),
              c = u[0],
              d = u[1],
              y = u[2];
            return (
              ze(
                function () {
                  return y;
                },
                [y]
              ),
              E.createElement(
                'div',
                hr({}, n, {
                  onTouchStart: c,
                  onMouseDown: c,
                  className: 'react-colorful__interactive',
                  ref: o,
                  onKeyDown: d,
                  tabIndex: 0,
                  role: 'slider',
                })
              )
            );
          })),
          (Yn = function (e) {
            return e.filter(Boolean).join(' ');
          }),
          (yl = function (e) {
            var t = e.color,
              r = e.left,
              n = e.top,
              o = n === void 0 ? 0.5 : n,
              a = Yn(['react-colorful__pointer', e.className]);
            return E.createElement(
              'div',
              {
                className: a,
                style: { top: 100 * o + '%', left: 100 * r + '%' },
              },
              E.createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: { backgroundColor: t },
              })
            );
          }),
          (Je = function (e, t, r) {
            return (
              t === void 0 && (t = 0),
              r === void 0 && (r = Math.pow(10, t)),
              Math.round(r * e) / r
            );
          }),
          (rN = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
          (nN = function (e) {
            return W0(ul(e));
          }),
          (ul = function (e) {
            return (
              e[0] === '#' && (e = e.substring(1)),
              e.length < 6
                ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a:
                      e.length === 4
                        ? Je(parseInt(e[3] + e[3], 16) / 255, 2)
                        : 1,
                  }
                : {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                    a:
                      e.length === 8
                        ? Je(parseInt(e.substring(6, 8), 16) / 255, 2)
                        : 1,
                  }
            );
          }),
          (oN = function (e, t) {
            return t === void 0 && (t = 'deg'), Number(e) * (rN[t] || 1);
          }),
          (aN = function (e) {
            var t =
              /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e
              );
            return t
              ? iN({
                  h: oN(t[1], t[2]),
                  s: Number(t[3]),
                  l: Number(t[4]),
                  a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (iN = function (e) {
            var t = e.s,
              r = e.l;
            return {
              h: e.h,
              s:
                (t *= (r < 50 ? r : 100 - r) / 100) > 0
                  ? ((2 * t) / (r + t)) * 100
                  : 0,
              v: r + t,
              a: e.a,
            };
          }),
          (sN = function (e) {
            return uN(G0(e));
          }),
          (H0 = function (e) {
            var t = e.s,
              r = e.v,
              n = e.a,
              o = ((200 - t) * r) / 100;
            return {
              h: Je(e.h),
              s: Je(
                o > 0 && o < 200
                  ? ((t * r) / 100 / (o <= 100 ? o : 200 - o)) * 100
                  : 0
              ),
              l: Je(o / 2),
              a: Je(n, 2),
            };
          }),
          (cl = function (e) {
            var t = H0(e);
            return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
          }),
          (ga = function (e) {
            var t = H0(e);
            return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')';
          }),
          (G0 = function (e) {
            var t = e.h,
              r = e.s,
              n = e.v,
              o = e.a;
            (t = (t / 360) * 6), (r /= 100), (n /= 100);
            var a = Math.floor(t),
              i = n * (1 - r),
              s = n * (1 - (t - a) * r),
              l = n * (1 - (1 - t + a) * r),
              u = a % 6;
            return {
              r: Je(255 * [n, s, i, i, l, n][u]),
              g: Je(255 * [l, n, n, s, i, i][u]),
              b: Je(255 * [i, i, l, n, n, s][u]),
              a: Je(o, 2),
            };
          }),
          (lN = function (e) {
            var t =
              /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e
              );
            return t
              ? W0({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (ya = function (e) {
            var t = e.toString(16);
            return t.length < 2 ? '0' + t : t;
          }),
          (uN = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              o = e.a,
              a = o < 1 ? ya(Je(255 * o)) : '';
            return '#' + ya(t) + ya(r) + ya(n) + a;
          }),
          (W0 = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              o = e.a,
              a = Math.max(t, r, n),
              i = a - Math.min(t, r, n),
              s = i
                ? a === t
                  ? (r - n) / i
                  : a === r
                    ? 2 + (n - t) / i
                    : 4 + (t - r) / i
                : 0;
            return {
              h: Je(60 * (s < 0 ? s + 6 : s)),
              s: Je(a ? (i / a) * 100 : 0),
              v: Je((a / 255) * 100),
              a: o,
            };
          }),
          (K0 = E.memo(function (e) {
            var t = e.hue,
              r = e.onChange,
              n = Yn(['react-colorful__hue', e.className]);
            return E.createElement(
              'div',
              { className: n },
              E.createElement(
                fl,
                {
                  onMove: function (o) {
                    r({ h: 360 * o.left });
                  },
                  onKey: function (o) {
                    r({ h: Xr(t + 360 * o.left, 0, 360) });
                  },
                  'aria-label': 'Hue',
                  'aria-valuenow': Je(t),
                  'aria-valuemax': '360',
                  'aria-valuemin': '0',
                },
                E.createElement(yl, {
                  className: 'react-colorful__hue-pointer',
                  left: t / 360,
                  color: cl({ h: t, s: 100, v: 100, a: 1 }),
                })
              )
            );
          })),
          (Y0 = E.memo(function (e) {
            var t = e.hsva,
              r = e.onChange,
              n = { backgroundColor: cl({ h: t.h, s: 100, v: 100, a: 1 }) };
            return E.createElement(
              'div',
              { className: 'react-colorful__saturation', style: n },
              E.createElement(
                fl,
                {
                  onMove: function (o) {
                    r({ s: 100 * o.left, v: 100 - 100 * o.top });
                  },
                  onKey: function (o) {
                    r({
                      s: Xr(t.s + 100 * o.left, 0, 100),
                      v: Xr(t.v - 100 * o.top, 0, 100),
                    });
                  },
                  'aria-label': 'Color',
                  'aria-valuetext':
                    'Saturation ' + Je(t.s) + '%, Brightness ' + Je(t.v) + '%',
                },
                E.createElement(yl, {
                  className: 'react-colorful__saturation-pointer',
                  top: 1 - t.v / 100,
                  left: t.s / 100,
                  color: cl(t),
                })
              )
            );
          })),
          (X0 = function (e, t) {
            if (e === t) return !0;
            for (var r in e) if (e[r] !== t[r]) return !1;
            return !0;
          }),
          (Q0 = function (e, t) {
            return e.replace(/\s/g, '') === t.replace(/\s/g, '');
          }),
          (cN = function (e, t) {
            return e.toLowerCase() === t.toLowerCase() || X0(ul(e), ul(t));
          });
        (pN = typeof window < 'u' ? ru : ze),
          (dN = function () {
            return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0;
          }),
          (U0 = new Map()),
          (ev = function (e) {
            pN(function () {
              var t = e.current ? e.current.ownerDocument : document;
              if (t !== void 0 && !U0.has(t)) {
                var r = t.createElement('style');
                (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                  U0.set(t, r);
                var n = dN();
                n && r.setAttribute('nonce', n), t.head.appendChild(r);
              }
            }, []);
          }),
          (fN = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              o = n === void 0 ? r.defaultColor : n,
              a = e.onChange,
              i = dl(e, ['className', 'colorModel', 'color', 'onChange']),
              s = Xe(null);
            ev(s);
            var l = Z0(r, o, a),
              u = l[0],
              c = l[1],
              d = Yn(['react-colorful', t]);
            return E.createElement(
              'div',
              hr({}, i, { ref: s, className: d }),
              E.createElement(Y0, { hsva: u, onChange: c }),
              E.createElement(K0, {
                hue: u.h,
                onChange: c,
                className: 'react-colorful__last-control',
              })
            );
          }),
          (yN = {
            defaultColor: '000',
            toHsva: nN,
            fromHsva: function (e) {
              return sN({ h: e.h, s: e.s, v: e.v, a: 1 });
            },
            equal: cN,
          }),
          (hN = function (e) {
            return E.createElement(fN, hr({}, e, { colorModel: yN }));
          }),
          (mN = function (e) {
            var t = e.className,
              r = e.hsva,
              n = e.onChange,
              o = {
                backgroundImage:
                  'linear-gradient(90deg, ' +
                  ga(Object.assign({}, r, { a: 0 })) +
                  ', ' +
                  ga(Object.assign({}, r, { a: 1 })) +
                  ')',
              },
              a = Yn(['react-colorful__alpha', t]),
              i = Je(100 * r.a);
            return E.createElement(
              'div',
              { className: a },
              E.createElement('div', {
                className: 'react-colorful__alpha-gradient',
                style: o,
              }),
              E.createElement(
                fl,
                {
                  onMove: function (s) {
                    n({ a: s.left });
                  },
                  onKey: function (s) {
                    n({ a: Xr(r.a + s.left) });
                  },
                  'aria-label': 'Alpha',
                  'aria-valuetext': i + '%',
                  'aria-valuenow': i,
                  'aria-valuemin': '0',
                  'aria-valuemax': '100',
                },
                E.createElement(yl, {
                  className: 'react-colorful__alpha-pointer',
                  left: r.a,
                  color: ga(r),
                })
              )
            );
          }),
          (tv = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              o = n === void 0 ? r.defaultColor : n,
              a = e.onChange,
              i = dl(e, ['className', 'colorModel', 'color', 'onChange']),
              s = Xe(null);
            ev(s);
            var l = Z0(r, o, a),
              u = l[0],
              c = l[1],
              d = Yn(['react-colorful', t]);
            return E.createElement(
              'div',
              hr({}, i, { ref: s, className: d }),
              E.createElement(Y0, { hsva: u, onChange: c }),
              E.createElement(K0, { hue: u.h, onChange: c }),
              E.createElement(mN, {
                hsva: u,
                onChange: c,
                className: 'react-colorful__last-control',
              })
            );
          }),
          (gN = {
            defaultColor: 'hsla(0, 0%, 0%, 1)',
            toHsva: aN,
            fromHsva: ga,
            equal: Q0,
          }),
          (bN = function (e) {
            return E.createElement(tv, hr({}, e, { colorModel: gN }));
          }),
          (vN = {
            defaultColor: 'rgba(0, 0, 0, 1)',
            toHsva: lN,
            fromHsva: function (e) {
              var t = G0(e);
              return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')';
            },
            equal: Q0,
          }),
          (xN = function (e) {
            return E.createElement(tv, hr({}, e, { colorModel: vN }));
          }),
          (ut = gn(tN(), 1)),
          (EN = W.div({
            position: 'relative',
            maxWidth: 250,
            '&[aria-readonly="true"]': { opacity: 0.5 },
          })),
          (wN = W(Lt)({
            position: 'absolute',
            zIndex: 1,
            top: 4,
            left: 4,
            '[aria-readonly=true] &': { cursor: 'not-allowed' },
          })),
          (SN = W.div({
            width: 200,
            margin: 5,
            '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
            '.react-colorful__hue': {
              boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
            },
            '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
          })),
          (AN = W(ir)(({ theme: e }) => ({
            fontFamily: e.typography.fonts.base,
          }))),
          (TN = W.div({
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 16px)',
            gap: 6,
            padding: 3,
            marginTop: 5,
            width: 200,
          })),
          (CN = W.div(({ theme: e, active: t }) => ({
            width: 16,
            height: 16,
            boxShadow: t
              ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
              : `${e.appBorderColor} 0 0 0 1px inset`,
            borderRadius: e.appBorderRadius,
          }))),
          (_N = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
          (J0 = ({ value: e, style: t, ...r }) => {
            let n = `linear-gradient(${e}, ${e}), ${_N}, linear-gradient(#fff, #fff)`;
            return E.createElement(CN, {
              ...r,
              style: { ...t, backgroundImage: n },
            });
          }),
          (ON = W(dt.Input)(({ theme: e, readOnly: t }) => ({
            width: '100%',
            paddingLeft: 30,
            paddingRight: 30,
            boxSizing: 'border-box',
            fontFamily: e.typography.fonts.base,
          }))),
          (IN = W(Ju)(({ theme: e }) => ({
            position: 'absolute',
            zIndex: 1,
            top: 6,
            right: 7,
            width: 20,
            height: 20,
            padding: 4,
            boxSizing: 'border-box',
            cursor: 'pointer',
            color: e.input.color,
          }))),
          (rv = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
            rv || {}
          )),
          (ha = Object.values(rv)),
          (PN = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
          (kN =
            /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
          (RN =
            /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
          (pl = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
          (DN = /^\s*#?([0-9a-f]{3})\s*$/i),
          (FN = { hex: hN, rgb: xN, hsl: bN }),
          (ma = {
            hex: 'transparent',
            rgb: 'rgba(0, 0, 0, 0)',
            hsl: 'hsla(0, 0%, 0%, 0)',
          }),
          ($0 = (e) => {
            let t = e?.match(PN);
            if (!t) return [0, 0, 0, 1];
            let [, r, n, o, a = 1] = t;
            return [r, n, o, a].map(Number);
          }),
          (Yr = (e) => {
            if (!e) return;
            let t = !0;
            if (kN.test(e)) {
              let [i, s, l, u] = $0(e),
                [c, d, y] = ut.default.rgb.hsl([i, s, l]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: ut.default.rgb.keyword([i, s, l]),
                colorSpace: 'rgb',
                rgb: e,
                hsl: `hsla(${c}, ${d}%, ${y}%, ${u})`,
                hex: `#${ut.default.rgb.hex([i, s, l]).toLowerCase()}`,
              };
            }
            if (RN.test(e)) {
              let [i, s, l, u] = $0(e),
                [c, d, y] = ut.default.hsl.rgb([i, s, l]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: ut.default.hsl.keyword([i, s, l]),
                colorSpace: 'hsl',
                rgb: `rgba(${c}, ${d}, ${y}, ${u})`,
                hsl: e,
                hex: `#${ut.default.hsl.hex([i, s, l]).toLowerCase()}`,
              };
            }
            let r = e.replace('#', ''),
              n = ut.default.keyword.rgb(r) || ut.default.hex.rgb(r),
              o = ut.default.rgb.hsl(n),
              a = e;
            if (
              (/[^#a-f0-9]/i.test(e) ? (a = r) : pl.test(e) && (a = `#${r}`),
              a.startsWith('#'))
            )
              t = pl.test(a);
            else
              try {
                ut.default.keyword.hex(a);
              } catch {
                t = !1;
              }
            return {
              valid: t,
              value: a,
              keyword: ut.default.rgb.keyword(n),
              colorSpace: 'hex',
              rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
              hsl: `hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,
              hex: a,
            };
          }),
          (jN = (e, t, r) => {
            if (!e || !t?.valid) return ma[r];
            if (r !== 'hex') return t?.[r] || ma[r];
            if (!t.hex.startsWith('#'))
              try {
                return `#${ut.default.keyword.hex(t.hex)}`;
              } catch {
                return ma.hex;
              }
            let n = t.hex.match(DN);
            if (!n) return pl.test(t.hex) ? t.hex : ma.hex;
            let [o, a, i] = n[1].split('');
            return `#${o}${o}${a}${a}${i}${i}`;
          }),
          (NN = (e, t) => {
            let [r, n] = he(e || ''),
              [o, a] = he(() => Yr(r)),
              [i, s] = he(o?.colorSpace || 'hex');
            ze(() => {
              let d = e || '',
                y = Yr(d);
              n(d), a(y), s(y?.colorSpace || 'hex');
            }, [e]);
            let l = Nt(() => jN(r, o, i).toLowerCase(), [r, o, i]),
              u = $e(
                (d) => {
                  let y = Yr(d),
                    f = y?.value || d || '';
                  n(f),
                    f === '' && (a(void 0), t(void 0)),
                    y && (a(y), s(y.colorSpace), t(y.value));
                },
                [t]
              ),
              c = $e(() => {
                let d = ha.indexOf(i) + 1;
                d >= ha.length && (d = 0), s(ha[d]);
                let y = o?.[ha[d]] || '';
                n(y), t(y);
              }, [o, i, t]);
            return {
              value: r,
              realValue: l,
              updateValue: u,
              color: o,
              colorSpace: i,
              cycleColorSpace: c,
            };
          }),
          (ba = (e) => e.replace(/\s*/, '').toLowerCase()),
          (BN = (e, t, r) => {
            let [n, o] = he(t?.valid ? [t] : []);
            ze(() => {
              t === void 0 && o([]);
            }, [t]);
            let a = Nt(
                () =>
                  (e || [])
                    .map((s) =>
                      typeof s == 'string'
                        ? Yr(s)
                        : s.title
                          ? { ...Yr(s.color), keyword: s.title }
                          : Yr(s.color)
                    )
                    .concat(n)
                    .filter(Boolean)
                    .slice(-27),
                [e, n]
              ),
              i = $e(
                (s) => {
                  s?.valid &&
                    (a.some((l) => ba(l[r]) === ba(s[r])) ||
                      o((l) => l.concat(s)));
                },
                [r, a]
              );
            return { presets: a, addPreset: i };
          }),
          (nv = ({
            name: e,
            value: t,
            onChange: r,
            onFocus: n,
            onBlur: o,
            presetColors: a,
            startOpen: i = !1,
            argType: s,
          }) => {
            let l = $e((0, z0.default)(r, 200), [r]),
              {
                value: u,
                realValue: c,
                updateValue: d,
                color: y,
                colorSpace: f,
                cycleColorSpace: h,
              } = NN(t, l),
              { presets: g, addPreset: _ } = BN(a, y, f),
              x = FN[f],
              v = !!s?.table?.readonly;
            return E.createElement(
              EN,
              { 'aria-readonly': v },
              E.createElement(
                wN,
                {
                  startOpen: i,
                  trigger: v ? [null] : void 0,
                  closeOnOutsideClick: !0,
                  onVisibleChange: () => _(y),
                  tooltip: E.createElement(
                    SN,
                    null,
                    E.createElement(x, {
                      color: c === 'transparent' ? '#000000' : c,
                      onChange: d,
                      onFocus: n,
                      onBlur: o,
                    }),
                    g.length > 0 &&
                      E.createElement(
                        TN,
                        null,
                        g.map((O, C) =>
                          E.createElement(
                            Lt,
                            {
                              key: `${O.value}-${C}`,
                              hasChrome: !1,
                              tooltip: E.createElement(AN, {
                                note: O.keyword || O.value,
                              }),
                            },
                            E.createElement(J0, {
                              value: O[f],
                              active: y && ba(O[f]) === ba(y[f]),
                              onClick: () => d(O.value),
                            })
                          )
                        )
                      )
                  ),
                },
                E.createElement(J0, { value: c, style: { margin: 4 } })
              ),
              E.createElement(ON, {
                id: tt(e),
                value: u,
                onChange: (O) => d(O.target.value),
                onFocus: (O) => O.target.select(),
                readOnly: v,
                placeholder: 'Choose color...',
              }),
              u ? E.createElement(IN, { onClick: h }) : null
            );
          }),
          (LN = nv);
      });
    S();
    A();
    T();
    S();
    A();
    T();
    S();
    A();
    T();
    Fa();
    io();
    io();
    S();
    A();
    T();
    var nu = Object.prototype.hasOwnProperty;
    function ou(e, t, r) {
      for (r of e.keys()) if (or(r, t)) return r;
    }
    function or(e, t) {
      var r, n, o;
      if (e === t) return !0;
      if (e && t && (r = e.constructor) === t.constructor) {
        if (r === Date) return e.getTime() === t.getTime();
        if (r === RegExp) return e.toString() === t.toString();
        if (r === Array) {
          if ((n = e.length) === t.length) for (; n-- && or(e[n], t[n]); );
          return n === -1;
        }
        if (r === Set) {
          if (e.size !== t.size) return !1;
          for (n of e)
            if (
              ((o = n),
              (o && typeof o == 'object' && ((o = ou(t, o)), !o)) || !t.has(o))
            )
              return !1;
          return !0;
        }
        if (r === Map) {
          if (e.size !== t.size) return !1;
          for (n of e)
            if (
              ((o = n[0]),
              (o && typeof o == 'object' && ((o = ou(t, o)), !o)) ||
                !or(n[1], t.get(o)))
            )
              return !1;
          return !0;
        }
        if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
        else if (r === DataView) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e.getInt8(n) === t.getInt8(n); );
          return n === -1;
        }
        if (ArrayBuffer.isView(e)) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e[n] === t[n]; );
          return n === -1;
        }
        if (!r || typeof e == 'object') {
          n = 0;
          for (r in e)
            if (
              (nu.call(e, r) && ++n && !nu.call(t, r)) ||
              !(r in t) ||
              !or(e[r], t[r])
            )
              return !1;
          return Object.keys(t).length === n;
        }
      }
      return e !== e && t !== t;
    }
    lo();
    S();
    A();
    T();
    S();
    A();
    T();
    var p8 = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: iu,
        ARGTYPES_INFO_RESPONSE: Ka,
        CHANNEL_CREATED: d8,
        CHANNEL_WS_DISCONNECT: f8,
        CONFIG_ERROR: su,
        CREATE_NEW_STORYFILE_REQUEST: y8,
        CREATE_NEW_STORYFILE_RESPONSE: h8,
        CURRENT_STORY_WAS_SET: Ya,
        DOCS_PREPARED: lu,
        DOCS_RENDERED: uo,
        FILE_COMPONENT_SEARCH_REQUEST: m8,
        FILE_COMPONENT_SEARCH_RESPONSE: g8,
        FORCE_REMOUNT: uu,
        FORCE_RE_RENDER: co,
        GLOBALS_UPDATED: cu,
        NAVIGATE_URL: pu,
        PLAY_FUNCTION_THREW_EXCEPTION: du,
        PRELOAD_ENTRIES: fu,
        PREVIEW_BUILDER_PROGRESS: b8,
        PREVIEW_KEYDOWN: yu,
        REGISTER_SUBSCRIPTION: v8,
        REQUEST_WHATS_NEW_DATA: x8,
        RESET_STORY_ARGS: po,
        RESULT_WHATS_NEW_DATA: E8,
        SAVE_STORY_REQUEST: Xa,
        SAVE_STORY_RESPONSE: fo,
        SELECT_STORY: w8,
        SET_CONFIG: S8,
        SET_CURRENT_STORY: hu,
        SET_GLOBALS: mu,
        SET_INDEX: A8,
        SET_STORIES: T8,
        SET_WHATS_NEW_CACHE: C8,
        SHARED_STATE_CHANGED: _8,
        SHARED_STATE_SET: O8,
        STORIES_COLLAPSE_ALL: I8,
        STORIES_EXPAND_ALL: P8,
        STORY_ARGS_UPDATED: gu,
        STORY_CHANGED: bu,
        STORY_ERRORED: vu,
        STORY_INDEX_INVALIDATED: xu,
        STORY_MISSING: Qa,
        STORY_PREPARED: Eu,
        STORY_RENDERED: xn,
        STORY_RENDER_PHASE_CHANGED: kr,
        STORY_SPECIFIED: wu,
        STORY_THREW_EXCEPTION: Su,
        STORY_UNCHANGED: Au,
        TELEMETRY_ERROR: k8,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: R8,
        UNHANDLED_ERRORS_WHILE_PLAYING: Tu,
        UPDATE_GLOBALS: yo,
        UPDATE_QUERY_PARAMS: Cu,
        UPDATE_STORY_ARGS: ho,
      } = __STORYBOOK_CORE_EVENTS__;
    S();
    A();
    T();
    var J8 = __STORYBOOK_API__,
      {
        ActiveTabs: $8,
        Consumer: z8,
        ManagerContext: V8,
        Provider: H8,
        RequestResponseError: G8,
        addons: mo,
        combineParameters: W8,
        controlOrMetaKey: K8,
        controlOrMetaSymbol: Y8,
        eventMatchesShortcut: X8,
        eventToShortcut: Q8,
        experimental_requestResponse: Za,
        isMacLike: Z8,
        isShortcutTaken: e9,
        keyToSymbol: t9,
        merge: r9,
        mockChannel: n9,
        optionOrAltSymbol: o9,
        shortcutMatchesShortcut: a9,
        shortcutToHumanString: i9,
        types: _u,
        useAddonState: s9,
        useArgTypes: ei,
        useArgs: Ou,
        useChannel: l9,
        useGlobalTypes: u9,
        useGlobals: Iu,
        useParameter: Pu,
        useSharedState: c9,
        useStoryPrepared: p9,
        useStorybookApi: d9,
        useStorybookState: ku,
      } = __STORYBOOK_API__;
    oi();
    li();
    var Nv = ao(dy());
    S();
    A();
    T();
    var eZ = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: tZ,
        logger: Bo,
        once: fy,
        pretty: rZ,
      } = __STORYBOOK_CLIENT_LOGGER__;
    var Bv = ao(Dy()),
      Lv = ao(Lh());
    S();
    A();
    T();
    S();
    A();
    T();
    S();
    A();
    T();
    var Pte = __STORYBOOK_CHANNELS__,
      {
        Channel: qh,
        PostMessageTransport: kte,
        WebsocketTransport: Rte,
        createBrowserChannel: Dte,
      } = __STORYBOOK_CHANNELS__;
    S();
    A();
    T();
    var Lte = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Ct,
        logger: me,
        once: Ut,
        pretty: qte,
      } = __STORYBOOK_CLIENT_LOGGER__;
    S();
    A();
    T();
    var _P = Object.defineProperty,
      Pe = (e, t) => _P(e, 'name', { value: t, configurable: !0 });
    function De(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = Array.from(typeof e == 'string' ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var o = n.reduce(function (s, l) {
        var u = l.match(/\n([\t ]+|(?!\s).)/g);
        return u
          ? s.concat(
              u.map(function (c) {
                var d, y;
                return (y =
                  (d = c.match(/[\t ]/g)) === null || d === void 0
                    ? void 0
                    : d.length) !== null && y !== void 0
                  ? y
                  : 0;
              })
            )
          : s;
      }, []);
      if (o.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            '}',
          'g'
        );
        n = n.map(function (s) {
          return s.replace(
            a,
            `
`
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, '');
      var i = n[0];
      return (
        t.forEach(function (s, l) {
          var u = i.match(/(?:^|\n)( *)$/),
            c = u ? u[1] : '',
            d = s;
          typeof s == 'string' &&
            s.includes(`
`) &&
            (d = String(s)
              .split(
                `
`
              )
              .map(function (y, f) {
                return f === 0 ? y : '' + c + y;
              }).join(`
`)),
            (i += d + n[l + 1]);
        }),
        i
      );
    }
    Pe(De, 'dedent');
    function Vi({ code: e, category: t }) {
      let r = String(e).padStart(4, '0');
      return `SB_${t}_${r}`;
    }
    Pe(Vi, 'parseErrorCode');
    var Mh = class Uh extends Error {
      category;
      code;
      data = {};
      documentation;
      fromStorybook = !0;
      get fullErrorCode() {
        return Vi({ code: this.code, category: this.category });
      }
      get name() {
        let t = this.constructor.name;
        return `${this.fullErrorCode} (${t})`;
      }
      constructor(t) {
        super(Uh.getFullMessage(t)),
          (this.category = t.category),
          (this.documentation = t.documentation ?? !1),
          (this.code = t.code);
      }
      static getFullMessage({
        documentation: t,
        code: r,
        category: n,
        message: o,
      }) {
        let a;
        return (
          t === !0
            ? (a = `https://storybook.js.org/error/${Vi({ code: r, category: n })}`)
            : typeof t == 'string'
              ? (a = t)
              : Array.isArray(t) &&
                (a = `
${t.map((i) => `	- ${i}`).join(`
`)}`),
          `${o}${
            a != null
              ? `

More info: ${a}
`
              : ''
          }`
        );
      }
    };
    Pe(Mh, 'StorybookError');
    var Me = Mh,
      OP = ((e) => (
        (e.BLOCKS = 'BLOCKS'),
        (e.DOCS_TOOLS = 'DOCS-TOOLS'),
        (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
        (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
        (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
        (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
        (e.PREVIEW_API = 'PREVIEW_API'),
        (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
        (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
        (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
        (e.RENDERER_HTML = 'RENDERER_HTML'),
        (e.RENDERER_PREACT = 'RENDERER_PREACT'),
        (e.RENDERER_REACT = 'RENDERER_REACT'),
        (e.RENDERER_SERVER = 'RENDERER_SERVER'),
        (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
        (e.RENDERER_VUE = 'RENDERER_VUE'),
        (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
        (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
        (e.FRAMEWORK_NEXTJS = 'FRAMEWORK_NEXTJS'),
        e
      ))(OP || {}),
      Jh = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 1,
            message: De`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`,
          }),
            (this.data = t);
        }
      };
    Pe(Jh, 'MissingStoryAfterHmrError');
    var $h = Jh,
      IP = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 2,
            documentation:
              'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function',
            message: De`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${
          t.deprecated
            ? `
This is deprecated and won't work in Storybook 8 anymore.
`
            : ''
        }
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`,
          }),
            (this.data = t);
        }
      };
    Pe(IP, 'ImplicitActionsDuringRendering');
    var zh = class extends Me {
      constructor() {
        super({
          category: 'PREVIEW_API',
          code: 3,
          message: De`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`,
        });
      }
    };
    Pe(zh, 'CalledExtractOnStoreError');
    var Vh = zh,
      Hh = class extends Me {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 4,
            message: De`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
            documentation:
              'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field',
          });
        }
      };
    Pe(Hh, 'MissingRenderToCanvasError');
    var Gh = Hh,
      Wh = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 5,
            message: De`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`,
          }),
            (this.data = t);
        }
      };
    Pe(Wh, 'CalledPreviewMethodBeforeInitializationError');
    var rt = Wh,
      Kh = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 6,
            message: De`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`,
          }),
            (this.data = t);
        }
      };
    Pe(Kh, 'StoryIndexFetchError');
    var Yh = Kh,
      Xh = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 7,
            message: De`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`,
          }),
            (this.data = t);
        }
      };
    Pe(Xh, 'MdxFileWithNoCsfReferencesError');
    var Qh = Xh,
      Zh = class extends Me {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 8,
            message: De`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`,
          });
        }
      };
    Pe(Zh, 'EmptyIndexError');
    var em = Zh,
      tm = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 9,
            message: De`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`,
          }),
            (this.data = t);
        }
      };
    Pe(tm, 'NoStoryMatchError');
    var rm = tm,
      nm = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 10,
            message: De`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`,
          }),
            (this.data = t);
        }
      };
    Pe(nm, 'MissingStoryFromCsfFileError');
    var om = nm,
      am = class extends Me {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 11,
            message: De`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`,
          });
        }
      };
    Pe(am, 'StoryStoreAccessedBeforeInitializationError');
    var im = am,
      sm = class extends Me {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 12,
            message: De`
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`,
          }),
            (this.data = t);
        }
      };
    Pe(sm, 'MountMustBeDestructuredError');
    var Mo = sm,
      PP = class extends Me {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 13,
            message: De`
        You must configure testingLibraryRender to use play in portable stories.
        
        import { render } from '@testing-library/[renderer]';
        
        setProjectAnnotations({
          testingLibraryRender: render,
        });
        
        For other testing renderers, you can configure \`renderToCanvas\` like so:
        
        import { render } from 'your-test-renderer';
        
        setProjectAnnotations({
          renderToCanvas: ({ storyFn }) => {
            const Story = storyFn();
            
            // Svelte
            render(Story.Component, Story.props);
            
            // Vue
            render(Story);
            
            // or for React
            render(<Story/>);
          },
        });`,
          });
        }
      };
    Pe(PP, 'TestingLibraryMustBeConfiguredError');
    var lm = class extends Me {
      constructor(t) {
        super({
          category: 'PREVIEW_API',
          code: 14,
          message: De`
        No render function available for storyId '${t.id}'
      `,
        }),
          (this.data = t);
      }
    };
    Pe(lm, 'NoRenderFunctionError');
    var um = lm,
      cm = class extends Me {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 15,
            message: De`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `,
          });
        }
      };
    Pe(cm, 'NoStoryMountedError');
    var pm = cm,
      kP = class extends Me {
        constructor() {
          super({
            category: 'FRAMEWORK_NEXTJS',
            code: 1,
            documentation:
              'https://storybook.js.org/docs/get-started/nextjs#faq',
            message: De`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `,
          });
        }
      };
    Pe(kP, 'NextJsSharpError');
    var RP = class extends Me {
      constructor(t) {
        super({
          category: 'FRAMEWORK_NEXTJS',
          code: 2,
          message: De`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `,
        }),
          (this.data = t);
      }
    };
    Pe(RP, 'NextjsRouterMocksNotAvailable');
    var dm = class extends Me {
      constructor(t) {
        super({
          category: 'DOCS-TOOLS',
          code: 1,
          documentation:
            'https://github.com/storybookjs/storybook/issues/26606',
          message: De`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `,
        }),
          (this.data = t);
      }
    };
    Pe(dm, 'UnknownArgTypesError');
    var Uo = dm;
    S();
    A();
    T();
    var DP = Object.create,
      mm = Object.defineProperty,
      FP = Object.getOwnPropertyDescriptor,
      jP = Object.getOwnPropertyNames,
      NP = Object.getPrototypeOf,
      BP = Object.prototype.hasOwnProperty,
      LP = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      qP = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of jP(t))
            !BP.call(e, o) &&
              o !== r &&
              mm(e, o, {
                get: () => t[o],
                enumerable: !(n = FP(t, o)) || n.enumerable,
              });
        return e;
      },
      MP = (e, t, r) => (
        (r = e != null ? DP(NP(e)) : {}),
        qP(
          t || !e || !e.__esModule
            ? mm(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      UP = LP((e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(
                      Object.getOwnPropertySymbols(o)
                    );
                  }
                : Object.keys;
            return function (o, a) {
              return (function i(s, l, u) {
                var c,
                  d,
                  y,
                  f = t.call(s),
                  h = t.call(l);
                if (s === l) return !0;
                if (s == null || l == null) return !1;
                if (u.indexOf(s) > -1 && u.indexOf(l) > -1) return !0;
                if (
                  (u.push(s, l),
                  f != h ||
                    ((c = n(s)),
                    (d = n(l)),
                    c.length != d.length ||
                      c.some(function (g) {
                        return !i(s[g], l[g], u);
                      })))
                )
                  return !1;
                switch (f.slice(8, -1)) {
                  case 'Symbol':
                    return s.valueOf() == l.valueOf();
                  case 'Date':
                  case 'Number':
                    return +s == +l || (+s != +s && +l != +l);
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return '' + s == '' + l;
                  case 'Set':
                  case 'Map':
                    (c = s.entries()), (d = l.entries());
                    do
                      if (!i((y = c.next()).value, d.next().value, u))
                        return !1;
                    while (!y.done);
                    return !0;
                  case 'ArrayBuffer':
                    (s = new Uint8Array(s)), (l = new Uint8Array(l));
                  case 'DataView':
                    (s = new Uint8Array(s.buffer)),
                      (l = new Uint8Array(l.buffer));
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (s.length != l.length) return !1;
                    for (y = 0; y < s.length; y++)
                      if (
                        (y in s || y in l) &&
                        (y in s != y in l || !i(s[y], l[y], u))
                      )
                        return !1;
                    return !0;
                  case 'Object':
                    return i(r(s), r(l), u);
                  default:
                    return !1;
                }
              })(o, a, []);
            };
          })());
      });
    function JP(e) {
      return e
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\./g, ' ')
        .replace(/([^\n])([A-Z])([a-z])/g, (t, r, n, o) => `${r} ${n}${o}`)
        .replace(/([a-z])([A-Z])/g, (t, r, n) => `${r} ${n}`)
        .replace(/([a-z])([0-9])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/([0-9])([a-z])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/(\s|^)(\w)/g, (t, r, n) => `${r}${n.toUpperCase()}`)
        .replace(/ +/g, ' ')
        .trim();
    }
    var fm = MP(UP()),
      gm = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
      $P = (e, t) => {
        let { exists: r, eq: n, neq: o, truthy: a } = e;
        if (gm([r, n, o, a]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`
          );
        if (typeof n < 'u') return (0, fm.isEqual)(t, n);
        if (typeof o < 'u') return !(0, fm.isEqual)(t, o);
        if (typeof r < 'u') {
          let i = typeof t < 'u';
          return r ? i : !i;
        }
        return typeof a > 'u' || a ? !!t : !t;
      },
      bm = (e, t, r) => {
        if (!e.if) return !0;
        let { arg: n, global: o } = e.if;
        if (gm([n, o]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`
          );
        let a = n ? t[n] : r[o];
        return $P(e.if, a);
      },
      Hi = (e) =>
        e
          .toLowerCase()
          .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
          .replace(/-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, ''),
      ym = (e, t) => {
        let r = Hi(e);
        if (r === '')
          throw new Error(
            `Invalid ${t} '${e}', must include alphanumeric characters`
          );
        return r;
      },
      vm = (e, t) => `${ym(e, 'kind')}${t ? `--${ym(t, 'name')}` : ''}`,
      xm = (e) => JP(e);
    function hm(e, t) {
      return Array.isArray(t) ? t.includes(e) : e.match(t);
    }
    function Jo(e, { includeStories: t, excludeStories: r }) {
      return e !== '__esModule' && (!t || hm(e, t)) && (!r || !hm(e, r));
    }
    var Em = (...e) => {
      let t = e.reduce(
        (r, n) => (n.startsWith('!') ? r.delete(n.slice(1)) : r.add(n), r),
        new Set()
      );
      return Array.from(t);
    };
    var zP = Object.create,
      ds = Object.defineProperty,
      VP = Object.getOwnPropertyDescriptor,
      HP = Object.getOwnPropertyNames,
      GP = Object.getPrototypeOf,
      WP = Object.prototype.hasOwnProperty,
      m = (e, t) => ds(e, 'name', { value: t, configurable: !0 }),
      $o = ((e) =>
        typeof et < 'u'
          ? et
          : typeof Proxy < 'u'
            ? new Proxy(e, { get: (t, r) => (typeof et < 'u' ? et : t)[r] })
            : e)(function (e) {
        if (typeof et < 'u') return et.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported');
      }),
      L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      KP = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of HP(t))
            !WP.call(e, o) &&
              o !== r &&
              ds(e, o, {
                get: () => t[o],
                enumerable: !(n = VP(t, o)) || n.enumerable,
              });
        return e;
      },
      Qe = (e, t, r) => (
        (r = e != null ? zP(GP(e)) : {}),
        KP(
          t || !e || !e.__esModule
            ? ds(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      Lm = L((e, t) => {
        (function (r) {
          if (typeof e == 'object' && typeof t < 'u') t.exports = r();
          else if (typeof define == 'function' && define.amd) define([], r);
          else {
            var n;
            typeof window < 'u' || typeof window < 'u'
              ? (n = window)
              : typeof self < 'u'
                ? (n = self)
                : (n = this),
              (n.memoizerific = r());
          }
        })(function () {
          var r, n, o;
          return m(function a(i, s, l) {
            function u(y, f) {
              if (!s[y]) {
                if (!i[y]) {
                  var h = typeof $o == 'function' && $o;
                  if (!f && h) return h(y, !0);
                  if (c) return c(y, !0);
                  var g = new Error("Cannot find module '" + y + "'");
                  throw ((g.code = 'MODULE_NOT_FOUND'), g);
                }
                var _ = (s[y] = { exports: {} });
                i[y][0].call(
                  _.exports,
                  function (x) {
                    var v = i[y][1][x];
                    return u(v || x);
                  },
                  _,
                  _.exports,
                  a,
                  i,
                  s,
                  l
                );
              }
              return s[y].exports;
            }
            m(u, 's');
            for (
              var c = typeof $o == 'function' && $o, d = 0;
              d < l.length;
              d++
            )
              u(l[d]);
            return u;
          }, 'e')(
            {
              1: [
                function (a, i, s) {
                  i.exports = function (l) {
                    if (typeof Map != 'function' || l) {
                      var u = a('./similar');
                      return new u();
                    } else return new Map();
                  };
                },
                { './similar': 2 },
              ],
              2: [
                function (a, i, s) {
                  function l() {
                    return (
                      (this.list = []),
                      (this.lastItem = void 0),
                      (this.size = 0),
                      this
                    );
                  }
                  m(l, 'Similar'),
                    (l.prototype.get = function (u) {
                      var c;
                      if (this.lastItem && this.isEqual(this.lastItem.key, u))
                        return this.lastItem.val;
                      if (((c = this.indexOf(u)), c >= 0))
                        return (this.lastItem = this.list[c]), this.list[c].val;
                    }),
                    (l.prototype.set = function (u, c) {
                      var d;
                      return this.lastItem && this.isEqual(this.lastItem.key, u)
                        ? ((this.lastItem.val = c), this)
                        : ((d = this.indexOf(u)),
                          d >= 0
                            ? ((this.lastItem = this.list[d]),
                              (this.list[d].val = c),
                              this)
                            : ((this.lastItem = { key: u, val: c }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this));
                    }),
                    (l.prototype.delete = function (u) {
                      var c;
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, u) &&
                          (this.lastItem = void 0),
                        (c = this.indexOf(u)),
                        c >= 0)
                      )
                        return this.size--, this.list.splice(c, 1)[0];
                    }),
                    (l.prototype.has = function (u) {
                      var c;
                      return this.lastItem && this.isEqual(this.lastItem.key, u)
                        ? !0
                        : ((c = this.indexOf(u)),
                          c >= 0 ? ((this.lastItem = this.list[c]), !0) : !1);
                    }),
                    (l.prototype.forEach = function (u, c) {
                      var d;
                      for (d = 0; d < this.size; d++)
                        u.call(
                          c || this,
                          this.list[d].val,
                          this.list[d].key,
                          this
                        );
                    }),
                    (l.prototype.indexOf = function (u) {
                      var c;
                      for (c = 0; c < this.size; c++)
                        if (this.isEqual(this.list[c].key, u)) return c;
                      return -1;
                    }),
                    (l.prototype.isEqual = function (u, c) {
                      return u === c || (u !== u && c !== c);
                    }),
                    (i.exports = l);
                },
                {},
              ],
              3: [
                function (a, i, s) {
                  var l = a('map-or-similar');
                  i.exports = function (y) {
                    var f = new l(!1),
                      h = [];
                    return function (g) {
                      var _ = m(function () {
                        var x = f,
                          v,
                          O,
                          C = arguments.length - 1,
                          I = Array(C + 1),
                          P = !0,
                          F;
                        if (
                          (_.numArgs || _.numArgs === 0) &&
                          _.numArgs !== C + 1
                        )
                          throw new Error(
                            'Memoizerific functions should always be called with the same number of arguments'
                          );
                        for (F = 0; F < C; F++) {
                          if (
                            ((I[F] = { cacheItem: x, arg: arguments[F] }),
                            x.has(arguments[F]))
                          ) {
                            x = x.get(arguments[F]);
                            continue;
                          }
                          (P = !1),
                            (v = new l(!1)),
                            x.set(arguments[F], v),
                            (x = v);
                        }
                        return (
                          P &&
                            (x.has(arguments[C])
                              ? (O = x.get(arguments[C]))
                              : (P = !1)),
                          P ||
                            ((O = g.apply(null, arguments)),
                            x.set(arguments[C], O)),
                          y > 0 &&
                            ((I[C] = { cacheItem: x, arg: arguments[C] }),
                            P ? u(h, I) : h.push(I),
                            h.length > y && c(h.shift())),
                          (_.wasMemoized = P),
                          (_.numArgs = C + 1),
                          O
                        );
                      }, 'memoizerific');
                      return (
                        (_.limit = y),
                        (_.wasMemoized = !1),
                        (_.cache = f),
                        (_.lru = h),
                        _
                      );
                    };
                  };
                  function u(y, f) {
                    var h = y.length,
                      g = f.length,
                      _,
                      x,
                      v;
                    for (x = 0; x < h; x++) {
                      for (_ = !0, v = 0; v < g; v++)
                        if (!d(y[x][v].arg, f[v].arg)) {
                          _ = !1;
                          break;
                        }
                      if (_) break;
                    }
                    y.push(y.splice(x, 1)[0]);
                  }
                  m(u, 'moveToMostRecentLru');
                  function c(y) {
                    var f = y.length,
                      h = y[f - 1],
                      g,
                      _;
                    for (
                      h.cacheItem.delete(h.arg), _ = f - 2;
                      _ >= 0 &&
                      ((h = y[_]), (g = h.cacheItem.get(h.arg)), !g || !g.size);
                      _--
                    )
                      h.cacheItem.delete(h.arg);
                  }
                  m(c, 'removeCachedResult');
                  function d(y, f) {
                    return y === f || (y !== y && f !== f);
                  }
                  m(d, 'isEqual');
                },
                { 'map-or-similar': 1 },
              ],
            },
            {},
            [3]
          )(3);
        });
      }),
      qm = L((e, t) => {
        var r =
          typeof window == 'object' &&
          window &&
          window.Object === Object &&
          window;
        t.exports = r;
      }),
      It = L((e, t) => {
        var r = qm(),
          n = typeof self == 'object' && self && self.Object === Object && self,
          o = r || n || Function('return this')();
        t.exports = o;
      }),
      Ln = L((e, t) => {
        var r = It(),
          n = r.Symbol;
        t.exports = n;
      }),
      YP = L((e, t) => {
        var r = Ln(),
          n = Object.prototype,
          o = n.hasOwnProperty,
          a = n.toString,
          i = r ? r.toStringTag : void 0;
        function s(l) {
          var u = o.call(l, i),
            c = l[i];
          try {
            l[i] = void 0;
            var d = !0;
          } catch {}
          var y = a.call(l);
          return d && (u ? (l[i] = c) : delete l[i]), y;
        }
        m(s, 'getRawTag'), (t.exports = s);
      }),
      XP = L((e, t) => {
        var r = Object.prototype,
          n = r.toString;
        function o(a) {
          return n.call(a);
        }
        m(o, 'objectToString'), (t.exports = o);
      }),
      Gr = L((e, t) => {
        var r = Ln(),
          n = YP(),
          o = XP(),
          a = '[object Null]',
          i = '[object Undefined]',
          s = r ? r.toStringTag : void 0;
        function l(u) {
          return u == null
            ? u === void 0
              ? i
              : a
            : s && s in Object(u)
              ? n(u)
              : o(u);
        }
        m(l, 'baseGetTag'), (t.exports = l);
      }),
      qn = L((e, t) => {
        function r(n) {
          var o = typeof n;
          return n != null && (o == 'object' || o == 'function');
        }
        m(r, 'isObject'), (t.exports = r);
      }),
      Mm = L((e, t) => {
        var r = Gr(),
          n = qn(),
          o = '[object AsyncFunction]',
          a = '[object Function]',
          i = '[object GeneratorFunction]',
          s = '[object Proxy]';
        function l(u) {
          if (!n(u)) return !1;
          var c = r(u);
          return c == a || c == i || c == o || c == s;
        }
        m(l, 'isFunction'), (t.exports = l);
      }),
      QP = L((e, t) => {
        var r = It(),
          n = r['__core-js_shared__'];
        t.exports = n;
      }),
      ZP = L((e, t) => {
        var r = QP(),
          n = (function () {
            var a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
            return a ? 'Symbol(src)_1.' + a : '';
          })();
        function o(a) {
          return !!n && n in a;
        }
        m(o, 'isMasked'), (t.exports = o);
      }),
      Um = L((e, t) => {
        var r = Function.prototype,
          n = r.toString;
        function o(a) {
          if (a != null) {
            try {
              return n.call(a);
            } catch {}
            try {
              return a + '';
            } catch {}
          }
          return '';
        }
        m(o, 'toSource'), (t.exports = o);
      }),
      ek = L((e, t) => {
        var r = Mm(),
          n = ZP(),
          o = qn(),
          a = Um(),
          i = /[\\^$.*+?()[\]{}|]/g,
          s = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          u = Object.prototype,
          c = l.toString,
          d = u.hasOwnProperty,
          y = RegExp(
            '^' +
              c
                .call(d)
                .replace(i, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
        function f(h) {
          if (!o(h) || n(h)) return !1;
          var g = r(h) ? y : s;
          return g.test(a(h));
        }
        m(f, 'baseIsNative'), (t.exports = f);
      }),
      tk = L((e, t) => {
        function r(n, o) {
          return n?.[o];
        }
        m(r, 'getValue'), (t.exports = r);
      }),
      dr = L((e, t) => {
        var r = ek(),
          n = tk();
        function o(a, i) {
          var s = n(a, i);
          return r(s) ? s : void 0;
        }
        m(o, 'getNative'), (t.exports = o);
      }),
      Jm = L((e, t) => {
        var r = dr(),
          n = (function () {
            try {
              var o = r(Object, 'defineProperty');
              return o({}, '', {}), o;
            } catch {}
          })();
        t.exports = n;
      }),
      $m = L((e, t) => {
        var r = Jm();
        function n(o, a, i) {
          a == '__proto__' && r
            ? r(o, a, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0,
              })
            : (o[a] = i);
        }
        m(n, 'baseAssignValue'), (t.exports = n);
      }),
      rk = L((e, t) => {
        function r(n) {
          return function (o, a, i) {
            for (var s = -1, l = Object(o), u = i(o), c = u.length; c--; ) {
              var d = u[n ? c : ++s];
              if (a(l[d], d, l) === !1) break;
            }
            return o;
          };
        }
        m(r, 'createBaseFor'), (t.exports = r);
      }),
      nk = L((e, t) => {
        var r = rk(),
          n = r();
        t.exports = n;
      }),
      ok = L((e, t) => {
        function r(n, o) {
          for (var a = -1, i = Array(n); ++a < n; ) i[a] = o(a);
          return i;
        }
        m(r, 'baseTimes'), (t.exports = r);
      }),
      Wr = L((e, t) => {
        function r(n) {
          return n != null && typeof n == 'object';
        }
        m(r, 'isObjectLike'), (t.exports = r);
      }),
      ak = L((e, t) => {
        var r = Gr(),
          n = Wr(),
          o = '[object Arguments]';
        function a(i) {
          return n(i) && r(i) == o;
        }
        m(a, 'baseIsArguments'), (t.exports = a);
      }),
      fs = L((e, t) => {
        var r = ak(),
          n = Wr(),
          o = Object.prototype,
          a = o.hasOwnProperty,
          i = o.propertyIsEnumerable,
          s = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (l) {
                return n(l) && a.call(l, 'callee') && !i.call(l, 'callee');
              };
        t.exports = s;
      }),
      Pt = L((e, t) => {
        var r = Array.isArray;
        t.exports = r;
      }),
      ik = L((e, t) => {
        function r() {
          return !1;
        }
        m(r, 'stubFalse'), (t.exports = r);
      }),
      zm = L((e, t) => {
        var r = It(),
          n = ik(),
          o = typeof e == 'object' && e && !e.nodeType && e,
          a = o && typeof t == 'object' && t && !t.nodeType && t,
          i = a && a.exports === o,
          s = i ? r.Buffer : void 0,
          l = s ? s.isBuffer : void 0,
          u = l || n;
        t.exports = u;
      }),
      ys = L((e, t) => {
        var r = 9007199254740991,
          n = /^(?:0|[1-9]\d*)$/;
        function o(a, i) {
          var s = typeof a;
          return (
            (i = i ?? r),
            !!i &&
              (s == 'number' || (s != 'symbol' && n.test(a))) &&
              a > -1 &&
              a % 1 == 0 &&
              a < i
          );
        }
        m(o, 'isIndex'), (t.exports = o);
      }),
      hs = L((e, t) => {
        var r = 9007199254740991;
        function n(o) {
          return typeof o == 'number' && o > -1 && o % 1 == 0 && o <= r;
        }
        m(n, 'isLength'), (t.exports = n);
      }),
      sk = L((e, t) => {
        var r = Gr(),
          n = hs(),
          o = Wr(),
          a = '[object Arguments]',
          i = '[object Array]',
          s = '[object Boolean]',
          l = '[object Date]',
          u = '[object Error]',
          c = '[object Function]',
          d = '[object Map]',
          y = '[object Number]',
          f = '[object Object]',
          h = '[object RegExp]',
          g = '[object Set]',
          _ = '[object String]',
          x = '[object WeakMap]',
          v = '[object ArrayBuffer]',
          O = '[object DataView]',
          C = '[object Float32Array]',
          I = '[object Float64Array]',
          P = '[object Int8Array]',
          F = '[object Int16Array]',
          D = '[object Int32Array]',
          U = '[object Uint8Array]',
          G = '[object Uint8ClampedArray]',
          X = '[object Uint16Array]',
          Q = '[object Uint32Array]',
          V = {};
        (V[C] = V[I] = V[P] = V[F] = V[D] = V[U] = V[G] = V[X] = V[Q] = !0),
          (V[a] =
            V[i] =
            V[v] =
            V[s] =
            V[O] =
            V[l] =
            V[u] =
            V[c] =
            V[d] =
            V[y] =
            V[f] =
            V[h] =
            V[g] =
            V[_] =
            V[x] =
              !1);
        function R(q) {
          return o(q) && n(q.length) && !!V[r(q)];
        }
        m(R, 'baseIsTypedArray'), (t.exports = R);
      }),
      lk = L((e, t) => {
        function r(n) {
          return function (o) {
            return n(o);
          };
        }
        m(r, 'baseUnary'), (t.exports = r);
      }),
      uk = L((e, t) => {
        var r = qm(),
          n = typeof e == 'object' && e && !e.nodeType && e,
          o = n && typeof t == 'object' && t && !t.nodeType && t,
          a = o && o.exports === n,
          i = a && r.process,
          s = (function () {
            try {
              var l = o && o.require && o.require('util').types;
              return l || (i && i.binding && i.binding('util'));
            } catch {}
          })();
        t.exports = s;
      }),
      Vm = L((e, t) => {
        var r = sk(),
          n = lk(),
          o = uk(),
          a = o && o.isTypedArray,
          i = a ? n(a) : r;
        t.exports = i;
      }),
      Hm = L((e, t) => {
        var r = ok(),
          n = fs(),
          o = Pt(),
          a = zm(),
          i = ys(),
          s = Vm(),
          l = Object.prototype,
          u = l.hasOwnProperty;
        function c(d, y) {
          var f = o(d),
            h = !f && n(d),
            g = !f && !h && a(d),
            _ = !f && !h && !g && s(d),
            x = f || h || g || _,
            v = x ? r(d.length, String) : [],
            O = v.length;
          for (var C in d)
            (y || u.call(d, C)) &&
              !(
                x &&
                (C == 'length' ||
                  (g && (C == 'offset' || C == 'parent')) ||
                  (_ &&
                    (C == 'buffer' ||
                      C == 'byteLength' ||
                      C == 'byteOffset')) ||
                  i(C, O))
              ) &&
              v.push(C);
          return v;
        }
        m(c, 'arrayLikeKeys'), (t.exports = c);
      }),
      Gm = L((e, t) => {
        var r = Object.prototype;
        function n(o) {
          var a = o && o.constructor,
            i = (typeof a == 'function' && a.prototype) || r;
          return o === i;
        }
        m(n, 'isPrototype'), (t.exports = n);
      }),
      Wm = L((e, t) => {
        function r(n, o) {
          return function (a) {
            return n(o(a));
          };
        }
        m(r, 'overArg'), (t.exports = r);
      }),
      ck = L((e, t) => {
        var r = Wm(),
          n = r(Object.keys, Object);
        t.exports = n;
      }),
      pk = L((e, t) => {
        var r = Gm(),
          n = ck(),
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s) {
          if (!r(s)) return n(s);
          var l = [];
          for (var u in Object(s))
            a.call(s, u) && u != 'constructor' && l.push(u);
          return l;
        }
        m(i, 'baseKeys'), (t.exports = i);
      }),
      Km = L((e, t) => {
        var r = Mm(),
          n = hs();
        function o(a) {
          return a != null && n(a.length) && !r(a);
        }
        m(o, 'isArrayLike'), (t.exports = o);
      }),
      ms = L((e, t) => {
        var r = Hm(),
          n = pk(),
          o = Km();
        function a(i) {
          return o(i) ? r(i) : n(i);
        }
        m(a, 'keys'), (t.exports = a);
      }),
      dk = L((e, t) => {
        var r = nk(),
          n = ms();
        function o(a, i) {
          return a && r(a, i, n);
        }
        m(o, 'baseForOwn'), (t.exports = o);
      }),
      fk = L((e, t) => {
        function r() {
          (this.__data__ = []), (this.size = 0);
        }
        m(r, 'listCacheClear'), (t.exports = r);
      }),
      gs = L((e, t) => {
        function r(n, o) {
          return n === o || (n !== n && o !== o);
        }
        m(r, 'eq'), (t.exports = r);
      }),
      Xo = L((e, t) => {
        var r = gs();
        function n(o, a) {
          for (var i = o.length; i--; ) if (r(o[i][0], a)) return i;
          return -1;
        }
        m(n, 'assocIndexOf'), (t.exports = n);
      }),
      yk = L((e, t) => {
        var r = Xo(),
          n = Array.prototype,
          o = n.splice;
        function a(i) {
          var s = this.__data__,
            l = r(s, i);
          if (l < 0) return !1;
          var u = s.length - 1;
          return l == u ? s.pop() : o.call(s, l, 1), --this.size, !0;
        }
        m(a, 'listCacheDelete'), (t.exports = a);
      }),
      hk = L((e, t) => {
        var r = Xo();
        function n(o) {
          var a = this.__data__,
            i = r(a, o);
          return i < 0 ? void 0 : a[i][1];
        }
        m(n, 'listCacheGet'), (t.exports = n);
      }),
      mk = L((e, t) => {
        var r = Xo();
        function n(o) {
          return r(this.__data__, o) > -1;
        }
        m(n, 'listCacheHas'), (t.exports = n);
      }),
      gk = L((e, t) => {
        var r = Xo();
        function n(o, a) {
          var i = this.__data__,
            s = r(i, o);
          return s < 0 ? (++this.size, i.push([o, a])) : (i[s][1] = a), this;
        }
        m(n, 'listCacheSet'), (t.exports = n);
      }),
      Qo = L((e, t) => {
        var r = fk(),
          n = yk(),
          o = hk(),
          a = mk(),
          i = gk();
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length;
          for (this.clear(); ++u < c; ) {
            var d = l[u];
            this.set(d[0], d[1]);
          }
        }
        m(s, 'ListCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s);
      }),
      bk = L((e, t) => {
        var r = Qo();
        function n() {
          (this.__data__ = new r()), (this.size = 0);
        }
        m(n, 'stackClear'), (t.exports = n);
      }),
      vk = L((e, t) => {
        function r(n) {
          var o = this.__data__,
            a = o.delete(n);
          return (this.size = o.size), a;
        }
        m(r, 'stackDelete'), (t.exports = r);
      }),
      xk = L((e, t) => {
        function r(n) {
          return this.__data__.get(n);
        }
        m(r, 'stackGet'), (t.exports = r);
      }),
      Ek = L((e, t) => {
        function r(n) {
          return this.__data__.has(n);
        }
        m(r, 'stackHas'), (t.exports = r);
      }),
      bs = L((e, t) => {
        var r = dr(),
          n = It(),
          o = r(n, 'Map');
        t.exports = o;
      }),
      Zo = L((e, t) => {
        var r = dr(),
          n = r(Object, 'create');
        t.exports = n;
      }),
      wk = L((e, t) => {
        var r = Zo();
        function n() {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        }
        m(n, 'hashClear'), (t.exports = n);
      }),
      Sk = L((e, t) => {
        function r(n) {
          var o = this.has(n) && delete this.__data__[n];
          return (this.size -= o ? 1 : 0), o;
        }
        m(r, 'hashDelete'), (t.exports = r);
      }),
      Ak = L((e, t) => {
        var r = Zo(),
          n = '__lodash_hash_undefined__',
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s) {
          var l = this.__data__;
          if (r) {
            var u = l[s];
            return u === n ? void 0 : u;
          }
          return a.call(l, s) ? l[s] : void 0;
        }
        m(i, 'hashGet'), (t.exports = i);
      }),
      Tk = L((e, t) => {
        var r = Zo(),
          n = Object.prototype,
          o = n.hasOwnProperty;
        function a(i) {
          var s = this.__data__;
          return r ? s[i] !== void 0 : o.call(s, i);
        }
        m(a, 'hashHas'), (t.exports = a);
      }),
      Ck = L((e, t) => {
        var r = Zo(),
          n = '__lodash_hash_undefined__';
        function o(a, i) {
          var s = this.__data__;
          return (
            (this.size += this.has(a) ? 0 : 1),
            (s[a] = r && i === void 0 ? n : i),
            this
          );
        }
        m(o, 'hashSet'), (t.exports = o);
      }),
      _k = L((e, t) => {
        var r = wk(),
          n = Sk(),
          o = Ak(),
          a = Tk(),
          i = Ck();
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length;
          for (this.clear(); ++u < c; ) {
            var d = l[u];
            this.set(d[0], d[1]);
          }
        }
        m(s, 'Hash'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s);
      }),
      Ok = L((e, t) => {
        var r = _k(),
          n = Qo(),
          o = bs();
        function a() {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (o || n)(),
              string: new r(),
            });
        }
        m(a, 'mapCacheClear'), (t.exports = a);
      }),
      Ik = L((e, t) => {
        function r(n) {
          var o = typeof n;
          return o == 'string' ||
            o == 'number' ||
            o == 'symbol' ||
            o == 'boolean'
            ? n !== '__proto__'
            : n === null;
        }
        m(r, 'isKeyable'), (t.exports = r);
      }),
      ea = L((e, t) => {
        var r = Ik();
        function n(o, a) {
          var i = o.__data__;
          return r(a) ? i[typeof a == 'string' ? 'string' : 'hash'] : i.map;
        }
        m(n, 'getMapData'), (t.exports = n);
      }),
      Pk = L((e, t) => {
        var r = ea();
        function n(o) {
          var a = r(this, o).delete(o);
          return (this.size -= a ? 1 : 0), a;
        }
        m(n, 'mapCacheDelete'), (t.exports = n);
      }),
      kk = L((e, t) => {
        var r = ea();
        function n(o) {
          return r(this, o).get(o);
        }
        m(n, 'mapCacheGet'), (t.exports = n);
      }),
      Rk = L((e, t) => {
        var r = ea();
        function n(o) {
          return r(this, o).has(o);
        }
        m(n, 'mapCacheHas'), (t.exports = n);
      }),
      Dk = L((e, t) => {
        var r = ea();
        function n(o, a) {
          var i = r(this, o),
            s = i.size;
          return i.set(o, a), (this.size += i.size == s ? 0 : 1), this;
        }
        m(n, 'mapCacheSet'), (t.exports = n);
      }),
      vs = L((e, t) => {
        var r = Ok(),
          n = Pk(),
          o = kk(),
          a = Rk(),
          i = Dk();
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length;
          for (this.clear(); ++u < c; ) {
            var d = l[u];
            this.set(d[0], d[1]);
          }
        }
        m(s, 'MapCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s);
      }),
      Fk = L((e, t) => {
        var r = Qo(),
          n = bs(),
          o = vs(),
          a = 200;
        function i(s, l) {
          var u = this.__data__;
          if (u instanceof r) {
            var c = u.__data__;
            if (!n || c.length < a - 1)
              return c.push([s, l]), (this.size = ++u.size), this;
            u = this.__data__ = new o(c);
          }
          return u.set(s, l), (this.size = u.size), this;
        }
        m(i, 'stackSet'), (t.exports = i);
      }),
      Ym = L((e, t) => {
        var r = Qo(),
          n = bk(),
          o = vk(),
          a = xk(),
          i = Ek(),
          s = Fk();
        function l(u) {
          var c = (this.__data__ = new r(u));
          this.size = c.size;
        }
        m(l, 'Stack'),
          (l.prototype.clear = n),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = s),
          (t.exports = l);
      }),
      jk = L((e, t) => {
        var r = '__lodash_hash_undefined__';
        function n(o) {
          return this.__data__.set(o, r), this;
        }
        m(n, 'setCacheAdd'), (t.exports = n);
      }),
      Nk = L((e, t) => {
        function r(n) {
          return this.__data__.has(n);
        }
        m(r, 'setCacheHas'), (t.exports = r);
      }),
      Bk = L((e, t) => {
        var r = vs(),
          n = jk(),
          o = Nk();
        function a(i) {
          var s = -1,
            l = i == null ? 0 : i.length;
          for (this.__data__ = new r(); ++s < l; ) this.add(i[s]);
        }
        m(a, 'SetCache'),
          (a.prototype.add = a.prototype.push = n),
          (a.prototype.has = o),
          (t.exports = a);
      }),
      Lk = L((e, t) => {
        function r(n, o) {
          for (var a = -1, i = n == null ? 0 : n.length; ++a < i; )
            if (o(n[a], a, n)) return !0;
          return !1;
        }
        m(r, 'arraySome'), (t.exports = r);
      }),
      qk = L((e, t) => {
        function r(n, o) {
          return n.has(o);
        }
        m(r, 'cacheHas'), (t.exports = r);
      }),
      Xm = L((e, t) => {
        var r = Bk(),
          n = Lk(),
          o = qk(),
          a = 1,
          i = 2;
        function s(l, u, c, d, y, f) {
          var h = c & a,
            g = l.length,
            _ = u.length;
          if (g != _ && !(h && _ > g)) return !1;
          var x = f.get(l),
            v = f.get(u);
          if (x && v) return x == u && v == l;
          var O = -1,
            C = !0,
            I = c & i ? new r() : void 0;
          for (f.set(l, u), f.set(u, l); ++O < g; ) {
            var P = l[O],
              F = u[O];
            if (d) var D = h ? d(F, P, O, u, l, f) : d(P, F, O, l, u, f);
            if (D !== void 0) {
              if (D) continue;
              C = !1;
              break;
            }
            if (I) {
              if (
                !n(u, function (U, G) {
                  if (!o(I, G) && (P === U || y(P, U, c, d, f)))
                    return I.push(G);
                })
              ) {
                C = !1;
                break;
              }
            } else if (!(P === F || y(P, F, c, d, f))) {
              C = !1;
              break;
            }
          }
          return f.delete(l), f.delete(u), C;
        }
        m(s, 'equalArrays'), (t.exports = s);
      }),
      Mk = L((e, t) => {
        var r = It(),
          n = r.Uint8Array;
        t.exports = n;
      }),
      Uk = L((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size);
          return (
            n.forEach(function (i, s) {
              a[++o] = [s, i];
            }),
            a
          );
        }
        m(r, 'mapToArray'), (t.exports = r);
      }),
      Jk = L((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size);
          return (
            n.forEach(function (i) {
              a[++o] = i;
            }),
            a
          );
        }
        m(r, 'setToArray'), (t.exports = r);
      }),
      $k = L((e, t) => {
        var r = Ln(),
          n = Mk(),
          o = gs(),
          a = Xm(),
          i = Uk(),
          s = Jk(),
          l = 1,
          u = 2,
          c = '[object Boolean]',
          d = '[object Date]',
          y = '[object Error]',
          f = '[object Map]',
          h = '[object Number]',
          g = '[object RegExp]',
          _ = '[object Set]',
          x = '[object String]',
          v = '[object Symbol]',
          O = '[object ArrayBuffer]',
          C = '[object DataView]',
          I = r ? r.prototype : void 0,
          P = I ? I.valueOf : void 0;
        function F(D, U, G, X, Q, V, R) {
          switch (G) {
            case C:
              if (D.byteLength != U.byteLength || D.byteOffset != U.byteOffset)
                return !1;
              (D = D.buffer), (U = U.buffer);
            case O:
              return !(D.byteLength != U.byteLength || !V(new n(D), new n(U)));
            case c:
            case d:
            case h:
              return o(+D, +U);
            case y:
              return D.name == U.name && D.message == U.message;
            case g:
            case x:
              return D == U + '';
            case f:
              var q = i;
            case _:
              var M = X & l;
              if ((q || (q = s), D.size != U.size && !M)) return !1;
              var Y = R.get(D);
              if (Y) return Y == U;
              (X |= u), R.set(D, U);
              var te = a(q(D), q(U), X, Q, V, R);
              return R.delete(D), te;
            case v:
              if (P) return P.call(D) == P.call(U);
          }
          return !1;
        }
        m(F, 'equalByTag'), (t.exports = F);
      }),
      xs = L((e, t) => {
        function r(n, o) {
          for (var a = -1, i = o.length, s = n.length; ++a < i; )
            n[s + a] = o[a];
          return n;
        }
        m(r, 'arrayPush'), (t.exports = r);
      }),
      Qm = L((e, t) => {
        var r = xs(),
          n = Pt();
        function o(a, i, s) {
          var l = i(a);
          return n(a) ? l : r(l, s(a));
        }
        m(o, 'baseGetAllKeys'), (t.exports = o);
      }),
      zk = L((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = 0, l = [];
            ++a < i;

          ) {
            var u = n[a];
            o(u, a, n) && (l[s++] = u);
          }
          return l;
        }
        m(r, 'arrayFilter'), (t.exports = r);
      }),
      Zm = L((e, t) => {
        function r() {
          return [];
        }
        m(r, 'stubArray'), (t.exports = r);
      }),
      eg = L((e, t) => {
        var r = zk(),
          n = Zm(),
          o = Object.prototype,
          a = o.propertyIsEnumerable,
          i = Object.getOwnPropertySymbols,
          s = i
            ? function (l) {
                return l == null
                  ? []
                  : ((l = Object(l)),
                    r(i(l), function (u) {
                      return a.call(l, u);
                    }));
              }
            : n;
        t.exports = s;
      }),
      Vk = L((e, t) => {
        var r = Qm(),
          n = eg(),
          o = ms();
        function a(i) {
          return r(i, o, n);
        }
        m(a, 'getAllKeys'), (t.exports = a);
      }),
      Hk = L((e, t) => {
        var r = Vk(),
          n = 1,
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s, l, u, c, d, y) {
          var f = u & n,
            h = r(s),
            g = h.length,
            _ = r(l),
            x = _.length;
          if (g != x && !f) return !1;
          for (var v = g; v--; ) {
            var O = h[v];
            if (!(f ? O in l : a.call(l, O))) return !1;
          }
          var C = y.get(s),
            I = y.get(l);
          if (C && I) return C == l && I == s;
          var P = !0;
          y.set(s, l), y.set(l, s);
          for (var F = f; ++v < g; ) {
            O = h[v];
            var D = s[O],
              U = l[O];
            if (c) var G = f ? c(U, D, O, l, s, y) : c(D, U, O, s, l, y);
            if (!(G === void 0 ? D === U || d(D, U, u, c, y) : G)) {
              P = !1;
              break;
            }
            F || (F = O == 'constructor');
          }
          if (P && !F) {
            var X = s.constructor,
              Q = l.constructor;
            X != Q &&
              'constructor' in s &&
              'constructor' in l &&
              !(
                typeof X == 'function' &&
                X instanceof X &&
                typeof Q == 'function' &&
                Q instanceof Q
              ) &&
              (P = !1);
          }
          return y.delete(s), y.delete(l), P;
        }
        m(i, 'equalObjects'), (t.exports = i);
      }),
      Gk = L((e, t) => {
        var r = dr(),
          n = It(),
          o = r(n, 'DataView');
        t.exports = o;
      }),
      Wk = L((e, t) => {
        var r = dr(),
          n = It(),
          o = r(n, 'Promise');
        t.exports = o;
      }),
      Kk = L((e, t) => {
        var r = dr(),
          n = It(),
          o = r(n, 'Set');
        t.exports = o;
      }),
      Yk = L((e, t) => {
        var r = dr(),
          n = It(),
          o = r(n, 'WeakMap');
        t.exports = o;
      }),
      Xk = L((e, t) => {
        var r = Gk(),
          n = bs(),
          o = Wk(),
          a = Kk(),
          i = Yk(),
          s = Gr(),
          l = Um(),
          u = '[object Map]',
          c = '[object Object]',
          d = '[object Promise]',
          y = '[object Set]',
          f = '[object WeakMap]',
          h = '[object DataView]',
          g = l(r),
          _ = l(n),
          x = l(o),
          v = l(a),
          O = l(i),
          C = s;
        ((r && C(new r(new ArrayBuffer(1))) != h) ||
          (n && C(new n()) != u) ||
          (o && C(o.resolve()) != d) ||
          (a && C(new a()) != y) ||
          (i && C(new i()) != f)) &&
          (C = m(function (I) {
            var P = s(I),
              F = P == c ? I.constructor : void 0,
              D = F ? l(F) : '';
            if (D)
              switch (D) {
                case g:
                  return h;
                case _:
                  return u;
                case x:
                  return d;
                case v:
                  return y;
                case O:
                  return f;
              }
            return P;
          }, 'getTag')),
          (t.exports = C);
      }),
      Qk = L((e, t) => {
        var r = Ym(),
          n = Xm(),
          o = $k(),
          a = Hk(),
          i = Xk(),
          s = Pt(),
          l = zm(),
          u = Vm(),
          c = 1,
          d = '[object Arguments]',
          y = '[object Array]',
          f = '[object Object]',
          h = Object.prototype,
          g = h.hasOwnProperty;
        function _(x, v, O, C, I, P) {
          var F = s(x),
            D = s(v),
            U = F ? y : i(x),
            G = D ? y : i(v);
          (U = U == d ? f : U), (G = G == d ? f : G);
          var X = U == f,
            Q = G == f,
            V = U == G;
          if (V && l(x)) {
            if (!l(v)) return !1;
            (F = !0), (X = !1);
          }
          if (V && !X)
            return (
              P || (P = new r()),
              F || u(x) ? n(x, v, O, C, I, P) : o(x, v, U, O, C, I, P)
            );
          if (!(O & c)) {
            var R = X && g.call(x, '__wrapped__'),
              q = Q && g.call(v, '__wrapped__');
            if (R || q) {
              var M = R ? x.value() : x,
                Y = q ? v.value() : v;
              return P || (P = new r()), I(M, Y, O, C, P);
            }
          }
          return V ? (P || (P = new r()), a(x, v, O, C, I, P)) : !1;
        }
        m(_, 'baseIsEqualDeep'), (t.exports = _);
      }),
      tg = L((e, t) => {
        var r = Qk(),
          n = Wr();
        function o(a, i, s, l, u) {
          return a === i
            ? !0
            : a == null || i == null || (!n(a) && !n(i))
              ? a !== a && i !== i
              : r(a, i, s, l, o, u);
        }
        m(o, 'baseIsEqual'), (t.exports = o);
      }),
      Zk = L((e, t) => {
        var r = Ym(),
          n = tg(),
          o = 1,
          a = 2;
        function i(s, l, u, c) {
          var d = u.length,
            y = d,
            f = !c;
          if (s == null) return !y;
          for (s = Object(s); d--; ) {
            var h = u[d];
            if (f && h[2] ? h[1] !== s[h[0]] : !(h[0] in s)) return !1;
          }
          for (; ++d < y; ) {
            h = u[d];
            var g = h[0],
              _ = s[g],
              x = h[1];
            if (f && h[2]) {
              if (_ === void 0 && !(g in s)) return !1;
            } else {
              var v = new r();
              if (c) var O = c(_, x, g, s, l, v);
              if (!(O === void 0 ? n(x, _, o | a, c, v) : O)) return !1;
            }
          }
          return !0;
        }
        m(i, 'baseIsMatch'), (t.exports = i);
      }),
      rg = L((e, t) => {
        var r = qn();
        function n(o) {
          return o === o && !r(o);
        }
        m(n, 'isStrictComparable'), (t.exports = n);
      }),
      eR = L((e, t) => {
        var r = rg(),
          n = ms();
        function o(a) {
          for (var i = n(a), s = i.length; s--; ) {
            var l = i[s],
              u = a[l];
            i[s] = [l, u, r(u)];
          }
          return i;
        }
        m(o, 'getMatchData'), (t.exports = o);
      }),
      ng = L((e, t) => {
        function r(n, o) {
          return function (a) {
            return a == null
              ? !1
              : a[n] === o && (o !== void 0 || n in Object(a));
          };
        }
        m(r, 'matchesStrictComparable'), (t.exports = r);
      }),
      tR = L((e, t) => {
        var r = Zk(),
          n = eR(),
          o = ng();
        function a(i) {
          var s = n(i);
          return s.length == 1 && s[0][2]
            ? o(s[0][0], s[0][1])
            : function (l) {
                return l === i || r(l, i, s);
              };
        }
        m(a, 'baseMatches'), (t.exports = a);
      }),
      Es = L((e, t) => {
        var r = Gr(),
          n = Wr(),
          o = '[object Symbol]';
        function a(i) {
          return typeof i == 'symbol' || (n(i) && r(i) == o);
        }
        m(a, 'isSymbol'), (t.exports = a);
      }),
      ws = L((e, t) => {
        var r = Pt(),
          n = Es(),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        function i(s, l) {
          if (r(s)) return !1;
          var u = typeof s;
          return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            s == null ||
            n(s)
            ? !0
            : a.test(s) || !o.test(s) || (l != null && s in Object(l));
        }
        m(i, 'isKey'), (t.exports = i);
      }),
      rR = L((e, t) => {
        var r = vs(),
          n = 'Expected a function';
        function o(a, i) {
          if (typeof a != 'function' || (i != null && typeof i != 'function'))
            throw new TypeError(n);
          var s = m(function () {
            var l = arguments,
              u = i ? i.apply(this, l) : l[0],
              c = s.cache;
            if (c.has(u)) return c.get(u);
            var d = a.apply(this, l);
            return (s.cache = c.set(u, d) || c), d;
          }, 'memoized');
          return (s.cache = new (o.Cache || r)()), s;
        }
        m(o, 'memoize'), (o.Cache = r), (t.exports = o);
      }),
      nR = L((e, t) => {
        var r = rR(),
          n = 500;
        function o(a) {
          var i = r(a, function (l) {
              return s.size === n && s.clear(), l;
            }),
            s = i.cache;
          return i;
        }
        m(o, 'memoizeCapped'), (t.exports = o);
      }),
      oR = L((e, t) => {
        var r = nR(),
          n =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = r(function (i) {
            var s = [];
            return (
              i.charCodeAt(0) === 46 && s.push(''),
              i.replace(n, function (l, u, c, d) {
                s.push(c ? d.replace(o, '$1') : u || l);
              }),
              s
            );
          });
        t.exports = a;
      }),
      og = L((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = Array(i);
            ++a < i;

          )
            s[a] = o(n[a], a, n);
          return s;
        }
        m(r, 'arrayMap'), (t.exports = r);
      }),
      aR = L((e, t) => {
        var r = Ln(),
          n = og(),
          o = Pt(),
          a = Es(),
          i = 1 / 0,
          s = r ? r.prototype : void 0,
          l = s ? s.toString : void 0;
        function u(c) {
          if (typeof c == 'string') return c;
          if (o(c)) return n(c, u) + '';
          if (a(c)) return l ? l.call(c) : '';
          var d = c + '';
          return d == '0' && 1 / c == -i ? '-0' : d;
        }
        m(u, 'baseToString'), (t.exports = u);
      }),
      iR = L((e, t) => {
        var r = aR();
        function n(o) {
          return o == null ? '' : r(o);
        }
        m(n, 'toString'), (t.exports = n);
      }),
      ta = L((e, t) => {
        var r = Pt(),
          n = ws(),
          o = oR(),
          a = iR();
        function i(s, l) {
          return r(s) ? s : n(s, l) ? [s] : o(a(s));
        }
        m(i, 'castPath'), (t.exports = i);
      }),
      Mn = L((e, t) => {
        var r = Es(),
          n = 1 / 0;
        function o(a) {
          if (typeof a == 'string' || r(a)) return a;
          var i = a + '';
          return i == '0' && 1 / a == -n ? '-0' : i;
        }
        m(o, 'toKey'), (t.exports = o);
      }),
      Ss = L((e, t) => {
        var r = ta(),
          n = Mn();
        function o(a, i) {
          i = r(i, a);
          for (var s = 0, l = i.length; a != null && s < l; ) a = a[n(i[s++])];
          return s && s == l ? a : void 0;
        }
        m(o, 'baseGet'), (t.exports = o);
      }),
      sR = L((e, t) => {
        var r = Ss();
        function n(o, a, i) {
          var s = o == null ? void 0 : r(o, a);
          return s === void 0 ? i : s;
        }
        m(n, 'get'), (t.exports = n);
      }),
      lR = L((e, t) => {
        function r(n, o) {
          return n != null && o in Object(n);
        }
        m(r, 'baseHasIn'), (t.exports = r);
      }),
      uR = L((e, t) => {
        var r = ta(),
          n = fs(),
          o = Pt(),
          a = ys(),
          i = hs(),
          s = Mn();
        function l(u, c, d) {
          c = r(c, u);
          for (var y = -1, f = c.length, h = !1; ++y < f; ) {
            var g = s(c[y]);
            if (!(h = u != null && d(u, g))) break;
            u = u[g];
          }
          return h || ++y != f
            ? h
            : ((f = u == null ? 0 : u.length),
              !!f && i(f) && a(g, f) && (o(u) || n(u)));
        }
        m(l, 'hasPath'), (t.exports = l);
      }),
      ag = L((e, t) => {
        var r = lR(),
          n = uR();
        function o(a, i) {
          return a != null && n(a, i, r);
        }
        m(o, 'hasIn'), (t.exports = o);
      }),
      cR = L((e, t) => {
        var r = tg(),
          n = sR(),
          o = ag(),
          a = ws(),
          i = rg(),
          s = ng(),
          l = Mn(),
          u = 1,
          c = 2;
        function d(y, f) {
          return a(y) && i(f)
            ? s(l(y), f)
            : function (h) {
                var g = n(h, y);
                return g === void 0 && g === f ? o(h, y) : r(f, g, u | c);
              };
        }
        m(d, 'baseMatchesProperty'), (t.exports = d);
      }),
      ig = L((e, t) => {
        function r(n) {
          return n;
        }
        m(r, 'identity'), (t.exports = r);
      }),
      pR = L((e, t) => {
        function r(n) {
          return function (o) {
            return o?.[n];
          };
        }
        m(r, 'baseProperty'), (t.exports = r);
      }),
      dR = L((e, t) => {
        var r = Ss();
        function n(o) {
          return function (a) {
            return r(a, o);
          };
        }
        m(n, 'basePropertyDeep'), (t.exports = n);
      }),
      fR = L((e, t) => {
        var r = pR(),
          n = dR(),
          o = ws(),
          a = Mn();
        function i(s) {
          return o(s) ? r(a(s)) : n(s);
        }
        m(i, 'property'), (t.exports = i);
      }),
      sg = L((e, t) => {
        var r = tR(),
          n = cR(),
          o = ig(),
          a = Pt(),
          i = fR();
        function s(l) {
          return typeof l == 'function'
            ? l
            : l == null
              ? o
              : typeof l == 'object'
                ? a(l)
                  ? n(l[0], l[1])
                  : r(l)
                : i(l);
        }
        m(s, 'baseIteratee'), (t.exports = s);
      }),
      ra = L((e, t) => {
        var r = $m(),
          n = dk(),
          o = sg();
        function a(i, s) {
          var l = {};
          return (
            (s = o(s, 3)),
            n(i, function (u, c, d) {
              r(l, c, s(u, c, d));
            }),
            l
          );
        }
        m(a, 'mapValues'), (t.exports = a);
      }),
      yR = L((e, t) => {
        var r = $m(),
          n = gs(),
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s, l, u) {
          var c = s[l];
          (!(a.call(s, l) && n(c, u)) || (u === void 0 && !(l in s))) &&
            r(s, l, u);
        }
        m(i, 'assignValue'), (t.exports = i);
      }),
      hR = L((e, t) => {
        var r = yR(),
          n = ta(),
          o = ys(),
          a = qn(),
          i = Mn();
        function s(l, u, c, d) {
          if (!a(l)) return l;
          u = n(u, l);
          for (
            var y = -1, f = u.length, h = f - 1, g = l;
            g != null && ++y < f;

          ) {
            var _ = i(u[y]),
              x = c;
            if (_ === '__proto__' || _ === 'constructor' || _ === 'prototype')
              return l;
            if (y != h) {
              var v = g[_];
              (x = d ? d(v, _, g) : void 0),
                x === void 0 && (x = a(v) ? v : o(u[y + 1]) ? [] : {});
            }
            r(g, _, x), (g = g[_]);
          }
          return l;
        }
        m(s, 'baseSet'), (t.exports = s);
      }),
      lg = L((e, t) => {
        var r = Ss(),
          n = hR(),
          o = ta();
        function a(i, s, l) {
          for (var u = -1, c = s.length, d = {}; ++u < c; ) {
            var y = s[u],
              f = r(i, y);
            l(f, y) && n(d, o(y, i), f);
          }
          return d;
        }
        m(a, 'basePickBy'), (t.exports = a);
      }),
      mR = L((e, t) => {
        var r = lg(),
          n = ag();
        function o(a, i) {
          return r(a, i, function (s, l) {
            return n(a, l);
          });
        }
        m(o, 'basePick'), (t.exports = o);
      }),
      gR = L((e, t) => {
        var r = Ln(),
          n = fs(),
          o = Pt(),
          a = r ? r.isConcatSpreadable : void 0;
        function i(s) {
          return o(s) || n(s) || !!(a && s && s[a]);
        }
        m(i, 'isFlattenable'), (t.exports = i);
      }),
      bR = L((e, t) => {
        var r = xs(),
          n = gR();
        function o(a, i, s, l, u) {
          var c = -1,
            d = a.length;
          for (s || (s = n), u || (u = []); ++c < d; ) {
            var y = a[c];
            i > 0 && s(y)
              ? i > 1
                ? o(y, i - 1, s, l, u)
                : r(u, y)
              : l || (u[u.length] = y);
          }
          return u;
        }
        m(o, 'baseFlatten'), (t.exports = o);
      }),
      vR = L((e, t) => {
        var r = bR();
        function n(o) {
          var a = o == null ? 0 : o.length;
          return a ? r(o, 1) : [];
        }
        m(n, 'flatten'), (t.exports = n);
      }),
      xR = L((e, t) => {
        function r(n, o, a) {
          switch (a.length) {
            case 0:
              return n.call(o);
            case 1:
              return n.call(o, a[0]);
            case 2:
              return n.call(o, a[0], a[1]);
            case 3:
              return n.call(o, a[0], a[1], a[2]);
          }
          return n.apply(o, a);
        }
        m(r, 'apply'), (t.exports = r);
      }),
      ER = L((e, t) => {
        var r = xR(),
          n = Math.max;
        function o(a, i, s) {
          return (
            (i = n(i === void 0 ? a.length - 1 : i, 0)),
            function () {
              for (
                var l = arguments, u = -1, c = n(l.length - i, 0), d = Array(c);
                ++u < c;

              )
                d[u] = l[i + u];
              u = -1;
              for (var y = Array(i + 1); ++u < i; ) y[u] = l[u];
              return (y[i] = s(d)), r(a, this, y);
            }
          );
        }
        m(o, 'overRest'), (t.exports = o);
      }),
      wR = L((e, t) => {
        function r(n) {
          return function () {
            return n;
          };
        }
        m(r, 'constant'), (t.exports = r);
      }),
      SR = L((e, t) => {
        var r = wR(),
          n = Jm(),
          o = ig(),
          a = n
            ? function (i, s) {
                return n(i, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: r(s),
                  writable: !0,
                });
              }
            : o;
        t.exports = a;
      }),
      AR = L((e, t) => {
        var r = 800,
          n = 16,
          o = Date.now;
        function a(i) {
          var s = 0,
            l = 0;
          return function () {
            var u = o(),
              c = n - (u - l);
            if (((l = u), c > 0)) {
              if (++s >= r) return arguments[0];
            } else s = 0;
            return i.apply(void 0, arguments);
          };
        }
        m(a, 'shortOut'), (t.exports = a);
      }),
      TR = L((e, t) => {
        var r = SR(),
          n = AR(),
          o = n(r);
        t.exports = o;
      }),
      CR = L((e, t) => {
        var r = vR(),
          n = ER(),
          o = TR();
        function a(i) {
          return o(n(i, void 0, r), i + '');
        }
        m(a, 'flatRest'), (t.exports = a);
      }),
      _R = L((e, t) => {
        var r = mR(),
          n = CR(),
          o = n(function (a, i) {
            return a == null ? {} : r(a, i);
          });
        t.exports = o;
      }),
      ug = L((e, t) => {
        var r = Wm(),
          n = r(Object.getPrototypeOf, Object);
        t.exports = n;
      }),
      As = L((e, t) => {
        var r = Gr(),
          n = ug(),
          o = Wr(),
          a = '[object Object]',
          i = Function.prototype,
          s = Object.prototype,
          l = i.toString,
          u = s.hasOwnProperty,
          c = l.call(Object);
        function d(y) {
          if (!o(y) || r(y) != a) return !1;
          var f = n(y);
          if (f === null) return !0;
          var h = u.call(f, 'constructor') && f.constructor;
          return typeof h == 'function' && h instanceof h && l.call(h) == c;
        }
        m(d, 'isPlainObject'), (t.exports = d);
      }),
      OR = L((e, t) => {
        var r = xs(),
          n = ug(),
          o = eg(),
          a = Zm(),
          i = Object.getOwnPropertySymbols,
          s = i
            ? function (l) {
                for (var u = []; l; ) r(u, o(l)), (l = n(l));
                return u;
              }
            : a;
        t.exports = s;
      }),
      IR = L((e, t) => {
        function r(n) {
          var o = [];
          if (n != null) for (var a in Object(n)) o.push(a);
          return o;
        }
        m(r, 'nativeKeysIn'), (t.exports = r);
      }),
      PR = L((e, t) => {
        var r = qn(),
          n = Gm(),
          o = IR(),
          a = Object.prototype,
          i = a.hasOwnProperty;
        function s(l) {
          if (!r(l)) return o(l);
          var u = n(l),
            c = [];
          for (var d in l)
            (d == 'constructor' && (u || !i.call(l, d))) || c.push(d);
          return c;
        }
        m(s, 'baseKeysIn'), (t.exports = s);
      }),
      kR = L((e, t) => {
        var r = Hm(),
          n = PR(),
          o = Km();
        function a(i) {
          return o(i) ? r(i, !0) : n(i);
        }
        m(a, 'keysIn'), (t.exports = a);
      }),
      RR = L((e, t) => {
        var r = Qm(),
          n = OR(),
          o = kR();
        function a(i) {
          return r(i, o, n);
        }
        m(a, 'getAllKeysIn'), (t.exports = a);
      }),
      DR = L((e, t) => {
        var r = og(),
          n = sg(),
          o = lg(),
          a = RR();
        function i(s, l) {
          if (s == null) return {};
          var u = r(a(s), function (c) {
            return [c];
          });
          return (
            (l = n(l)),
            o(s, u, function (c, d) {
              return l(c, d[0]);
            })
          );
        }
        m(i, 'pickBy'), (t.exports = i);
      }),
      FR = L((e, t) => {
        'use strict';
        t.exports = Error;
      }),
      jR = L((e, t) => {
        'use strict';
        t.exports = EvalError;
      }),
      NR = L((e, t) => {
        'use strict';
        t.exports = RangeError;
      }),
      BR = L((e, t) => {
        'use strict';
        t.exports = ReferenceError;
      }),
      cg = L((e, t) => {
        'use strict';
        t.exports = SyntaxError;
      }),
      Un = L((e, t) => {
        'use strict';
        t.exports = TypeError;
      }),
      LR = L((e, t) => {
        'use strict';
        t.exports = URIError;
      }),
      qR = L((e, t) => {
        'use strict';
        t.exports = m(function () {
          if (
            typeof Symbol != 'function' ||
            typeof Object.getOwnPropertySymbols != 'function'
          )
            return !1;
          if (typeof Symbol.iterator == 'symbol') return !0;
          var r = {},
            n = Symbol('test'),
            o = Object(n);
          if (
            typeof n == 'string' ||
            Object.prototype.toString.call(n) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1;
          var a = 42;
          r[n] = a;
          for (n in r) return !1;
          if (
            (typeof Object.keys == 'function' && Object.keys(r).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(r).length !== 0)
          )
            return !1;
          var i = Object.getOwnPropertySymbols(r);
          if (
            i.length !== 1 ||
            i[0] !== n ||
            !Object.prototype.propertyIsEnumerable.call(r, n)
          )
            return !1;
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var s = Object.getOwnPropertyDescriptor(r, n);
            if (s.value !== a || s.enumerable !== !0) return !1;
          }
          return !0;
        }, 'hasSymbols');
      }),
      MR = L((e, t) => {
        'use strict';
        var r = typeof Symbol < 'u' && Symbol,
          n = qR();
        t.exports = m(function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n();
        }, 'hasNativeSymbols');
      }),
      UR = L((e, t) => {
        'use strict';
        var r = { __proto__: null, foo: {} },
          n = Object;
        t.exports = m(function () {
          return { __proto__: r }.foo === r.foo && !(r instanceof n);
        }, 'hasProto');
      }),
      JR = L((e, t) => {
        'use strict';
        var r = 'Function.prototype.bind called on incompatible ',
          n = Object.prototype.toString,
          o = Math.max,
          a = '[object Function]',
          i = m(function (u, c) {
            for (var d = [], y = 0; y < u.length; y += 1) d[y] = u[y];
            for (var f = 0; f < c.length; f += 1) d[f + u.length] = c[f];
            return d;
          }, 'concatty'),
          s = m(function (u, c) {
            for (var d = [], y = c || 0, f = 0; y < u.length; y += 1, f += 1)
              d[f] = u[y];
            return d;
          }, 'slicy'),
          l = m(function (u, c) {
            for (var d = '', y = 0; y < u.length; y += 1)
              (d += u[y]), y + 1 < u.length && (d += c);
            return d;
          }, 'joiny');
        t.exports = m(function (u) {
          var c = this;
          if (typeof c != 'function' || n.apply(c) !== a)
            throw new TypeError(r + c);
          for (
            var d = s(arguments, 1),
              y,
              f = m(function () {
                if (this instanceof y) {
                  var v = c.apply(this, i(d, arguments));
                  return Object(v) === v ? v : this;
                }
                return c.apply(u, i(d, arguments));
              }, 'binder'),
              h = o(0, c.length - d.length),
              g = [],
              _ = 0;
            _ < h;
            _++
          )
            g[_] = '$' + _;
          if (
            ((y = Function(
              'binder',
              'return function (' +
                l(g, ',') +
                '){ return binder.apply(this,arguments); }'
            )(f)),
            c.prototype)
          ) {
            var x = m(function () {}, 'Empty');
            (x.prototype = c.prototype),
              (y.prototype = new x()),
              (x.prototype = null);
          }
          return y;
        }, 'bind');
      }),
      Ts = L((e, t) => {
        'use strict';
        var r = JR();
        t.exports = Function.prototype.bind || r;
      }),
      $R = L((e, t) => {
        'use strict';
        var r = Function.prototype.call,
          n = Object.prototype.hasOwnProperty,
          o = Ts();
        t.exports = o.call(r, n);
      }),
      Kr = L((e, t) => {
        'use strict';
        var r,
          n = FR(),
          o = jR(),
          a = NR(),
          i = BR(),
          s = cg(),
          l = Un(),
          u = LR(),
          c = Function,
          d = m(function (ne) {
            try {
              return c('"use strict"; return (' + ne + ').constructor;')();
            } catch {}
          }, 'getEvalledConstructor'),
          y = Object.getOwnPropertyDescriptor;
        if (y)
          try {
            y({}, '');
          } catch {
            y = null;
          }
        var f = m(function () {
            throw new l();
          }, 'throwTypeError'),
          h = y
            ? (function () {
                try {
                  return arguments.callee, f;
                } catch {
                  try {
                    return y(arguments, 'callee').get;
                  } catch {
                    return f;
                  }
                }
              })()
            : f,
          g = MR()(),
          _ = UR()(),
          x =
            Object.getPrototypeOf ||
            (_
              ? function (ne) {
                  return ne.__proto__;
                }
              : null),
          v = {},
          O = typeof Uint8Array > 'u' || !x ? r : x(Uint8Array),
          C = {
            __proto__: null,
            '%AggregateError%':
              typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': g && x ? x([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': v,
            '%AsyncGenerator%': v,
            '%AsyncGeneratorFunction%': v,
            '%AsyncIteratorPrototype%': v,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%BigInt64Array%': typeof BigInt64Array > 'u' ? r : BigInt64Array,
            '%BigUint64Array%':
              typeof BigUint64Array > 'u' ? r : BigUint64Array,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': n,
            '%eval%': eval,
            '%EvalError%': o,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%':
              typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': c,
            '%GeneratorFunction%': v,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': g && x ? x(x([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%':
              typeof Map > 'u' || !g || !x
                ? r
                : x(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': a,
            '%ReferenceError%': i,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%':
              typeof Set > 'u' || !g || !x
                ? r
                : x(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%':
              typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': g && x ? x(''[Symbol.iterator]()) : r,
            '%Symbol%': g ? Symbol : r,
            '%SyntaxError%': s,
            '%ThrowTypeError%': h,
            '%TypedArray%': O,
            '%TypeError%': l,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%':
              typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': u,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          };
        if (x)
          try {
            null.error;
          } catch (ne) {
            (I = x(x(ne))), (C['%Error.prototype%'] = I);
          }
        var I,
          P = m(function ne(re) {
            var Z;
            if (re === '%AsyncFunction%') Z = d('async function () {}');
            else if (re === '%GeneratorFunction%') Z = d('function* () {}');
            else if (re === '%AsyncGeneratorFunction%')
              Z = d('async function* () {}');
            else if (re === '%AsyncGenerator%') {
              var ae = ne('%AsyncGeneratorFunction%');
              ae && (Z = ae.prototype);
            } else if (re === '%AsyncIteratorPrototype%') {
              var le = ne('%AsyncGenerator%');
              le && x && (Z = x(le.prototype));
            }
            return (C[re] = Z), Z;
          }, 'doEval'),
          F = {
            __proto__: null,
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          D = Ts(),
          U = $R(),
          G = D.call(Function.call, Array.prototype.concat),
          X = D.call(Function.apply, Array.prototype.splice),
          Q = D.call(Function.call, String.prototype.replace),
          V = D.call(Function.call, String.prototype.slice),
          R = D.call(Function.call, RegExp.prototype.exec),
          q =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          M = /\\(\\)?/g,
          Y = m(function (ne) {
            var re = V(ne, 0, 1),
              Z = V(ne, -1);
            if (re === '%' && Z !== '%')
              throw new s('invalid intrinsic syntax, expected closing `%`');
            if (Z === '%' && re !== '%')
              throw new s('invalid intrinsic syntax, expected opening `%`');
            var ae = [];
            return (
              Q(ne, q, function (le, Ee, pe, we) {
                ae[ae.length] = pe ? Q(we, M, '$1') : Ee || le;
              }),
              ae
            );
          }, 'stringToPath'),
          te = m(function (ne, re) {
            var Z = ne,
              ae;
            if ((U(F, Z) && ((ae = F[Z]), (Z = '%' + ae[0] + '%')), U(C, Z))) {
              var le = C[Z];
              if ((le === v && (le = P(Z)), typeof le > 'u' && !re))
                throw new l(
                  'intrinsic ' +
                    ne +
                    ' exists, but is not available. Please file an issue!'
                );
              return { alias: ae, name: Z, value: le };
            }
            throw new s('intrinsic ' + ne + ' does not exist!');
          }, 'getBaseIntrinsic');
        t.exports = m(function (ne, re) {
          if (typeof ne != 'string' || ne.length === 0)
            throw new l('intrinsic name must be a non-empty string');
          if (arguments.length > 1 && typeof re != 'boolean')
            throw new l('"allowMissing" argument must be a boolean');
          if (R(/^%?[^%]*%?$/, ne) === null)
            throw new s(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
            );
          var Z = Y(ne),
            ae = Z.length > 0 ? Z[0] : '',
            le = te('%' + ae + '%', re),
            Ee = le.name,
            pe = le.value,
            we = !1,
            Le = le.alias;
          Le && ((ae = Le[0]), X(Z, G([0, 1], Le)));
          for (var Ve = 1, Ye = !0; Ve < Z.length; Ve += 1) {
            var fe = Z[Ve],
              Ie = V(fe, 0, 1),
              ye = V(fe, -1);
            if (
              (Ie === '"' ||
                Ie === "'" ||
                Ie === '`' ||
                ye === '"' ||
                ye === "'" ||
                ye === '`') &&
              Ie !== ye
            )
              throw new s(
                'property names with quotes must have matching quotes'
              );
            if (
              ((fe === 'constructor' || !Ye) && (we = !0),
              (ae += '.' + fe),
              (Ee = '%' + ae + '%'),
              U(C, Ee))
            )
              pe = C[Ee];
            else if (pe != null) {
              if (!(fe in pe)) {
                if (!re)
                  throw new l(
                    'base intrinsic for ' +
                      ne +
                      ' exists, but the property is not available.'
                  );
                return;
              }
              if (y && Ve + 1 >= Z.length) {
                var Re = y(pe, fe);
                (Ye = !!Re),
                  Ye && 'get' in Re && !('originalValue' in Re.get)
                    ? (pe = Re.get)
                    : (pe = pe[fe]);
              } else (Ye = U(pe, fe)), (pe = pe[fe]);
              Ye && !we && (C[Ee] = pe);
            }
          }
          return pe;
        }, 'GetIntrinsic');
      }),
      Cs = L((e, t) => {
        'use strict';
        var r = Kr(),
          n = r('%Object.defineProperty%', !0) || !1;
        if (n)
          try {
            n({}, 'a', { value: 1 });
          } catch {
            n = !1;
          }
        t.exports = n;
      }),
      pg = L((e, t) => {
        'use strict';
        var r = Kr(),
          n = r('%Object.getOwnPropertyDescriptor%', !0);
        if (n)
          try {
            n([], 'length');
          } catch {
            n = null;
          }
        t.exports = n;
      }),
      zR = L((e, t) => {
        'use strict';
        var r = Cs(),
          n = cg(),
          o = Un(),
          a = pg();
        t.exports = m(function (i, s, l) {
          if (!i || (typeof i != 'object' && typeof i != 'function'))
            throw new o('`obj` must be an object or a function`');
          if (typeof s != 'string' && typeof s != 'symbol')
            throw new o('`property` must be a string or a symbol`');
          if (
            arguments.length > 3 &&
            typeof arguments[3] != 'boolean' &&
            arguments[3] !== null
          )
            throw new o(
              '`nonEnumerable`, if provided, must be a boolean or null'
            );
          if (
            arguments.length > 4 &&
            typeof arguments[4] != 'boolean' &&
            arguments[4] !== null
          )
            throw new o(
              '`nonWritable`, if provided, must be a boolean or null'
            );
          if (
            arguments.length > 5 &&
            typeof arguments[5] != 'boolean' &&
            arguments[5] !== null
          )
            throw new o(
              '`nonConfigurable`, if provided, must be a boolean or null'
            );
          if (arguments.length > 6 && typeof arguments[6] != 'boolean')
            throw new o('`loose`, if provided, must be a boolean');
          var u = arguments.length > 3 ? arguments[3] : null,
            c = arguments.length > 4 ? arguments[4] : null,
            d = arguments.length > 5 ? arguments[5] : null,
            y = arguments.length > 6 ? arguments[6] : !1,
            f = !!a && a(i, s);
          if (r)
            r(i, s, {
              configurable: d === null && f ? f.configurable : !d,
              enumerable: u === null && f ? f.enumerable : !u,
              value: l,
              writable: c === null && f ? f.writable : !c,
            });
          else if (y || (!u && !c && !d)) i[s] = l;
          else
            throw new n(
              'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
            );
        }, 'defineDataProperty');
      }),
      VR = L((e, t) => {
        'use strict';
        var r = Cs(),
          n = m(function () {
            return !!r;
          }, 'hasPropertyDescriptors');
        (n.hasArrayLengthDefineBug = m(function () {
          if (!r) return null;
          try {
            return r([], 'length', { value: 1 }).length !== 1;
          } catch {
            return !0;
          }
        }, 'hasArrayLengthDefineBug')),
          (t.exports = n);
      }),
      HR = L((e, t) => {
        'use strict';
        var r = Kr(),
          n = zR(),
          o = VR()(),
          a = pg(),
          i = Un(),
          s = r('%Math.floor%');
        t.exports = m(function (l, u) {
          if (typeof l != 'function') throw new i('`fn` is not a function');
          if (typeof u != 'number' || u < 0 || u > 4294967295 || s(u) !== u)
            throw new i('`length` must be a positive 32-bit integer');
          var c = arguments.length > 2 && !!arguments[2],
            d = !0,
            y = !0;
          if ('length' in l && a) {
            var f = a(l, 'length');
            f && !f.configurable && (d = !1), f && !f.writable && (y = !1);
          }
          return (
            (d || y || !c) &&
              (o ? n(l, 'length', u, !0, !0) : n(l, 'length', u)),
            l
          );
        }, 'setFunctionLength');
      }),
      GR = L((e, t) => {
        'use strict';
        var r = Ts(),
          n = Kr(),
          o = HR(),
          a = Un(),
          i = n('%Function.prototype.apply%'),
          s = n('%Function.prototype.call%'),
          l = n('%Reflect.apply%', !0) || r.call(s, i),
          u = Cs(),
          c = n('%Math.max%');
        t.exports = m(function (y) {
          if (typeof y != 'function') throw new a('a function is required');
          var f = l(r, s, arguments);
          return o(f, 1 + c(0, y.length - (arguments.length - 1)), !0);
        }, 'callBind');
        var d = m(function () {
          return l(r, i, arguments);
        }, 'applyBind');
        u ? u(t.exports, 'apply', { value: d }) : (t.exports.apply = d);
      }),
      WR = L((e, t) => {
        'use strict';
        var r = Kr(),
          n = GR(),
          o = n(r('String.prototype.indexOf'));
        t.exports = m(function (a, i) {
          var s = r(a, !!i);
          return typeof s == 'function' && o(a, '.prototype.') > -1 ? n(s) : s;
        }, 'callBoundIntrinsic');
      }),
      KR = L(() => {}),
      YR = L((e, t) => {
        var r = typeof Map == 'function' && Map.prototype,
          n =
            Object.getOwnPropertyDescriptor && r
              ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
              : null,
          o = r && n && typeof n.get == 'function' ? n.get : null,
          a = r && Map.prototype.forEach,
          i = typeof Set == 'function' && Set.prototype,
          s =
            Object.getOwnPropertyDescriptor && i
              ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
              : null,
          l = i && s && typeof s.get == 'function' ? s.get : null,
          u = i && Set.prototype.forEach,
          c = typeof WeakMap == 'function' && WeakMap.prototype,
          d = c ? WeakMap.prototype.has : null,
          y = typeof WeakSet == 'function' && WeakSet.prototype,
          f = y ? WeakSet.prototype.has : null,
          h = typeof WeakRef == 'function' && WeakRef.prototype,
          g = h ? WeakRef.prototype.deref : null,
          _ = Boolean.prototype.valueOf,
          x = Object.prototype.toString,
          v = Function.prototype.toString,
          O = String.prototype.match,
          C = String.prototype.slice,
          I = String.prototype.replace,
          P = String.prototype.toUpperCase,
          F = String.prototype.toLowerCase,
          D = RegExp.prototype.test,
          U = Array.prototype.concat,
          G = Array.prototype.join,
          X = Array.prototype.slice,
          Q = Math.floor,
          V = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
          R = Object.getOwnPropertySymbols,
          q =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? Symbol.prototype.toString
              : null,
          M = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
          Y =
            typeof Symbol == 'function' &&
            Symbol.toStringTag &&
            (typeof Symbol.toStringTag === M || !0)
              ? Symbol.toStringTag
              : null,
          te = Object.prototype.propertyIsEnumerable,
          ne =
            (typeof Reflect == 'function'
              ? Reflect.getPrototypeOf
              : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function ($) {
                  return $.__proto__;
                }
              : null);
        function re($, H) {
          if (
            $ === 1 / 0 ||
            $ === -1 / 0 ||
            $ !== $ ||
            ($ && $ > -1e3 && $ < 1e3) ||
            D.call(/e/, H)
          )
            return H;
          var ue = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if (typeof $ == 'number') {
            var de = $ < 0 ? -Q(-$) : Q($);
            if (de !== $) {
              var Ae = String(de),
                se = C.call(H, Ae.length + 1);
              return (
                I.call(Ae, ue, '$&_') +
                '.' +
                I.call(I.call(se, /([0-9]{3})/g, '$&_'), /_$/, '')
              );
            }
          }
          return I.call(H, ue, '$&_');
        }
        m(re, 'addNumericSeparator');
        var Z = KR(),
          ae = Z.custom,
          le = Re(ae) ? ae : null;
        t.exports = m(function $(H, ue, de, Ae) {
          var se = ue || {};
          if (
            ce(se, 'quoteStyle') &&
            se.quoteStyle !== 'single' &&
            se.quoteStyle !== 'double'
          )
            throw new TypeError(
              'option "quoteStyle" must be "single" or "double"'
            );
          if (
            ce(se, 'maxStringLength') &&
            (typeof se.maxStringLength == 'number'
              ? se.maxStringLength < 0 && se.maxStringLength !== 1 / 0
              : se.maxStringLength !== null)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
            );
          var ot = ce(se, 'customInspect') ? se.customInspect : !0;
          if (typeof ot != 'boolean' && ot !== 'symbol')
            throw new TypeError(
              'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
            );
          if (
            ce(se, 'indent') &&
            se.indent !== null &&
            se.indent !== '	' &&
            !(parseInt(se.indent, 10) === se.indent && se.indent > 0)
          )
            throw new TypeError(
              'option "indent" must be "\\t", an integer > 0, or `null`'
            );
          if (
            ce(se, 'numericSeparator') &&
            typeof se.numericSeparator != 'boolean'
          )
            throw new TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`'
            );
          var yt = se.numericSeparator;
          if (typeof H > 'u') return 'undefined';
          if (H === null) return 'null';
          if (typeof H == 'boolean') return H ? 'true' : 'false';
          if (typeof H == 'string') return xr(H, se);
          if (typeof H == 'number') {
            if (H === 0) return 1 / 0 / H > 0 ? '0' : '-0';
            var ke = String(H);
            return yt ? re(H, ke) : ke;
          }
          if (typeof H == 'bigint') {
            var xe = String(H) + 'n';
            return yt ? re(H, xe) : xe;
          }
          var Zt = typeof se.depth > 'u' ? 5 : se.depth;
          if (
            (typeof de > 'u' && (de = 0),
            de >= Zt && Zt > 0 && typeof H == 'object')
          )
            return we(H) ? '[Array]' : '[Object]';
          var at = no(se, de);
          if (typeof Ae > 'u') Ae = [];
          else if (ft(Ae, H) >= 0) return '[Circular]';
          function Ce(p, w, k) {
            if ((w && ((Ae = X.call(Ae)), Ae.push(w)), k)) {
              var z = { depth: se.depth };
              return (
                ce(se, 'quoteStyle') && (z.quoteStyle = se.quoteStyle),
                $(p, z, de + 1, Ae)
              );
            }
            return $(p, se, de + 1, Ae);
          }
          if ((m(Ce, 'inspect'), typeof H == 'function' && !Ve(H))) {
            var Sr = Ft(H),
              oo = Qt(H, Ce);
            return (
              '[Function' +
              (Sr ? ': ' + Sr : ' (anonymous)') +
              ']' +
              (oo.length > 0 ? ' { ' + G.call(oo, ', ') + ' }' : '')
            );
          }
          if (Re(H)) {
            var cn = M
              ? I.call(String(H), /^(Symbol\(.*\))_[^)]*$/, '$1')
              : q.call(H);
            return typeof H == 'object' && !M ? St(cn) : cn;
          }
          if (Xt(H)) {
            for (
              var er = '<' + F.call(String(H.nodeName)),
                nt = H.attributes || [],
                Ar = 0;
              Ar < nt.length;
              Ar++
            )
              er +=
                ' ' + nt[Ar].name + '=' + Ee(pe(nt[Ar].value), 'double', se);
            return (
              (er += '>'),
              H.childNodes && H.childNodes.length && (er += '...'),
              (er += '</' + F.call(String(H.nodeName)) + '>'),
              er
            );
          }
          if (we(H)) {
            if (H.length === 0) return '[]';
            var Tr = Qt(H, Ce);
            return at && !un(Tr)
              ? '[' + wr(Tr, at) + ']'
              : '[ ' + G.call(Tr, ', ') + ' ]';
          }
          if (Ye(H)) {
            var it = Qt(H, Ce);
            return !('cause' in Error.prototype) &&
              'cause' in H &&
              !te.call(H, 'cause')
              ? '{ [' +
                  String(H) +
                  '] ' +
                  G.call(U.call('[cause]: ' + Ce(H.cause), it), ', ') +
                  ' }'
              : it.length === 0
                ? '[' + String(H) + ']'
                : '{ [' + String(H) + '] ' + G.call(it, ', ') + ' }';
          }
          if (typeof H == 'object' && ot) {
            if (le && typeof H[le] == 'function' && Z)
              return Z(H, { depth: Zt - de });
            if (ot !== 'symbol' && typeof H.inspect == 'function')
              return H.inspect();
          }
          if (wt(H)) {
            var pn = [];
            return (
              a &&
                a.call(H, function (p, w) {
                  pn.push(Ce(w, H, !0) + ' => ' + Ce(p, H));
                }),
              ln('Map', o.call(H), pn, at)
            );
          }
          if (Kt(H)) {
            var tr = [];
            return (
              u &&
                u.call(H, function (p) {
                  tr.push(Ce(p, H));
                }),
              ln('Set', l.call(H), tr, at)
            );
          }
          if (an(H)) return Er('WeakMap');
          if (Yt(H)) return Er('WeakSet');
          if (sn(H)) return Er('WeakRef');
          if (Ie(H)) return St(Ce(Number(H)));
          if (Ze(H)) return St(Ce(V.call(H)));
          if (ye(H)) return St(_.call(H));
          if (fe(H)) return St(Ce(String(H)));
          if (typeof window < 'u' && H === window) return '{ [object Window] }';
          if (H === window) return '{ [object globalThis] }';
          if (!Le(H) && !Ve(H)) {
            var dn = Qt(H, Ce),
              fn = ne
                ? ne(H) === Object.prototype
                : H instanceof Object || H.constructor === Object,
              Cr = H instanceof Object ? '' : 'null prototype',
              yn =
                !fn && Y && Object(H) === H && Y in H
                  ? C.call(Se(H), 8, -1)
                  : Cr
                    ? 'Object'
                    : '',
              _r =
                fn || typeof H.constructor != 'function'
                  ? ''
                  : H.constructor.name
                    ? H.constructor.name + ' '
                    : '',
              Or =
                _r +
                (yn || Cr
                  ? '[' + G.call(U.call([], yn || [], Cr || []), ': ') + '] '
                  : '');
            return dn.length === 0
              ? Or + '{}'
              : at
                ? Or + '{' + wr(dn, at) + '}'
                : Or + '{ ' + G.call(dn, ', ') + ' }';
          }
          return String(H);
        }, 'inspect_');
        function Ee($, H, ue) {
          var de = (ue.quoteStyle || H) === 'double' ? '"' : "'";
          return de + $ + de;
        }
        m(Ee, 'wrapQuotes');
        function pe($) {
          return I.call(String($), /"/g, '&quot;');
        }
        m(pe, 'quote');
        function we($) {
          return (
            Se($) === '[object Array]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(we, 'isArray');
        function Le($) {
          return (
            Se($) === '[object Date]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(Le, 'isDate');
        function Ve($) {
          return (
            Se($) === '[object RegExp]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(Ve, 'isRegExp');
        function Ye($) {
          return (
            Se($) === '[object Error]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(Ye, 'isError');
        function fe($) {
          return (
            Se($) === '[object String]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(fe, 'isString');
        function Ie($) {
          return (
            Se($) === '[object Number]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(Ie, 'isNumber');
        function ye($) {
          return (
            Se($) === '[object Boolean]' &&
            (!Y || !(typeof $ == 'object' && Y in $))
          );
        }
        m(ye, 'isBoolean');
        function Re($) {
          if (M) return $ && typeof $ == 'object' && $ instanceof Symbol;
          if (typeof $ == 'symbol') return !0;
          if (!$ || typeof $ != 'object' || !q) return !1;
          try {
            return q.call($), !0;
          } catch {}
          return !1;
        }
        m(Re, 'isSymbol');
        function Ze($) {
          if (!$ || typeof $ != 'object' || !V) return !1;
          try {
            return V.call($), !0;
          } catch {}
          return !1;
        }
        m(Ze, 'isBigInt');
        var qe =
          Object.prototype.hasOwnProperty ||
          function ($) {
            return $ in this;
          };
        function ce($, H) {
          return qe.call($, H);
        }
        m(ce, 'has');
        function Se($) {
          return x.call($);
        }
        m(Se, 'toStr');
        function Ft($) {
          if ($.name) return $.name;
          var H = O.call(v.call($), /^function\s*([\w$]+)/);
          return H ? H[1] : null;
        }
        m(Ft, 'nameOf');
        function ft($, H) {
          if ($.indexOf) return $.indexOf(H);
          for (var ue = 0, de = $.length; ue < de; ue++)
            if ($[ue] === H) return ue;
          return -1;
        }
        m(ft, 'indexOf');
        function wt($) {
          if (!o || !$ || typeof $ != 'object') return !1;
          try {
            o.call($);
            try {
              l.call($);
            } catch {
              return !0;
            }
            return $ instanceof Map;
          } catch {}
          return !1;
        }
        m(wt, 'isMap');
        function an($) {
          if (!d || !$ || typeof $ != 'object') return !1;
          try {
            d.call($, d);
            try {
              f.call($, f);
            } catch {
              return !0;
            }
            return $ instanceof WeakMap;
          } catch {}
          return !1;
        }
        m(an, 'isWeakMap');
        function sn($) {
          if (!g || !$ || typeof $ != 'object') return !1;
          try {
            return g.call($), !0;
          } catch {}
          return !1;
        }
        m(sn, 'isWeakRef');
        function Kt($) {
          if (!l || !$ || typeof $ != 'object') return !1;
          try {
            l.call($);
            try {
              o.call($);
            } catch {
              return !0;
            }
            return $ instanceof Set;
          } catch {}
          return !1;
        }
        m(Kt, 'isSet');
        function Yt($) {
          if (!f || !$ || typeof $ != 'object') return !1;
          try {
            f.call($, f);
            try {
              d.call($, d);
            } catch {
              return !0;
            }
            return $ instanceof WeakSet;
          } catch {}
          return !1;
        }
        m(Yt, 'isWeakSet');
        function Xt($) {
          return !$ || typeof $ != 'object'
            ? !1
            : typeof HTMLElement < 'u' && $ instanceof HTMLElement
              ? !0
              : typeof $.nodeName == 'string' &&
                typeof $.getAttribute == 'function';
        }
        m(Xt, 'isElement');
        function xr($, H) {
          if ($.length > H.maxStringLength) {
            var ue = $.length - H.maxStringLength,
              de = '... ' + ue + ' more character' + (ue > 1 ? 's' : '');
            return xr(C.call($, 0, H.maxStringLength), H) + de;
          }
          var Ae = I.call(I.call($, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, ro);
          return Ee(Ae, 'single', H);
        }
        m(xr, 'inspectString');
        function ro($) {
          var H = $.charCodeAt(0),
            ue = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[H];
          return ue
            ? '\\' + ue
            : '\\x' + (H < 16 ? '0' : '') + P.call(H.toString(16));
        }
        m(ro, 'lowbyte');
        function St($) {
          return 'Object(' + $ + ')';
        }
        m(St, 'markBoxed');
        function Er($) {
          return $ + ' { ? }';
        }
        m(Er, 'weakCollectionOf');
        function ln($, H, ue, de) {
          var Ae = de ? wr(ue, de) : G.call(ue, ', ');
          return $ + ' (' + H + ') {' + Ae + '}';
        }
        m(ln, 'collectionOf');
        function un($) {
          for (var H = 0; H < $.length; H++)
            if (
              ft(
                $[H],
                `
`
              ) >= 0
            )
              return !1;
          return !0;
        }
        m(un, 'singleLineValues');
        function no($, H) {
          var ue;
          if ($.indent === '	') ue = '	';
          else if (typeof $.indent == 'number' && $.indent > 0)
            ue = G.call(Array($.indent + 1), ' ');
          else return null;
          return { base: ue, prev: G.call(Array(H + 1), ue) };
        }
        m(no, 'getIndent');
        function wr($, H) {
          if ($.length === 0) return '';
          var ue =
            `
` +
            H.prev +
            H.base;
          return (
            ue +
            G.call($, ',' + ue) +
            `
` +
            H.prev
          );
        }
        m(wr, 'indentedJoin');
        function Qt($, H) {
          var ue = we($),
            de = [];
          if (ue) {
            de.length = $.length;
            for (var Ae = 0; Ae < $.length; Ae++)
              de[Ae] = ce($, Ae) ? H($[Ae], $) : '';
          }
          var se = typeof R == 'function' ? R($) : [],
            ot;
          if (M) {
            ot = {};
            for (var yt = 0; yt < se.length; yt++) ot['$' + se[yt]] = se[yt];
          }
          for (var ke in $)
            ce($, ke) &&
              ((ue && String(Number(ke)) === ke && ke < $.length) ||
                (M && ot['$' + ke] instanceof Symbol) ||
                (D.call(/[^\w$]/, ke)
                  ? de.push(H(ke, $) + ': ' + H($[ke], $))
                  : de.push(ke + ': ' + H($[ke], $))));
          if (typeof R == 'function')
            for (var xe = 0; xe < se.length; xe++)
              te.call($, se[xe]) &&
                de.push('[' + H(se[xe]) + ']: ' + H($[se[xe]], $));
          return de;
        }
        m(Qt, 'arrObjKeys');
      }),
      XR = L((e, t) => {
        'use strict';
        var r = Kr(),
          n = WR(),
          o = YR(),
          a = Un(),
          i = r('%WeakMap%', !0),
          s = r('%Map%', !0),
          l = n('WeakMap.prototype.get', !0),
          u = n('WeakMap.prototype.set', !0),
          c = n('WeakMap.prototype.has', !0),
          d = n('Map.prototype.get', !0),
          y = n('Map.prototype.set', !0),
          f = n('Map.prototype.has', !0),
          h = m(function (v, O) {
            for (var C = v, I; (I = C.next) !== null; C = I)
              if (I.key === O)
                return (C.next = I.next), (I.next = v.next), (v.next = I), I;
          }, 'listGetNode'),
          g = m(function (v, O) {
            var C = h(v, O);
            return C && C.value;
          }, 'listGet'),
          _ = m(function (v, O, C) {
            var I = h(v, O);
            I ? (I.value = C) : (v.next = { key: O, next: v.next, value: C });
          }, 'listSet'),
          x = m(function (v, O) {
            return !!h(v, O);
          }, 'listHas');
        t.exports = m(function () {
          var v,
            O,
            C,
            I = {
              assert: m(function (P) {
                if (!I.has(P))
                  throw new a('Side channel does not contain ' + o(P));
              }, 'assert'),
              get: m(function (P) {
                if (
                  i &&
                  P &&
                  (typeof P == 'object' || typeof P == 'function')
                ) {
                  if (v) return l(v, P);
                } else if (s) {
                  if (O) return d(O, P);
                } else if (C) return g(C, P);
              }, 'get'),
              has: m(function (P) {
                if (
                  i &&
                  P &&
                  (typeof P == 'object' || typeof P == 'function')
                ) {
                  if (v) return c(v, P);
                } else if (s) {
                  if (O) return f(O, P);
                } else if (C) return x(C, P);
                return !1;
              }, 'has'),
              set: m(function (P, F) {
                i && P && (typeof P == 'object' || typeof P == 'function')
                  ? (v || (v = new i()), u(v, P, F))
                  : s
                    ? (O || (O = new s()), y(O, P, F))
                    : (C || (C = { key: {}, next: null }), _(C, P, F));
              }, 'set'),
            };
          return I;
        }, 'getSideChannel');
      }),
      _s = L((e, t) => {
        'use strict';
        var r = String.prototype.replace,
          n = /%20/g,
          o = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
        t.exports = {
          default: o.RFC3986,
          formatters: {
            RFC1738: m(function (a) {
              return r.call(a, n, '+');
            }, 'RFC1738'),
            RFC3986: m(function (a) {
              return String(a);
            }, 'RFC3986'),
          },
          RFC1738: o.RFC1738,
          RFC3986: o.RFC3986,
        };
      }),
      dg = L((e, t) => {
        'use strict';
        var r = _s(),
          n = Object.prototype.hasOwnProperty,
          o = Array.isArray,
          a = (function () {
            for (var v = [], O = 0; O < 256; ++O)
              v.push(
                '%' + ((O < 16 ? '0' : '') + O.toString(16)).toUpperCase()
              );
            return v;
          })(),
          i = m(function (v) {
            for (; v.length > 1; ) {
              var O = v.pop(),
                C = O.obj[O.prop];
              if (o(C)) {
                for (var I = [], P = 0; P < C.length; ++P)
                  typeof C[P] < 'u' && I.push(C[P]);
                O.obj[O.prop] = I;
              }
            }
          }, 'compactQueue'),
          s = m(function (v, O) {
            for (
              var C = O && O.plainObjects ? Object.create(null) : {}, I = 0;
              I < v.length;
              ++I
            )
              typeof v[I] < 'u' && (C[I] = v[I]);
            return C;
          }, 'arrayToObject'),
          l = m(function v(O, C, I) {
            if (!C) return O;
            if (typeof C != 'object') {
              if (o(O)) O.push(C);
              else if (O && typeof O == 'object')
                ((I && (I.plainObjects || I.allowPrototypes)) ||
                  !n.call(Object.prototype, C)) &&
                  (O[C] = !0);
              else return [O, C];
              return O;
            }
            if (!O || typeof O != 'object') return [O].concat(C);
            var P = O;
            return (
              o(O) && !o(C) && (P = s(O, I)),
              o(O) && o(C)
                ? (C.forEach(function (F, D) {
                    if (n.call(O, D)) {
                      var U = O[D];
                      U && typeof U == 'object' && F && typeof F == 'object'
                        ? (O[D] = v(U, F, I))
                        : O.push(F);
                    } else O[D] = F;
                  }),
                  O)
                : Object.keys(C).reduce(function (F, D) {
                    var U = C[D];
                    return (
                      n.call(F, D) ? (F[D] = v(F[D], U, I)) : (F[D] = U), F
                    );
                  }, P)
            );
          }, 'merge'),
          u = m(function (v, O) {
            return Object.keys(O).reduce(function (C, I) {
              return (C[I] = O[I]), C;
            }, v);
          }, 'assignSingleSource'),
          c = m(function (v, O, C) {
            var I = v.replace(/\+/g, ' ');
            if (C === 'iso-8859-1')
              return I.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(I);
            } catch {
              return I;
            }
          }, 'decode'),
          d = 1024,
          y = m(function (v, O, C, I, P) {
            if (v.length === 0) return v;
            var F = v;
            if (
              (typeof v == 'symbol'
                ? (F = Symbol.prototype.toString.call(v))
                : typeof v != 'string' && (F = String(v)),
              C === 'iso-8859-1')
            )
              return escape(F).replace(/%u[0-9a-f]{4}/gi, function (R) {
                return '%26%23' + parseInt(R.slice(2), 16) + '%3B';
              });
            for (var D = '', U = 0; U < F.length; U += d) {
              for (
                var G = F.length >= d ? F.slice(U, U + d) : F, X = [], Q = 0;
                Q < G.length;
                ++Q
              ) {
                var V = G.charCodeAt(Q);
                if (
                  V === 45 ||
                  V === 46 ||
                  V === 95 ||
                  V === 126 ||
                  (V >= 48 && V <= 57) ||
                  (V >= 65 && V <= 90) ||
                  (V >= 97 && V <= 122) ||
                  (P === r.RFC1738 && (V === 40 || V === 41))
                ) {
                  X[X.length] = G.charAt(Q);
                  continue;
                }
                if (V < 128) {
                  X[X.length] = a[V];
                  continue;
                }
                if (V < 2048) {
                  X[X.length] = a[192 | (V >> 6)] + a[128 | (V & 63)];
                  continue;
                }
                if (V < 55296 || V >= 57344) {
                  X[X.length] =
                    a[224 | (V >> 12)] +
                    a[128 | ((V >> 6) & 63)] +
                    a[128 | (V & 63)];
                  continue;
                }
                (Q += 1),
                  (V = 65536 + (((V & 1023) << 10) | (G.charCodeAt(Q) & 1023))),
                  (X[X.length] =
                    a[240 | (V >> 18)] +
                    a[128 | ((V >> 12) & 63)] +
                    a[128 | ((V >> 6) & 63)] +
                    a[128 | (V & 63)]);
              }
              D += X.join('');
            }
            return D;
          }, 'encode'),
          f = m(function (v) {
            for (
              var O = [{ obj: { o: v }, prop: 'o' }], C = [], I = 0;
              I < O.length;
              ++I
            )
              for (
                var P = O[I], F = P.obj[P.prop], D = Object.keys(F), U = 0;
                U < D.length;
                ++U
              ) {
                var G = D[U],
                  X = F[G];
                typeof X == 'object' &&
                  X !== null &&
                  C.indexOf(X) === -1 &&
                  (O.push({ obj: F, prop: G }), C.push(X));
              }
            return i(O), v;
          }, 'compact'),
          h = m(function (v) {
            return Object.prototype.toString.call(v) === '[object RegExp]';
          }, 'isRegExp'),
          g = m(function (v) {
            return !v || typeof v != 'object'
              ? !1
              : !!(
                  v.constructor &&
                  v.constructor.isBuffer &&
                  v.constructor.isBuffer(v)
                );
          }, 'isBuffer'),
          _ = m(function (v, O) {
            return [].concat(v, O);
          }, 'combine'),
          x = m(function (v, O) {
            if (o(v)) {
              for (var C = [], I = 0; I < v.length; I += 1) C.push(O(v[I]));
              return C;
            }
            return O(v);
          }, 'maybeMap');
        t.exports = {
          arrayToObject: s,
          assign: u,
          combine: _,
          compact: f,
          decode: c,
          encode: y,
          isBuffer: g,
          isRegExp: h,
          maybeMap: x,
          merge: l,
        };
      }),
      QR = L((e, t) => {
        'use strict';
        var r = XR(),
          n = dg(),
          o = _s(),
          a = Object.prototype.hasOwnProperty,
          i = {
            brackets: m(function (x) {
              return x + '[]';
            }, 'brackets'),
            comma: 'comma',
            indices: m(function (x, v) {
              return x + '[' + v + ']';
            }, 'indices'),
            repeat: m(function (x) {
              return x;
            }, 'repeat'),
          },
          s = Array.isArray,
          l = Array.prototype.push,
          u = m(function (x, v) {
            l.apply(x, s(v) ? v : [v]);
          }, 'pushToArray'),
          c = Date.prototype.toISOString,
          d = o.default,
          y = {
            addQueryPrefix: !1,
            allowDots: !1,
            allowEmptyArrays: !1,
            arrayFormat: 'indices',
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encodeDotInKeys: !1,
            encoder: n.encode,
            encodeValuesOnly: !1,
            format: d,
            formatter: o.formatters[d],
            indices: !1,
            serializeDate: m(function (x) {
              return c.call(x);
            }, 'serializeDate'),
            skipNulls: !1,
            strictNullHandling: !1,
          },
          f = m(function (x) {
            return (
              typeof x == 'string' ||
              typeof x == 'number' ||
              typeof x == 'boolean' ||
              typeof x == 'symbol' ||
              typeof x == 'bigint'
            );
          }, 'isNonNullishPrimitive'),
          h = {},
          g = m(function x(
            v,
            O,
            C,
            I,
            P,
            F,
            D,
            U,
            G,
            X,
            Q,
            V,
            R,
            q,
            M,
            Y,
            te,
            ne
          ) {
            for (
              var re = v, Z = ne, ae = 0, le = !1;
              (Z = Z.get(h)) !== void 0 && !le;

            ) {
              var Ee = Z.get(v);
              if (((ae += 1), typeof Ee < 'u')) {
                if (Ee === ae) throw new RangeError('Cyclic object value');
                le = !0;
              }
              typeof Z.get(h) > 'u' && (ae = 0);
            }
            if (
              (typeof X == 'function'
                ? (re = X(O, re))
                : re instanceof Date
                  ? (re = R(re))
                  : C === 'comma' &&
                    s(re) &&
                    (re = n.maybeMap(re, function (Se) {
                      return Se instanceof Date ? R(Se) : Se;
                    })),
              re === null)
            ) {
              if (F) return G && !Y ? G(O, y.encoder, te, 'key', q) : O;
              re = '';
            }
            if (f(re) || n.isBuffer(re)) {
              if (G) {
                var pe = Y ? O : G(O, y.encoder, te, 'key', q);
                return [M(pe) + '=' + M(G(re, y.encoder, te, 'value', q))];
              }
              return [M(O) + '=' + M(String(re))];
            }
            var we = [];
            if (typeof re > 'u') return we;
            var Le;
            if (C === 'comma' && s(re))
              Y && G && (re = n.maybeMap(re, G)),
                (Le = [
                  { value: re.length > 0 ? re.join(',') || null : void 0 },
                ]);
            else if (s(X)) Le = X;
            else {
              var Ve = Object.keys(re);
              Le = Q ? Ve.sort(Q) : Ve;
            }
            var Ye = U ? O.replace(/\./g, '%2E') : O,
              fe = I && s(re) && re.length === 1 ? Ye + '[]' : Ye;
            if (P && s(re) && re.length === 0) return fe + '[]';
            for (var Ie = 0; Ie < Le.length; ++Ie) {
              var ye = Le[Ie],
                Re =
                  typeof ye == 'object' && typeof ye.value < 'u'
                    ? ye.value
                    : re[ye];
              if (!(D && Re === null)) {
                var Ze = V && U ? ye.replace(/\./g, '%2E') : ye,
                  qe = s(re)
                    ? typeof C == 'function'
                      ? C(fe, Ze)
                      : fe
                    : fe + (V ? '.' + Ze : '[' + Ze + ']');
                ne.set(v, ae);
                var ce = r();
                ce.set(h, ne),
                  u(
                    we,
                    x(
                      Re,
                      qe,
                      C,
                      I,
                      P,
                      F,
                      D,
                      U,
                      C === 'comma' && Y && s(re) ? null : G,
                      X,
                      Q,
                      V,
                      R,
                      q,
                      M,
                      Y,
                      te,
                      ce
                    )
                  );
              }
            }
            return we;
          }, 'stringify'),
          _ = m(function (x) {
            if (!x) return y;
            if (
              typeof x.allowEmptyArrays < 'u' &&
              typeof x.allowEmptyArrays != 'boolean'
            )
              throw new TypeError(
                '`allowEmptyArrays` option can only be `true` or `false`, when provided'
              );
            if (
              typeof x.encodeDotInKeys < 'u' &&
              typeof x.encodeDotInKeys != 'boolean'
            )
              throw new TypeError(
                '`encodeDotInKeys` option can only be `true` or `false`, when provided'
              );
            if (
              x.encoder !== null &&
              typeof x.encoder < 'u' &&
              typeof x.encoder != 'function'
            )
              throw new TypeError('Encoder has to be a function.');
            var v = x.charset || y.charset;
            if (
              typeof x.charset < 'u' &&
              x.charset !== 'utf-8' &&
              x.charset !== 'iso-8859-1'
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined'
              );
            var O = o.default;
            if (typeof x.format < 'u') {
              if (!a.call(o.formatters, x.format))
                throw new TypeError('Unknown format option provided.');
              O = x.format;
            }
            var C = o.formatters[O],
              I = y.filter;
            (typeof x.filter == 'function' || s(x.filter)) && (I = x.filter);
            var P;
            if (
              (x.arrayFormat in i
                ? (P = x.arrayFormat)
                : 'indices' in x
                  ? (P = x.indices ? 'indices' : 'repeat')
                  : (P = y.arrayFormat),
              'commaRoundTrip' in x && typeof x.commaRoundTrip != 'boolean')
            )
              throw new TypeError(
                '`commaRoundTrip` must be a boolean, or absent'
              );
            var F =
              typeof x.allowDots > 'u'
                ? x.encodeDotInKeys === !0
                  ? !0
                  : y.allowDots
                : !!x.allowDots;
            return {
              addQueryPrefix:
                typeof x.addQueryPrefix == 'boolean'
                  ? x.addQueryPrefix
                  : y.addQueryPrefix,
              allowDots: F,
              allowEmptyArrays:
                typeof x.allowEmptyArrays == 'boolean'
                  ? !!x.allowEmptyArrays
                  : y.allowEmptyArrays,
              arrayFormat: P,
              charset: v,
              charsetSentinel:
                typeof x.charsetSentinel == 'boolean'
                  ? x.charsetSentinel
                  : y.charsetSentinel,
              commaRoundTrip: x.commaRoundTrip,
              delimiter: typeof x.delimiter > 'u' ? y.delimiter : x.delimiter,
              encode: typeof x.encode == 'boolean' ? x.encode : y.encode,
              encodeDotInKeys:
                typeof x.encodeDotInKeys == 'boolean'
                  ? x.encodeDotInKeys
                  : y.encodeDotInKeys,
              encoder: typeof x.encoder == 'function' ? x.encoder : y.encoder,
              encodeValuesOnly:
                typeof x.encodeValuesOnly == 'boolean'
                  ? x.encodeValuesOnly
                  : y.encodeValuesOnly,
              filter: I,
              format: O,
              formatter: C,
              serializeDate:
                typeof x.serializeDate == 'function'
                  ? x.serializeDate
                  : y.serializeDate,
              skipNulls:
                typeof x.skipNulls == 'boolean' ? x.skipNulls : y.skipNulls,
              sort: typeof x.sort == 'function' ? x.sort : null,
              strictNullHandling:
                typeof x.strictNullHandling == 'boolean'
                  ? x.strictNullHandling
                  : y.strictNullHandling,
            };
          }, 'normalizeStringifyOptions');
        t.exports = function (x, v) {
          var O = x,
            C = _(v),
            I,
            P;
          typeof C.filter == 'function'
            ? ((P = C.filter), (O = P('', O)))
            : s(C.filter) && ((P = C.filter), (I = P));
          var F = [];
          if (typeof O != 'object' || O === null) return '';
          var D = i[C.arrayFormat],
            U = D === 'comma' && C.commaRoundTrip;
          I || (I = Object.keys(O)), C.sort && I.sort(C.sort);
          for (var G = r(), X = 0; X < I.length; ++X) {
            var Q = I[X];
            (C.skipNulls && O[Q] === null) ||
              u(
                F,
                g(
                  O[Q],
                  Q,
                  D,
                  U,
                  C.allowEmptyArrays,
                  C.strictNullHandling,
                  C.skipNulls,
                  C.encodeDotInKeys,
                  C.encode ? C.encoder : null,
                  C.filter,
                  C.sort,
                  C.allowDots,
                  C.serializeDate,
                  C.format,
                  C.formatter,
                  C.encodeValuesOnly,
                  C.charset,
                  G
                )
              );
          }
          var V = F.join(C.delimiter),
            R = C.addQueryPrefix === !0 ? '?' : '';
          return (
            C.charsetSentinel &&
              (C.charset === 'iso-8859-1'
                ? (R += 'utf8=%26%2310003%3B&')
                : (R += 'utf8=%E2%9C%93&')),
            V.length > 0 ? R + V : ''
          );
        };
      }),
      ZR = L((e, t) => {
        'use strict';
        var r = dg(),
          n = Object.prototype.hasOwnProperty,
          o = Array.isArray,
          a = {
            allowDots: !1,
            allowEmptyArrays: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decodeDotInKeys: !1,
            decoder: r.decode,
            delimiter: '&',
            depth: 5,
            duplicates: 'combine',
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          i = m(function (h) {
            return h.replace(/&#(\d+);/g, function (g, _) {
              return String.fromCharCode(parseInt(_, 10));
            });
          }, 'interpretNumericEntities'),
          s = m(function (h, g) {
            return h && typeof h == 'string' && g.comma && h.indexOf(',') > -1
              ? h.split(',')
              : h;
          }, 'parseArrayValue'),
          l = 'utf8=%26%2310003%3B',
          u = 'utf8=%E2%9C%93',
          c = m(function (h, g) {
            var _ = { __proto__: null },
              x = g.ignoreQueryPrefix ? h.replace(/^\?/, '') : h;
            x = x.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
            var v = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit,
              O = x.split(g.delimiter, v),
              C = -1,
              I,
              P = g.charset;
            if (g.charsetSentinel)
              for (I = 0; I < O.length; ++I)
                O[I].indexOf('utf8=') === 0 &&
                  (O[I] === u
                    ? (P = 'utf-8')
                    : O[I] === l && (P = 'iso-8859-1'),
                  (C = I),
                  (I = O.length));
            for (I = 0; I < O.length; ++I)
              if (I !== C) {
                var F = O[I],
                  D = F.indexOf(']='),
                  U = D === -1 ? F.indexOf('=') : D + 1,
                  G,
                  X;
                U === -1
                  ? ((G = g.decoder(F, a.decoder, P, 'key')),
                    (X = g.strictNullHandling ? null : ''))
                  : ((G = g.decoder(F.slice(0, U), a.decoder, P, 'key')),
                    (X = r.maybeMap(s(F.slice(U + 1), g), function (V) {
                      return g.decoder(V, a.decoder, P, 'value');
                    }))),
                  X &&
                    g.interpretNumericEntities &&
                    P === 'iso-8859-1' &&
                    (X = i(X)),
                  F.indexOf('[]=') > -1 && (X = o(X) ? [X] : X);
                var Q = n.call(_, G);
                Q && g.duplicates === 'combine'
                  ? (_[G] = r.combine(_[G], X))
                  : (!Q || g.duplicates === 'last') && (_[G] = X);
              }
            return _;
          }, 'parseQueryStringValues'),
          d = m(function (h, g, _, x) {
            for (var v = x ? g : s(g, _), O = h.length - 1; O >= 0; --O) {
              var C,
                I = h[O];
              if (I === '[]' && _.parseArrays)
                C =
                  _.allowEmptyArrays &&
                  (v === '' || (_.strictNullHandling && v === null))
                    ? []
                    : [].concat(v);
              else {
                C = _.plainObjects ? Object.create(null) : {};
                var P =
                    I.charAt(0) === '[' && I.charAt(I.length - 1) === ']'
                      ? I.slice(1, -1)
                      : I,
                  F = _.decodeDotInKeys ? P.replace(/%2E/g, '.') : P,
                  D = parseInt(F, 10);
                !_.parseArrays && F === ''
                  ? (C = { 0: v })
                  : !isNaN(D) &&
                      I !== F &&
                      String(D) === F &&
                      D >= 0 &&
                      _.parseArrays &&
                      D <= _.arrayLimit
                    ? ((C = []), (C[D] = v))
                    : F !== '__proto__' && (C[F] = v);
              }
              v = C;
            }
            return v;
          }, 'parseObject'),
          y = m(function (h, g, _, x) {
            if (h) {
              var v = _.allowDots ? h.replace(/\.([^.[]+)/g, '[$1]') : h,
                O = /(\[[^[\]]*])/,
                C = /(\[[^[\]]*])/g,
                I = _.depth > 0 && O.exec(v),
                P = I ? v.slice(0, I.index) : v,
                F = [];
              if (P) {
                if (
                  !_.plainObjects &&
                  n.call(Object.prototype, P) &&
                  !_.allowPrototypes
                )
                  return;
                F.push(P);
              }
              for (
                var D = 0;
                _.depth > 0 && (I = C.exec(v)) !== null && D < _.depth;

              ) {
                if (
                  ((D += 1),
                  !_.plainObjects &&
                    n.call(Object.prototype, I[1].slice(1, -1)) &&
                    !_.allowPrototypes)
                )
                  return;
                F.push(I[1]);
              }
              return I && F.push('[' + v.slice(I.index) + ']'), d(F, g, _, x);
            }
          }, 'parseQueryStringKeys'),
          f = m(function (h) {
            if (!h) return a;
            if (
              typeof h.allowEmptyArrays < 'u' &&
              typeof h.allowEmptyArrays != 'boolean'
            )
              throw new TypeError(
                '`allowEmptyArrays` option can only be `true` or `false`, when provided'
              );
            if (
              typeof h.decodeDotInKeys < 'u' &&
              typeof h.decodeDotInKeys != 'boolean'
            )
              throw new TypeError(
                '`decodeDotInKeys` option can only be `true` or `false`, when provided'
              );
            if (
              h.decoder !== null &&
              typeof h.decoder < 'u' &&
              typeof h.decoder != 'function'
            )
              throw new TypeError('Decoder has to be a function.');
            if (
              typeof h.charset < 'u' &&
              h.charset !== 'utf-8' &&
              h.charset !== 'iso-8859-1'
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined'
              );
            var g = typeof h.charset > 'u' ? a.charset : h.charset,
              _ = typeof h.duplicates > 'u' ? a.duplicates : h.duplicates;
            if (_ !== 'combine' && _ !== 'first' && _ !== 'last')
              throw new TypeError(
                'The duplicates option must be either combine, first, or last'
              );
            var x =
              typeof h.allowDots > 'u'
                ? h.decodeDotInKeys === !0
                  ? !0
                  : a.allowDots
                : !!h.allowDots;
            return {
              allowDots: x,
              allowEmptyArrays:
                typeof h.allowEmptyArrays == 'boolean'
                  ? !!h.allowEmptyArrays
                  : a.allowEmptyArrays,
              allowPrototypes:
                typeof h.allowPrototypes == 'boolean'
                  ? h.allowPrototypes
                  : a.allowPrototypes,
              allowSparse:
                typeof h.allowSparse == 'boolean'
                  ? h.allowSparse
                  : a.allowSparse,
              arrayLimit:
                typeof h.arrayLimit == 'number' ? h.arrayLimit : a.arrayLimit,
              charset: g,
              charsetSentinel:
                typeof h.charsetSentinel == 'boolean'
                  ? h.charsetSentinel
                  : a.charsetSentinel,
              comma: typeof h.comma == 'boolean' ? h.comma : a.comma,
              decodeDotInKeys:
                typeof h.decodeDotInKeys == 'boolean'
                  ? h.decodeDotInKeys
                  : a.decodeDotInKeys,
              decoder: typeof h.decoder == 'function' ? h.decoder : a.decoder,
              delimiter:
                typeof h.delimiter == 'string' || r.isRegExp(h.delimiter)
                  ? h.delimiter
                  : a.delimiter,
              depth:
                typeof h.depth == 'number' || h.depth === !1
                  ? +h.depth
                  : a.depth,
              duplicates: _,
              ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
              interpretNumericEntities:
                typeof h.interpretNumericEntities == 'boolean'
                  ? h.interpretNumericEntities
                  : a.interpretNumericEntities,
              parameterLimit:
                typeof h.parameterLimit == 'number'
                  ? h.parameterLimit
                  : a.parameterLimit,
              parseArrays: h.parseArrays !== !1,
              plainObjects:
                typeof h.plainObjects == 'boolean'
                  ? h.plainObjects
                  : a.plainObjects,
              strictNullHandling:
                typeof h.strictNullHandling == 'boolean'
                  ? h.strictNullHandling
                  : a.strictNullHandling,
            };
          }, 'normalizeParseOptions');
        t.exports = function (h, g) {
          var _ = f(g);
          if (h === '' || h === null || typeof h > 'u')
            return _.plainObjects ? Object.create(null) : {};
          for (
            var x = typeof h == 'string' ? c(h, _) : h,
              v = _.plainObjects ? Object.create(null) : {},
              O = Object.keys(x),
              C = 0;
            C < O.length;
            ++C
          ) {
            var I = O[C],
              P = y(I, x[I], _, typeof h == 'string');
            v = r.merge(v, P, _);
          }
          return _.allowSparse === !0 ? v : r.compact(v);
        };
      }),
      Os = L((e, t) => {
        'use strict';
        var r = QR(),
          n = ZR(),
          o = _s();
        t.exports = { formats: o, parse: n, stringify: r };
      }),
      fg = L((e, t) => {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        };
      }),
      e5 = L((e, t) => {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        };
      }),
      yg = L((e, t) => {
        t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
      }),
      t5 = L((e, t) => {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      }),
      r5 = L((e) => {
        'use strict';
        var t =
          (e && e.__importDefault) ||
          function (a) {
            return a && a.__esModule ? a : { default: a };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        var r = t(t5()),
          n =
            String.fromCodePoint ||
            function (a) {
              var i = '';
              return (
                a > 65535 &&
                  ((a -= 65536),
                  (i += String.fromCharCode(((a >>> 10) & 1023) | 55296)),
                  (a = 56320 | (a & 1023))),
                (i += String.fromCharCode(a)),
                i
              );
            };
        function o(a) {
          return (a >= 55296 && a <= 57343) || a > 1114111
            ? '\uFFFD'
            : (a in r.default && (a = r.default[a]), n(a));
        }
        m(o, 'decodeCodePoint'), (e.default = o);
      }),
      wm = L((e) => {
        'use strict';
        var t =
          (e && e.__importDefault) ||
          function (c) {
            return c && c.__esModule ? c : { default: c };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(fg()),
          n = t(e5()),
          o = t(yg()),
          a = t(r5()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = s(o.default)), (e.decodeHTMLStrict = s(r.default));
        function s(c) {
          var d = u(c);
          return function (y) {
            return String(y).replace(i, d);
          };
        }
        m(s, 'getStrictDecoder');
        var l = m(function (c, d) {
          return c < d ? 1 : -1;
        }, 'sorter');
        e.decodeHTML = (function () {
          for (
            var c = Object.keys(n.default).sort(l),
              d = Object.keys(r.default).sort(l),
              y = 0,
              f = 0;
            y < d.length;
            y++
          )
            c[f] === d[y] ? ((d[y] += ';?'), f++) : (d[y] += ';');
          var h = new RegExp(
              '&(?:' + d.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
              'g'
            ),
            g = u(r.default);
          function _(x) {
            return x.substr(-1) !== ';' && (x += ';'), g(x);
          }
          return (
            m(_, 'replacer'),
            function (x) {
              return String(x).replace(h, _);
            }
          );
        })();
        function u(c) {
          return m(function (d) {
            if (d.charAt(1) === '#') {
              var y = d.charAt(2);
              return y === 'X' || y === 'x'
                ? a.default(parseInt(d.substr(3), 16))
                : a.default(parseInt(d.substr(2), 10));
            }
            return c[d.slice(1, -1)] || d;
          }, 'replace');
        }
        m(u, 'getReplacer');
      }),
      Sm = L((e) => {
        'use strict';
        var t =
          (e && e.__importDefault) ||
          function (v) {
            return v && v.__esModule ? v : { default: v };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0);
        var r = t(yg()),
          n = l(r.default),
          o = u(n);
        e.encodeXML = x(n);
        var a = t(fg()),
          i = l(a.default),
          s = u(i);
        (e.encodeHTML = f(i, s)), (e.encodeNonAsciiHTML = x(i));
        function l(v) {
          return Object.keys(v)
            .sort()
            .reduce(function (O, C) {
              return (O[v[C]] = '&' + C + ';'), O;
            }, {});
        }
        m(l, 'getInverseObj');
        function u(v) {
          for (
            var O = [], C = [], I = 0, P = Object.keys(v);
            I < P.length;
            I++
          ) {
            var F = P[I];
            F.length === 1 ? O.push('\\' + F) : C.push(F);
          }
          O.sort();
          for (var D = 0; D < O.length - 1; D++) {
            for (
              var U = D;
              U < O.length - 1 &&
              O[U].charCodeAt(1) + 1 === O[U + 1].charCodeAt(1);

            )
              U += 1;
            var G = 1 + U - D;
            G < 3 || O.splice(D, G, O[D] + '-' + O[U]);
          }
          return (
            C.unshift('[' + O.join('') + ']'), new RegExp(C.join('|'), 'g')
          );
        }
        m(u, 'getInverseReplacer');
        var c =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          d =
            String.prototype.codePointAt != null
              ? function (v) {
                  return v.codePointAt(0);
                }
              : function (v) {
                  return (
                    (v.charCodeAt(0) - 55296) * 1024 +
                    v.charCodeAt(1) -
                    56320 +
                    65536
                  );
                };
        function y(v) {
          return (
            '&#x' +
            (v.length > 1 ? d(v) : v.charCodeAt(0)).toString(16).toUpperCase() +
            ';'
          );
        }
        m(y, 'singleCharReplacer');
        function f(v, O) {
          return function (C) {
            return C.replace(O, function (I) {
              return v[I];
            }).replace(c, y);
          };
        }
        m(f, 'getInverse');
        var h = new RegExp(o.source + '|' + c.source, 'g');
        function g(v) {
          return v.replace(h, y);
        }
        m(g, 'escape'), (e.escape = g);
        function _(v) {
          return v.replace(o, y);
        }
        m(_, 'escapeUTF8'), (e.escapeUTF8 = _);
        function x(v) {
          return function (O) {
            return O.replace(h, function (C) {
              return v[C] || y(C);
            });
          };
        }
        m(x, 'getASCIIEncoder');
      }),
      n5 = L((e) => {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = wm(),
          r = Sm();
        function n(l, u) {
          return (!u || u <= 0 ? t.decodeXML : t.decodeHTML)(l);
        }
        m(n, 'decode'), (e.decode = n);
        function o(l, u) {
          return (!u || u <= 0 ? t.decodeXML : t.decodeHTMLStrict)(l);
        }
        m(o, 'decodeStrict'), (e.decodeStrict = o);
        function a(l, u) {
          return (!u || u <= 0 ? r.encodeXML : r.encodeHTML)(l);
        }
        m(a, 'encode'), (e.encode = a);
        var i = Sm();
        Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: m(function () {
            return i.encodeXML;
          }, 'get'),
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: m(function () {
              return i.encodeHTML;
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: m(function () {
              return i.encodeNonAsciiHTML;
            }, 'get'),
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: m(function () {
              return i.escape;
            }, 'get'),
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: m(function () {
              return i.escapeUTF8;
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: m(function () {
              return i.encodeHTML;
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: m(function () {
              return i.encodeHTML;
            }, 'get'),
          });
        var s = wm();
        Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: m(function () {
            return s.decodeXML;
          }, 'get'),
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTML;
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTMLStrict;
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTML;
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTML;
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTMLStrict;
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTMLStrict;
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeXML;
            }, 'get'),
          });
      }),
      o5 = L((e, t) => {
        'use strict';
        function r(R, q) {
          if (!(R instanceof q))
            throw new TypeError('Cannot call a class as a function');
        }
        m(r, '_classCallCheck');
        function n(R, q) {
          for (var M = 0; M < q.length; M++) {
            var Y = q[M];
            (Y.enumerable = Y.enumerable || !1),
              (Y.configurable = !0),
              'value' in Y && (Y.writable = !0),
              Object.defineProperty(R, Y.key, Y);
          }
        }
        m(n, '_defineProperties');
        function o(R, q, M) {
          return q && n(R.prototype, q), M && n(R, M), R;
        }
        m(o, '_createClass');
        function a(R, q) {
          var M =
            (typeof Symbol < 'u' && R[Symbol.iterator]) || R['@@iterator'];
          if (!M) {
            if (
              Array.isArray(R) ||
              (M = i(R)) ||
              (q && R && typeof R.length == 'number')
            ) {
              M && (R = M);
              var Y = 0,
                te = m(function () {}, 'F');
              return {
                s: te,
                n: m(function () {
                  return Y >= R.length
                    ? { done: !0 }
                    : { done: !1, value: R[Y++] };
                }, 'n'),
                e: m(function (ae) {
                  throw ae;
                }, 'e'),
                f: te,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var ne = !0,
            re = !1,
            Z;
          return {
            s: m(function () {
              M = M.call(R);
            }, 's'),
            n: m(function () {
              var ae = M.next();
              return (ne = ae.done), ae;
            }, 'n'),
            e: m(function (ae) {
              (re = !0), (Z = ae);
            }, 'e'),
            f: m(function () {
              try {
                !ne && M.return != null && M.return();
              } finally {
                if (re) throw Z;
              }
            }, 'f'),
          };
        }
        m(a, '_createForOfIteratorHelper');
        function i(R, q) {
          if (R) {
            if (typeof R == 'string') return s(R, q);
            var M = Object.prototype.toString.call(R).slice(8, -1);
            if (
              (M === 'Object' && R.constructor && (M = R.constructor.name),
              M === 'Map' || M === 'Set')
            )
              return Array.from(R);
            if (
              M === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
            )
              return s(R, q);
          }
        }
        m(i, '_unsupportedIterableToArray');
        function s(R, q) {
          (q == null || q > R.length) && (q = R.length);
          for (var M = 0, Y = new Array(q); M < q; M++) Y[M] = R[M];
          return Y;
        }
        m(s, '_arrayLikeToArray');
        var l = n5(),
          u = {
            fg: '#FFF',
            bg: '#000',
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: c(),
          };
        function c() {
          var R = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          };
          return (
            v(0, 5).forEach(function (q) {
              v(0, 5).forEach(function (M) {
                v(0, 5).forEach(function (Y) {
                  return d(q, M, Y, R);
                });
              });
            }),
            v(0, 23).forEach(function (q) {
              var M = q + 232,
                Y = y(q * 10 + 8);
              R[M] = '#' + Y + Y + Y;
            }),
            R
          );
        }
        m(c, 'getDefaultColors');
        function d(R, q, M, Y) {
          var te = 16 + R * 36 + q * 6 + M,
            ne = R > 0 ? R * 40 + 55 : 0,
            re = q > 0 ? q * 40 + 55 : 0,
            Z = M > 0 ? M * 40 + 55 : 0;
          Y[te] = f([ne, re, Z]);
        }
        m(d, 'setStyleColor');
        function y(R) {
          for (var q = R.toString(16); q.length < 2; ) q = '0' + q;
          return q;
        }
        m(y, 'toHexString');
        function f(R) {
          var q = [],
            M = a(R),
            Y;
          try {
            for (M.s(); !(Y = M.n()).done; ) {
              var te = Y.value;
              q.push(y(te));
            }
          } catch (ne) {
            M.e(ne);
          } finally {
            M.f();
          }
          return '#' + q.join('');
        }
        m(f, 'toColorHexString');
        function h(R, q, M, Y) {
          var te;
          return (
            q === 'text'
              ? (te = I(M, Y))
              : q === 'display'
                ? (te = _(R, M, Y))
                : q === 'xterm256Foreground'
                  ? (te = D(R, Y.colors[M]))
                  : q === 'xterm256Background'
                    ? (te = U(R, Y.colors[M]))
                    : q === 'rgb' && (te = g(R, M)),
            te
          );
        }
        m(h, 'generateOutput');
        function g(R, q) {
          q = q.substring(2).slice(0, -1);
          var M = +q.substr(0, 2),
            Y = q.substring(5).split(';'),
            te = Y.map(function (ne) {
              return ('0' + Number(ne).toString(16)).substr(-2);
            }).join('');
          return F(R, (M === 38 ? 'color:#' : 'background-color:#') + te);
        }
        m(g, 'handleRgb');
        function _(R, q, M) {
          q = parseInt(q, 10);
          var Y = {
              '-1': m(function () {
                return '<br/>';
              }, '_'),
              0: m(function () {
                return R.length && x(R);
              }, '_'),
              1: m(function () {
                return P(R, 'b');
              }, '_'),
              3: m(function () {
                return P(R, 'i');
              }, '_'),
              4: m(function () {
                return P(R, 'u');
              }, '_'),
              8: m(function () {
                return F(R, 'display:none');
              }, '_'),
              9: m(function () {
                return P(R, 'strike');
              }, '_'),
              22: m(function () {
                return F(
                  R,
                  'font-weight:normal;text-decoration:none;font-style:normal'
                );
              }, '_'),
              23: m(function () {
                return G(R, 'i');
              }, '_'),
              24: m(function () {
                return G(R, 'u');
              }, '_'),
              39: m(function () {
                return D(R, M.fg);
              }, '_'),
              49: m(function () {
                return U(R, M.bg);
              }, '_'),
              53: m(function () {
                return F(R, 'text-decoration:overline');
              }, '_'),
            },
            te;
          return (
            Y[q]
              ? (te = Y[q]())
              : 4 < q && q < 7
                ? (te = P(R, 'blink'))
                : 29 < q && q < 38
                  ? (te = D(R, M.colors[q - 30]))
                  : 39 < q && q < 48
                    ? (te = U(R, M.colors[q - 40]))
                    : 89 < q && q < 98
                      ? (te = D(R, M.colors[8 + (q - 90)]))
                      : 99 < q &&
                        q < 108 &&
                        (te = U(R, M.colors[8 + (q - 100)])),
            te
          );
        }
        m(_, 'handleDisplay');
        function x(R) {
          var q = R.slice(0);
          return (
            (R.length = 0),
            q
              .reverse()
              .map(function (M) {
                return '</' + M + '>';
              })
              .join('')
          );
        }
        m(x, 'resetStyles');
        function v(R, q) {
          for (var M = [], Y = R; Y <= q; Y++) M.push(Y);
          return M;
        }
        m(v, 'range');
        function O(R) {
          return function (q) {
            return (R === null || q.category !== R) && R !== 'all';
          };
        }
        m(O, 'notCategory');
        function C(R) {
          R = parseInt(R, 10);
          var q = null;
          return (
            R === 0
              ? (q = 'all')
              : R === 1
                ? (q = 'bold')
                : 2 < R && R < 5
                  ? (q = 'underline')
                  : 4 < R && R < 7
                    ? (q = 'blink')
                    : R === 8
                      ? (q = 'hide')
                      : R === 9
                        ? (q = 'strike')
                        : (29 < R && R < 38) || R === 39 || (89 < R && R < 98)
                          ? (q = 'foreground-color')
                          : ((39 < R && R < 48) ||
                              R === 49 ||
                              (99 < R && R < 108)) &&
                            (q = 'background-color'),
            q
          );
        }
        m(C, 'categoryForCode');
        function I(R, q) {
          return q.escapeXML ? l.encodeXML(R) : R;
        }
        m(I, 'pushText');
        function P(R, q, M) {
          return (
            M || (M = ''),
            R.push(q),
            '<'.concat(q).concat(M ? ' style="'.concat(M, '"') : '', '>')
          );
        }
        m(P, 'pushTag');
        function F(R, q) {
          return P(R, 'span', q);
        }
        m(F, 'pushStyle');
        function D(R, q) {
          return P(R, 'span', 'color:' + q);
        }
        m(D, 'pushForegroundColor');
        function U(R, q) {
          return P(R, 'span', 'background-color:' + q);
        }
        m(U, 'pushBackgroundColor');
        function G(R, q) {
          var M;
          if ((R.slice(-1)[0] === q && (M = R.pop()), M)) return '</' + q + '>';
        }
        m(G, 'closeTag');
        function X(R, q, M) {
          var Y = !1,
            te = 3;
          function ne() {
            return '';
          }
          m(ne, 'remove');
          function re(qe, ce) {
            return M('xterm256Foreground', ce), '';
          }
          m(re, 'removeXterm256Foreground');
          function Z(qe, ce) {
            return M('xterm256Background', ce), '';
          }
          m(Z, 'removeXterm256Background');
          function ae(qe) {
            return q.newline ? M('display', -1) : M('text', qe), '';
          }
          m(ae, 'newline');
          function le(qe, ce) {
            (Y = !0),
              ce.trim().length === 0 && (ce = '0'),
              (ce = ce.trimRight(';').split(';'));
            var Se = a(ce),
              Ft;
            try {
              for (Se.s(); !(Ft = Se.n()).done; ) {
                var ft = Ft.value;
                M('display', ft);
              }
            } catch (wt) {
              Se.e(wt);
            } finally {
              Se.f();
            }
            return '';
          }
          m(le, 'ansiMess');
          function Ee(qe) {
            return M('text', qe), '';
          }
          m(Ee, 'realText');
          function pe(qe) {
            return M('rgb', qe), '';
          }
          m(pe, 'rgb');
          var we = [
            { pattern: /^\x08+/, sub: ne },
            { pattern: /^\x1b\[[012]?K/, sub: ne },
            { pattern: /^\x1b\[\(B/, sub: ne },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: pe },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: re },
            { pattern: /^\x1b\[48;5;(\d+)m/, sub: Z },
            { pattern: /^\n/, sub: ae },
            { pattern: /^\r+\n/, sub: ae },
            { pattern: /^\r/, sub: ae },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: le },
            { pattern: /^\x1b\[\d?J/, sub: ne },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: ne },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: ne },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Ee },
          ];
          function Le(qe, ce) {
            (ce > te && Y) || ((Y = !1), (R = R.replace(qe.pattern, qe.sub)));
          }
          m(Le, 'process');
          var Ve = [],
            Ye = R,
            fe = Ye.length;
          e: for (; fe > 0; ) {
            for (var Ie = 0, ye = 0, Re = we.length; ye < Re; Ie = ++ye) {
              var Ze = we[Ie];
              if ((Le(Ze, Ie), R.length !== fe)) {
                fe = R.length;
                continue e;
              }
            }
            if (R.length === fe) break;
            Ve.push(0), (fe = R.length);
          }
          return Ve;
        }
        m(X, 'tokenize');
        function Q(R, q, M) {
          return (
            q !== 'text' &&
              ((R = R.filter(O(C(M)))),
              R.push({ token: q, data: M, category: C(M) })),
            R
          );
        }
        m(Q, 'updateStickyStack');
        var V = (function () {
          function R(q) {
            r(this, R),
              (q = q || {}),
              q.colors && (q.colors = Object.assign({}, u.colors, q.colors)),
              (this.options = Object.assign({}, u, q)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            m(R, 'Filter'),
            o(R, [
              {
                key: 'toHtml',
                value: m(function (q) {
                  var M = this;
                  q = typeof q == 'string' ? [q] : q;
                  var Y = this.stack,
                    te = this.options,
                    ne = [];
                  return (
                    this.stickyStack.forEach(function (re) {
                      var Z = h(Y, re.token, re.data, te);
                      Z && ne.push(Z);
                    }),
                    X(q.join(''), te, function (re, Z) {
                      var ae = h(Y, re, Z, te);
                      ae && ne.push(ae),
                        te.stream && (M.stickyStack = Q(M.stickyStack, re, Z));
                    }),
                    Y.length && ne.push(x(Y)),
                    ne.join('')
                  );
                }, 'toHtml'),
              },
            ]),
            R
          );
        })();
        t.exports = V;
      }),
      Ue = (() => {
        let e;
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        );
      })();
    function hg() {
      let e = {
        setHandler: m(() => {}, 'setHandler'),
        send: m(() => {}, 'send'),
      };
      return new qh({ transport: e });
    }
    m(hg, 'mockChannel');
    var mg = class {
      constructor() {
        this.promise = new Promise((t) => {
          this.resolve = () => t(this.getChannel());
        });
      }
      channel;
      promise;
      resolve;
      getChannel = m(() => {
        if (!this.channel) {
          let t = hg();
          return this.setChannel(t), t;
        }
        return this.channel;
      }, 'getChannel');
      ready = m(() => this.promise, 'ready');
      hasChannel = m(() => !!this.channel, 'hasChannel');
      setChannel = m((t) => {
        (this.channel = t), this.resolve();
      }, 'setChannel');
    };
    m(mg, 'AddonStore');
    var a5 = mg,
      Gi = '__STORYBOOK_ADDONS_PREVIEW';
    function gg() {
      return Ue[Gi] || (Ue[Gi] = new a5()), Ue[Gi];
    }
    m(gg, 'getAddonsStore');
    var pr = gg(),
      bg = class {
        hookListsMap = void 0;
        mountedDecorators = void 0;
        prevMountedDecorators = void 0;
        currentHooks = void 0;
        nextHookIndex = void 0;
        currentPhase = void 0;
        currentEffects = void 0;
        prevEffects = void 0;
        currentDecoratorName = void 0;
        hasUpdates = void 0;
        currentContext = void 0;
        renderListener = m((t) => {
          t === this.currentContext?.id &&
            (this.triggerEffects(),
            (this.currentContext = null),
            this.removeRenderListeners());
        }, 'renderListener');
        constructor() {
          this.init();
        }
        init() {
          (this.hookListsMap = new WeakMap()),
            (this.mountedDecorators = new Set()),
            (this.prevMountedDecorators = new Set()),
            (this.currentHooks = []),
            (this.nextHookIndex = 0),
            (this.currentPhase = 'NONE'),
            (this.currentEffects = []),
            (this.prevEffects = []),
            (this.currentDecoratorName = null),
            (this.hasUpdates = !1),
            (this.currentContext = null);
        }
        clean() {
          this.prevEffects.forEach((t) => {
            t.destroy && t.destroy();
          }),
            this.init(),
            this.removeRenderListeners();
        }
        getNextHook() {
          let t = this.currentHooks[this.nextHookIndex];
          return (this.nextHookIndex += 1), t;
        }
        triggerEffects() {
          this.prevEffects.forEach((t) => {
            !this.currentEffects.includes(t) && t.destroy && t.destroy();
          }),
            this.currentEffects.forEach((t) => {
              this.prevEffects.includes(t) || (t.destroy = t.create());
            }),
            (this.prevEffects = this.currentEffects),
            (this.currentEffects = []);
        }
        addRenderListeners() {
          this.removeRenderListeners(),
            pr.getChannel().on(xn, this.renderListener);
        }
        removeRenderListeners() {
          pr.getChannel().removeListener(xn, this.renderListener);
        }
      };
    m(bg, 'HooksContext');
    var vg = bg;
    function es(e) {
      let t = m((...r) => {
        let { hooks: n } = typeof r[0] == 'function' ? r[1] : r[0],
          o = n.currentPhase,
          a = n.currentHooks,
          i = n.nextHookIndex,
          s = n.currentDecoratorName;
        (n.currentDecoratorName = e.name),
          n.prevMountedDecorators.has(e)
            ? ((n.currentPhase = 'UPDATE'),
              (n.currentHooks = n.hookListsMap.get(e) || []))
            : ((n.currentPhase = 'MOUNT'),
              (n.currentHooks = []),
              n.hookListsMap.set(e, n.currentHooks),
              n.prevMountedDecorators.add(e)),
          (n.nextHookIndex = 0);
        let l = Ue.STORYBOOK_HOOKS_CONTEXT;
        Ue.STORYBOOK_HOOKS_CONTEXT = n;
        let u = e(...r);
        if (
          ((Ue.STORYBOOK_HOOKS_CONTEXT = l),
          n.currentPhase === 'UPDATE' && n.getNextHook() != null)
        )
          throw new Error(
            'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
          );
        return (
          (n.currentPhase = o),
          (n.currentHooks = a),
          (n.nextHookIndex = i),
          (n.currentDecoratorName = s),
          u
        );
      }, 'hookified');
      return (t.originalFn = e), t;
    }
    m(es, 'hookify');
    var Wi = 0,
      i5 = 25,
      s5 = m(
        (e) => (t, r) => {
          let n = e(
            es(t),
            r.map((o) => es(o))
          );
          return (o) => {
            let { hooks: a } = o;
            (a.prevMountedDecorators ??= new Set()),
              (a.mountedDecorators = new Set([t, ...r])),
              (a.currentContext = o),
              (a.hasUpdates = !1);
            let i = n(o);
            for (Wi = 1; a.hasUpdates; )
              if (
                ((a.hasUpdates = !1),
                (a.currentEffects = []),
                (i = n(o)),
                (Wi += 1),
                Wi > i5)
              )
                throw new Error(
                  'Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.'
                );
            return a.addRenderListeners(), i;
          };
        },
        'applyHooks'
      ),
      l5 = m(
        (e, t) => e.length === t.length && e.every((r, n) => r === t[n]),
        'areDepsEqual'
      ),
      Is = m(
        () =>
          new Error(
            'Storybook preview hooks can only be called inside decorators and story functions.'
          ),
        'invalidHooksError'
      );
    function Ps() {
      return Ue.STORYBOOK_HOOKS_CONTEXT || null;
    }
    m(Ps, 'getHooksContextOrNull');
    function na() {
      let e = Ps();
      if (e == null) throw Is();
      return e;
    }
    m(na, 'getHooksContextOrThrow');
    function xg(e, t, r) {
      let n = na();
      if (n.currentPhase === 'MOUNT') {
        r != null &&
          !Array.isArray(r) &&
          me.warn(
            `${e} received a final argument that is not an array (instead, received ${r}). When specified, the final argument must be an array.`
          );
        let o = { name: e, deps: r };
        return n.currentHooks.push(o), t(o), o;
      }
      if (n.currentPhase === 'UPDATE') {
        let o = n.getNextHook();
        if (o == null)
          throw new Error(
            'Rendered more hooks than during the previous render.'
          );
        return (
          o.name !== e &&
            me.warn(
              `Storybook has detected a change in the order of Hooks${n.currentDecoratorName ? ` called by ${n.currentDecoratorName}` : ''}. This will lead to bugs and errors if not fixed.`
            ),
          r != null &&
            o.deps == null &&
            me.warn(
              `${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`
            ),
          r != null &&
            o.deps != null &&
            r.length !== o.deps.length &&
            me.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${o.deps}
Incoming: ${r}`),
          (r == null || o.deps == null || !l5(r, o.deps)) &&
            (t(o), (o.deps = r)),
          o
        );
      }
      throw Is();
    }
    m(xg, 'useHook');
    function Jn(e, t, r) {
      let { memoizedState: n } = xg(
        e,
        (o) => {
          o.memoizedState = t();
        },
        r
      );
      return n;
    }
    m(Jn, 'useMemoLike');
    function u5(e, t) {
      return Jn('useMemo', e, t);
    }
    m(u5, 'useMemo');
    function Bn(e, t) {
      return Jn('useCallback', () => e, t);
    }
    m(Bn, 'useCallback');
    function ks(e, t) {
      return Jn(e, () => ({ current: t }), []);
    }
    m(ks, 'useRefLike');
    function c5(e) {
      return ks('useRef', e);
    }
    m(c5, 'useRef');
    function Eg() {
      let e = Ps();
      if (e != null && e.currentPhase !== 'NONE') e.hasUpdates = !0;
      else
        try {
          pr.getChannel().emit(co);
        } catch {
          me.warn(
            'State updates of Storybook preview hooks work only in browser'
          );
        }
    }
    m(Eg, 'triggerUpdate');
    function Rs(e, t) {
      let r = ks(e, typeof t == 'function' ? t() : t),
        n = m((o) => {
          (r.current = typeof o == 'function' ? o(r.current) : o), Eg();
        }, 'setState');
      return [r.current, n];
    }
    m(Rs, 'useStateLike');
    function p5(e) {
      return Rs('useState', e);
    }
    m(p5, 'useState');
    function d5(e, t, r) {
      let n = r != null ? () => r(t) : t,
        [o, a] = Rs('useReducer', n);
      return [o, m((i) => a((s) => e(s, i)), 'dispatch')];
    }
    m(d5, 'useReducer');
    function wg(e, t) {
      let r = na(),
        n = Jn('useEffect', () => ({ create: e }), t);
      r.currentEffects.includes(n) || r.currentEffects.push(n);
    }
    m(wg, 'useEffect');
    function f5(e, t = []) {
      let r = pr.getChannel();
      return (
        wg(
          () => (
            Object.entries(e).forEach(([n, o]) => r.on(n, o)),
            () => {
              Object.entries(e).forEach(([n, o]) => r.removeListener(n, o));
            }
          ),
          [...Object.keys(e), ...t]
        ),
        Bn(r.emit.bind(r), [r])
      );
    }
    m(f5, 'useChannel');
    function oa() {
      let { currentContext: e } = na();
      if (e == null) throw Is();
      return e;
    }
    m(oa, 'useStoryContext');
    function y5(e, t) {
      let { parameters: r } = oa();
      if (e) return r[e] ?? t;
    }
    m(y5, 'useParameter');
    function h5() {
      let e = pr.getChannel(),
        { id: t, args: r } = oa(),
        n = Bn((a) => e.emit(ho, { storyId: t, updatedArgs: a }), [e, t]),
        o = Bn((a) => e.emit(po, { storyId: t, argNames: a }), [e, t]);
      return [r, n, o];
    }
    m(h5, 'useArgs');
    function m5() {
      let e = pr.getChannel(),
        { globals: t } = oa(),
        r = Bn((n) => e.emit(yo, { globals: n }), [e]);
      return [t, r];
    }
    m(m5, 'useGlobals');
    var Ere = m(
        ({
          name: e,
          parameterName: t,
          wrapper: r,
          skipIfNoParametersOrOptions: n = !1,
        }) => {
          let o = m(
            (a) => (i, s) => {
              let l = s.parameters && s.parameters[t];
              return (l && l.disable) || (n && !a && !l)
                ? i(s)
                : r(i, s, { options: a, parameters: l });
            },
            'decorator'
          );
          return (...a) =>
            typeof a[0] == 'function'
              ? o()(...a)
              : (...i) => {
                  if (i.length > 1)
                    return a.length > 1 ? o(a)(...i) : o(...a)(...i);
                  throw new Error(`Passing stories directly into ${e}() is not allowed,
        instead use addDecorator(${e}) and pass options with the '${t}' parameter`);
                };
        },
        'makeDecorator'
      ),
      Ki = Qe(Lm(), 1),
      g5 = Qe(ra(), 1),
      Am = Qe(_R(), 1),
      b5 = Qe(Lm(), 1),
      v5 = (0, b5.default)(1)((e) =>
        Object.values(e).reduce(
          (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
          {}
        )
      ),
      Sg = class {
        entries;
        constructor({ entries: t } = { v: 5, entries: {} }) {
          this.entries = t;
        }
        entryFromSpecifier(t) {
          let r = Object.values(this.entries);
          if (t === '*') return r[0];
          if (typeof t == 'string')
            return this.entries[t]
              ? this.entries[t]
              : r.find((a) => a.id.startsWith(t));
          let { name: n, title: o } = t;
          return r.find((a) => a.name === n && a.title === o);
        }
        storyIdToEntry(t) {
          let r = this.entries[t];
          if (!r) throw new $h({ storyId: t });
          return r;
        }
        importPathToEntry(t) {
          return v5(this.entries)[t];
        }
      };
    m(Sg, 'StoryIndexStore');
    var x5 = Sg,
      Tm = Object.prototype.hasOwnProperty;
    function ts(e, t, r) {
      for (r of e.keys()) if (Vr(r, t)) return r;
    }
    m(ts, 'find');
    function Vr(e, t) {
      var r, n, o;
      if (e === t) return !0;
      if (e && t && (r = e.constructor) === t.constructor) {
        if (r === Date) return e.getTime() === t.getTime();
        if (r === RegExp) return e.toString() === t.toString();
        if (r === Array) {
          if ((n = e.length) === t.length) for (; n-- && Vr(e[n], t[n]); );
          return n === -1;
        }
        if (r === Set) {
          if (e.size !== t.size) return !1;
          for (n of e)
            if (
              ((o = n),
              (o && typeof o == 'object' && ((o = ts(t, o)), !o)) || !t.has(o))
            )
              return !1;
          return !0;
        }
        if (r === Map) {
          if (e.size !== t.size) return !1;
          for (n of e)
            if (
              ((o = n[0]),
              (o && typeof o == 'object' && ((o = ts(t, o)), !o)) ||
                !Vr(n[1], t.get(o)))
            )
              return !1;
          return !0;
        }
        if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
        else if (r === DataView) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e.getInt8(n) === t.getInt8(n); );
          return n === -1;
        }
        if (ArrayBuffer.isView(e)) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e[n] === t[n]; );
          return n === -1;
        }
        if (!r || typeof e == 'object') {
          n = 0;
          for (r in e)
            if (
              (Tm.call(e, r) && ++n && !Tm.call(t, r)) ||
              !(r in t) ||
              !Vr(e[r], t[r])
            )
              return !1;
          return Object.keys(t).length === n;
        }
      }
      return e !== e && t !== t;
    }
    m(Vr, 'dequal');
    var Ho = Qe(As(), 1);
    function lt(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = Array.from(typeof e == 'string' ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var o = n.reduce(function (s, l) {
        var u = l.match(/\n([\t ]+|(?!\s).)/g);
        return u
          ? s.concat(
              u.map(function (c) {
                var d, y;
                return (y =
                  (d = c.match(/[\t ]/g)) === null || d === void 0
                    ? void 0
                    : d.length) !== null && y !== void 0
                  ? y
                  : 0;
              })
            )
          : s;
      }, []);
      if (o.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            '}',
          'g'
        );
        n = n.map(function (s) {
          return s.replace(
            a,
            `
`
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, '');
      var i = n[0];
      return (
        t.forEach(function (s, l) {
          var u = i.match(/(?:^|\n)( *)$/),
            c = u ? u[1] : '',
            d = s;
          typeof s == 'string' &&
            s.includes(`
`) &&
            (d = String(s)
              .split(
                `
`
              )
              .map(function (y, f) {
                return f === 0 ? y : '' + c + y;
              }).join(`
`)),
            (i += d + n[l + 1]);
        }),
        i
      );
    }
    m(lt, 'dedent');
    var $r = Symbol('incompatible'),
      rs = m((e, t) => {
        let r = t.type;
        if (e == null || !r || t.mapping) return e;
        switch (r.name) {
          case 'string':
            return String(e);
          case 'enum':
            return e;
          case 'number':
            return Number(e);
          case 'boolean':
            return String(e) === 'true';
          case 'array':
            return !r.value || !Array.isArray(e)
              ? $r
              : e.reduce((n, o, a) => {
                  let i = rs(o, { type: r.value });
                  return i !== $r && (n[a] = i), n;
                }, new Array(e.length));
          case 'object':
            return typeof e == 'string' || typeof e == 'number'
              ? e
              : !r.value || typeof e != 'object'
                ? $r
                : Object.entries(e).reduce((n, [o, a]) => {
                    let i = rs(a, { type: r.value[o] });
                    return i === $r ? n : Object.assign(n, { [o]: i });
                  }, {});
          default:
            return $r;
        }
      }, 'map'),
      E5 = m(
        (e, t) =>
          Object.entries(e).reduce((r, [n, o]) => {
            if (!t[n]) return r;
            let a = rs(o, t[n]);
            return a === $r ? r : Object.assign(r, { [n]: a });
          }, {}),
        'mapArgsToTypes'
      ),
      ns = m(
        (e, t) =>
          Array.isArray(e) && Array.isArray(t)
            ? t
                .reduce((r, n, o) => ((r[o] = ns(e[o], t[o])), r), [...e])
                .filter((r) => r !== void 0)
            : !(0, Ho.default)(e) || !(0, Ho.default)(t)
              ? t
              : Object.keys({ ...e, ...t }).reduce((r, n) => {
                  if (n in t) {
                    let o = ns(e[n], t[n]);
                    o !== void 0 && (r[n] = o);
                  } else r[n] = e[n];
                  return r;
                }, {}),
        'combineArgs'
      ),
      w5 = m(
        (e, t) =>
          Object.entries(t).reduce((r, [n, { options: o }]) => {
            function a() {
              return n in e && (r[n] = e[n]), r;
            }
            if ((m(a, 'allowArg'), !o)) return a();
            if (!Array.isArray(o))
              return (
                Ut.error(lt`
        Invalid argType: '${n}.options' should be an array.

        More info: https://storybook.js.org/docs/react/api/argtypes
      `),
                a()
              );
            if (o.some((d) => d && ['object', 'function'].includes(typeof d)))
              return (
                Ut.error(lt`
        Invalid argType: '${n}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      `),
                a()
              );
            let i = Array.isArray(e[n]),
              s = i && e[n].findIndex((d) => !o.includes(d)),
              l = i && s === -1;
            if (e[n] === void 0 || o.includes(e[n]) || l) return a();
            let u = i ? `${n}[${s}]` : n,
              c = o
                .map((d) => (typeof d == 'string' ? `'${d}'` : String(d)))
                .join(', ');
            return (
              Ut.warn(
                `Received illegal value for '${u}'. Supported options: ${c}`
              ),
              r
            );
          }, {}),
        'validateOptions'
      ),
      jn = Symbol('Deeply equal'),
      Go = m((e, t) => {
        if (typeof e != typeof t) return t;
        if (Vr(e, t)) return jn;
        if (Array.isArray(e) && Array.isArray(t)) {
          let r = t.reduce((n, o, a) => {
            let i = Go(e[a], o);
            return i !== jn && (n[a] = i), n;
          }, new Array(t.length));
          return t.length >= e.length
            ? r
            : r.concat(new Array(e.length - t.length).fill(void 0));
        }
        return (0, Ho.default)(e) && (0, Ho.default)(t)
          ? Object.keys({ ...e, ...t }).reduce((r, n) => {
              let o = Go(e?.[n], t?.[n]);
              return o === jn ? r : Object.assign(r, { [n]: o });
            }, {})
          : t;
      }, 'deepDiff'),
      Ag = 'UNTARGETED';
    function Tg({ args: e, argTypes: t }) {
      let r = {};
      return (
        Object.entries(e).forEach(([n, o]) => {
          let { target: a = Ag } = t[n] || {};
          (r[a] = r[a] || {}), (r[a][n] = o);
        }),
        r
      );
    }
    m(Tg, 'groupArgsByTarget');
    function Cg(e) {
      return Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e;
    }
    m(Cg, 'deleteUndefined');
    var _g = class {
      initialArgsByStoryId = {};
      argsByStoryId = {};
      get(t) {
        if (!(t in this.argsByStoryId))
          throw new Error(
            `No args known for ${t} -- has it been rendered yet?`
          );
        return this.argsByStoryId[t];
      }
      setInitial(t) {
        if (!this.initialArgsByStoryId[t.id])
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs);
        else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
          let r = Go(this.initialArgsByStoryId[t.id], this.argsByStoryId[t.id]);
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs),
            r !== jn && this.updateFromDelta(t, r);
        }
      }
      updateFromDelta(t, r) {
        let n = w5(r, t.argTypes);
        this.argsByStoryId[t.id] = ns(this.argsByStoryId[t.id], n);
      }
      updateFromPersisted(t, r) {
        let n = E5(r, t.argTypes);
        return this.updateFromDelta(t, n);
      }
      update(t, r) {
        if (!(t in this.argsByStoryId))
          throw new Error(
            `No args known for ${t} -- has it been rendered yet?`
          );
        this.argsByStoryId[t] = Cg({ ...this.argsByStoryId[t], ...r });
      }
    };
    m(_g, 'ArgsStore');
    var S5 = _g,
      Og = m(
        (e = {}) =>
          Object.entries(e).reduce(
            (t, [r, { defaultValue: n }]) => (typeof n < 'u' && (t[r] = n), t),
            {}
          ),
        'getValuesFromArgTypes'
      ),
      Ig = class {
        allowedGlobalNames;
        initialGlobals;
        globals;
        constructor({ globals: t = {}, globalTypes: r = {} }) {
          this.set({ globals: t, globalTypes: r });
        }
        set({ globals: t = {}, globalTypes: r = {} }) {
          let n = this.initialGlobals && Go(this.initialGlobals, this.globals);
          this.allowedGlobalNames = new Set([
            ...Object.keys(t),
            ...Object.keys(r),
          ]);
          let o = Og(r);
          (this.initialGlobals = { ...o, ...t }),
            (this.globals = this.initialGlobals),
            n && n !== jn && this.updateFromPersisted(n);
        }
        filterAllowedGlobals(t) {
          return Object.entries(t).reduce(
            (r, [n, o]) => (
              this.allowedGlobalNames.has(n)
                ? (r[n] = o)
                : me.warn(
                    `Attempted to set a global (${n}) that is not defined in initial globals or globalTypes`
                  ),
              r
            ),
            {}
          );
        }
        updateFromPersisted(t) {
          let r = this.filterAllowedGlobals(t);
          this.globals = { ...this.globals, ...r };
        }
        get() {
          return this.globals;
        }
        update(t) {
          this.globals = { ...this.globals, ...this.filterAllowedGlobals(t) };
        }
      };
    m(Ig, 'GlobalsStore');
    var A5 = Ig,
      T5 = Qe(ra(), 1),
      C5 = m((e) => (typeof e == 'string' ? { name: e } : e), 'normalizeType'),
      _5 = m(
        (e) => (typeof e == 'string' ? { type: e } : e),
        'normalizeControl'
      ),
      O5 = m((e, t) => {
        let { type: r, control: n, ...o } = e,
          a = { name: t, ...o };
        return (
          r && (a.type = C5(r)),
          n ? (a.control = _5(n)) : n === !1 && (a.control = { disable: !0 }),
          a
        );
      }, 'normalizeInputType'),
      Wo = m((e) => (0, T5.default)(e, O5), 'normalizeInputTypes'),
      Fe = m((e) => (Array.isArray(e) ? e : e ? [e] : []), 'normalizeArrays'),
      I5 = lt`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
    function Ds(e, t, r) {
      let n = t,
        o = typeof t == 'function' ? t : null,
        { story: a } = n;
      a && (me.debug('deprecated story', a), Ct(I5));
      let i = xm(e),
        s = (typeof n != 'function' && n.name) || n.storyName || a?.name || i,
        l = [...Fe(n.decorators), ...Fe(a?.decorators)],
        u = { ...a?.parameters, ...n.parameters },
        c = { ...a?.args, ...n.args },
        d = { ...a?.argTypes, ...n.argTypes },
        y = [...Fe(n.loaders), ...Fe(a?.loaders)],
        f = [...Fe(n.beforeEach), ...Fe(a?.beforeEach)],
        { render: h, play: g, tags: _ = [] } = n,
        x = u.__id || vm(r.id, i);
      return {
        moduleExport: t,
        id: x,
        name: s,
        tags: _,
        decorators: l,
        parameters: u,
        args: c,
        argTypes: Wo(d),
        loaders: y,
        beforeEach: f,
        ...(h && { render: h }),
        ...(o && { userStoryFn: o }),
        ...(g && { play: g }),
      };
    }
    m(Ds, 'normalizeStory');
    function Fs(e, t = e.title, r) {
      let { id: n, argTypes: o } = e;
      return {
        id: Hi(n || t),
        ...e,
        title: t,
        ...(o && { argTypes: Wo(o) }),
        parameters: { fileName: r, ...e.parameters },
      };
    }
    m(Fs, 'normalizeComponentAnnotations');
    var P5 = m((e) => {
        let { globals: t, globalTypes: r } = e;
        (t || r) &&
          me.error(
            'Global args/argTypes can only be set globally',
            JSON.stringify({ globals: t, globalTypes: r })
          );
      }, 'checkGlobals'),
      k5 = m((e) => {
        let { options: t } = e;
        t?.storySort &&
          me.error('The storySort option parameter can only be set globally');
      }, 'checkStorySort'),
      Cm = m((e) => {
        e && (P5(e), k5(e));
      }, 'checkDisallowedParameters');
    function Pg(e, t, r) {
      let { default: n, __namedExportsOrder: o, ...a } = e,
        i = Fs(n, r, t);
      Cm(i.parameters);
      let s = { meta: i, stories: {}, moduleExports: e };
      return (
        Object.keys(a).forEach((l) => {
          if (Jo(l, i)) {
            let u = Ds(l, a[l], i);
            Cm(u.parameters), (s.stories[u.id] = u);
          }
        }),
        s
      );
    }
    m(Pg, 'processCSFFile');
    var Yi = Qe(As(), 1),
      Ot = m((...e) => {
        let t = {},
          r = e.filter(Boolean),
          n = r.reduce(
            (o, a) => (
              Object.entries(a).forEach(([i, s]) => {
                let l = o[i];
                Array.isArray(s) || typeof l > 'u'
                  ? (o[i] = s)
                  : (0, Yi.default)(s) && (0, Yi.default)(l)
                    ? (t[i] = !0)
                    : typeof s < 'u' && (o[i] = s);
              }),
              o
            ),
            {}
          );
        return (
          Object.keys(t).forEach((o) => {
            let a = r
              .filter(Boolean)
              .map((i) => i[o])
              .filter((i) => typeof i < 'u');
            a.every((i) => (0, Yi.default)(i))
              ? (n[o] = Ot(...a))
              : (n[o] = a[a.length - 1]);
          }),
          n
        );
      }, 'combineParameters');
    function kg(e, t, r) {
      let n = r(e);
      return (o) => t(n, o);
    }
    m(kg, 'decorateStory');
    function Rg({
      componentId: e,
      title: t,
      kind: r,
      id: n,
      name: o,
      story: a,
      parameters: i,
      initialArgs: s,
      argTypes: l,
      ...u
    } = {}) {
      return u;
    }
    m(Rg, 'sanitizeStoryContextUpdate');
    function Dg(e, t) {
      let r = {},
        n = m(
          (a) => (i) => {
            if (!r.value)
              throw new Error('Decorated function called without init');
            return (r.value = { ...r.value, ...Rg(i) }), a(r.value);
          },
          'bindWithContext'
        ),
        o = t.reduce((a, i) => kg(a, i, n), e);
      return (a) => ((r.value = a), o(a));
    }
    m(Dg, 'defaultDecorateStory');
    function Fg(e) {
      return e != null && jg(e).includes('mount');
    }
    m(Fg, 'mountDestructured');
    function jg(e) {
      let t = e.toString().match(/[^(]*\(([^)]*)/);
      if (!t) return [];
      let r = os(t[1]);
      if (!r.length) return [];
      let n = r[0];
      return n.startsWith('{') && n.endsWith('}')
        ? os(n.slice(1, -1).replace(/\s/g, '')).map((o) =>
            o.replace(/:.*|=.*/g, '')
          )
        : [];
    }
    m(jg, 'getUsedProps');
    function os(e) {
      let t = [],
        r = [],
        n = 0;
      for (let a = 0; a < e.length; a++)
        if (e[a] === '{' || e[a] === '[') r.push(e[a] === '{' ? '}' : ']');
        else if (e[a] === r[r.length - 1]) r.pop();
        else if (!r.length && e[a] === ',') {
          let i = e.substring(n, a).trim();
          i && t.push(i), (n = a + 1);
        }
      let o = e.substring(n).trim();
      return o && t.push(o), t;
    }
    m(os, 'splitByComma');
    function js(e, t, r) {
      let { moduleExport: n, id: o, name: a } = e || {},
        i = Ns(e, t, r),
        s = m(async (I) => {
          let P = {};
          for (let F of [
            ...('__STORYBOOK_TEST_LOADERS__' in Ue &&
            Array.isArray(Ue.__STORYBOOK_TEST_LOADERS__)
              ? [Ue.__STORYBOOK_TEST_LOADERS__]
              : []),
            Fe(r.loaders),
            Fe(t.loaders),
            Fe(e.loaders),
          ]) {
            if (I.abortSignal.aborted) return P;
            let D = await Promise.all(F.map((U) => U(I)));
            Object.assign(P, ...D);
          }
          return P;
        }, 'applyLoaders'),
        l = m(async (I) => {
          let P = new Array();
          for (let F of [
            ...Fe(r.beforeEach),
            ...Fe(t.beforeEach),
            ...Fe(e.beforeEach),
          ]) {
            if (I.abortSignal.aborted) return P;
            let D = await F(I);
            D && P.push(D);
          }
          return P;
        }, 'applyBeforeEach'),
        u = m((I) => I.originalStoryFn(I.args, I), 'undecoratedStoryFn'),
        { applyDecorators: c = Dg, runStep: d } = r,
        y = [...Fe(e?.decorators), ...Fe(t?.decorators), ...Fe(r?.decorators)],
        f = e?.userStoryFn || e?.render || t.render || r.render,
        h = s5(c)(u, y),
        g = m((I) => h(I), 'unboundStoryFn'),
        _ = e?.play ?? t?.play,
        x = Fg(_);
      if (!f && !x) throw new um({ id: o });
      let v = m(
          (I) => async () => (await I.renderToCanvas(), I.canvas),
          'defaultMount'
        ),
        O = e.mount ?? t.mount ?? r.mount ?? v,
        C = r.testingLibraryRender;
      return {
        ...i,
        moduleExport: n,
        id: o,
        name: a,
        story: a,
        originalStoryFn: f,
        undecoratedStoryFn: u,
        unboundStoryFn: g,
        applyLoaders: s,
        applyBeforeEach: l,
        playFunction: _,
        runStep: d,
        mount: O,
        testingLibraryRender: C,
        renderToCanvas: r.renderToCanvas,
        usesMount: x,
      };
    }
    m(js, 'prepareStory');
    function Ng(e, t, r) {
      return { ...Ns(void 0, e, t), moduleExport: r };
    }
    m(Ng, 'prepareMeta');
    function Ns(e, t, r) {
      let n = ['dev', 'test'],
        o = Ue.DOCS_OPTIONS?.autodocs === !0 ? ['autodocs'] : [],
        a = Em(
          ...n,
          ...o,
          ...(r.tags ?? []),
          ...(t.tags ?? []),
          ...(e?.tags ?? [])
        ),
        i = Ot(r.parameters, t.parameters, e?.parameters),
        { argTypesEnhancers: s = [], argsEnhancers: l = [] } = r,
        u = Ot(r.argTypes, t.argTypes, e?.argTypes);
      if (e) {
        let _ = e?.userStoryFn || e?.render || t.render || r.render;
        i.__isArgsStory = _ && _.length > 0;
      }
      let c = { ...r.args, ...t.args, ...e?.args },
        d = {
          componentId: t.id,
          title: t.title,
          kind: t.title,
          id: e?.id || t.id,
          name: e?.name || '__meta',
          story: e?.name || '__meta',
          component: t.component,
          subcomponents: t.subcomponents,
          tags: a,
          parameters: i,
          initialArgs: c,
          argTypes: u,
        };
      d.argTypes = s.reduce((_, x) => x({ ...d, argTypes: _ }), d.argTypes);
      let y = { ...c };
      d.initialArgs = l.reduce(
        (_, x) => ({ ..._, ...x({ ...d, initialArgs: _ }) }),
        y
      );
      let { name: f, story: h, ...g } = d;
      return g;
    }
    m(Ns, 'preparePartialAnnotations');
    function Bs(e) {
      let { args: t } = e,
        r = { ...e, allArgs: void 0, argsByTarget: void 0 };
      if (Ue.FEATURES?.argTypeTargetsV7) {
        let a = Tg(e);
        r = { ...e, allArgs: e.args, argsByTarget: a, args: a[Ag] || {} };
      }
      let n = Object.entries(r.args).reduce((a, [i, s]) => {
          if (!r.argTypes[i]?.mapping) return (a[i] = s), a;
          let l = m((u) => {
            let c = r.argTypes[i].mapping;
            return c && u in c ? c[u] : u;
          }, 'mappingFn');
          return (a[i] = Array.isArray(s) ? s.map(l) : l(s)), a;
        }, {}),
        o = Object.entries(n).reduce((a, [i, s]) => {
          let l = r.argTypes[i] || {};
          return bm(l, n, r.globals) && (a[i] = s), a;
        }, {});
      return { ...r, unmappedArgs: t, args: o };
    }
    m(Bs, 'prepareContext');
    var as = Qe(ra(), 1),
      is = m((e, t, r) => {
        let n = typeof e;
        switch (n) {
          case 'boolean':
          case 'string':
          case 'number':
          case 'function':
          case 'symbol':
            return { name: n };
          default:
            break;
        }
        return e
          ? r.has(e)
            ? (me.warn(lt`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
              { name: 'other', value: 'cyclic object' })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: 'array',
                    value:
                      e.length > 0
                        ? is(e[0], t, new Set(r))
                        : { name: 'other', value: 'unknown' },
                  }
                : {
                    name: 'object',
                    value: (0, as.default)(e, (o) => is(o, t, new Set(r))),
                  })
          : { name: 'object', value: {} };
      }, 'inferType'),
      Bg = m((e) => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          o = (0, as.default)(n, (i, s) => ({
            name: s,
            type: is(i, `${t}.${s}`, new Set()),
          })),
          a = (0, as.default)(r, (i, s) => ({ name: s }));
        return Ot(o, a, r);
      }, 'inferArgTypes');
    Bg.secondPass = !0;
    var R5 = Qe(ra(), 1),
      D5 = Qe(DR(), 1),
      _m = m(
        (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
        'matches'
      ),
      F5 = m(
        (e, t, r) =>
          !t && !r
            ? e
            : e &&
              (0, D5.default)(e, (n, o) => {
                let a = n.name || o;
                return (!t || _m(a, t)) && (!r || !_m(a, r));
              }),
        'filterArgTypes'
      ),
      j5 = m((e, t, r) => {
        let { type: n, options: o } = e;
        if (n) {
          if (r.color && r.color.test(t)) {
            let a = n.name;
            if (a === 'string') return { control: { type: 'color' } };
            a !== 'enum' &&
              me.warn(
                `Addon controls: Control of type color only supports string, received "${a}" instead`
              );
          }
          if (r.date && r.date.test(t)) return { control: { type: 'date' } };
          switch (n.name) {
            case 'array':
              return { control: { type: 'object' } };
            case 'boolean':
              return { control: { type: 'boolean' } };
            case 'string':
              return { control: { type: 'text' } };
            case 'number':
              return { control: { type: 'number' } };
            case 'enum': {
              let { value: a } = n;
              return {
                control: { type: a?.length <= 5 ? 'radio' : 'select' },
                options: a,
              };
            }
            case 'function':
            case 'symbol':
              return null;
            default:
              return { control: { type: o ? 'select' : 'object' } };
          }
        }
      }, 'inferControl'),
      Lg = m((e) => {
        let {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: {
              include: n = null,
              exclude: o = null,
              matchers: a = {},
            } = {},
          },
        } = e;
        if (!r) return t;
        let i = F5(t, n, o),
          s = (0, R5.default)(i, (l, u) => l?.type && j5(l, u, a));
        return Ot(s, i);
      }, 'inferControls');
    Lg.secondPass = !0;
    function Ko({
      argTypes: e,
      globalTypes: t,
      argTypesEnhancers: r,
      decorators: n,
      loaders: o,
      beforeEach: a,
      globals: i,
      initialGlobals: s,
      ...l
    }) {
      return (
        i &&
          Object.keys(i).length > 0 &&
          Ct(lt`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `),
        {
          ...(e && { argTypes: Wo(e) }),
          ...(t && { globalTypes: Wo(t) }),
          decorators: Fe(n),
          loaders: Fe(o),
          beforeEach: Fe(a),
          argTypesEnhancers: [...(r || []), Bg, Lg],
          initialGlobals: Ot(s, i),
          ...l,
        }
      );
    }
    m(Ko, 'normalizeProjectAnnotations');
    function qg(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (o, a) => async () => a(t, o, n),
          async () => r(n)
        )();
      };
    }
    m(qg, 'composeStepRunners');
    var N5 = m(
      (e) => async () => {
        let t = [];
        for (let r of e) {
          let n = await r();
          n && t.unshift(n);
        }
        return async () => {
          for (let r of t) await r();
        };
      },
      'composeBeforeAllHooks'
    );
    function Hr(e, t) {
      return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
    }
    m(Hr, 'getField');
    function Jt(e, t, r = {}) {
      return Hr(e, t).reduce((n, o) => {
        let a = Fe(o);
        return r.reverseFileOrder ? [...a, ...n] : [...n, ...a];
      }, []);
    }
    m(Jt, 'getArrayField');
    function zr(e, t) {
      return Object.assign({}, ...Hr(e, t));
    }
    m(zr, 'getObjectField');
    function lr(e, t) {
      return Hr(e, t).pop();
    }
    m(lr, 'getSingletonField');
    function Ls(e) {
      let t = Jt(e, 'argTypesEnhancers'),
        r = Hr(e, 'runStep'),
        n = Jt(e, 'beforeAll');
      return {
        parameters: Ot(...Hr(e, 'parameters')),
        decorators: Jt(e, 'decorators', {
          reverseFileOrder: !(Ue.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: zr(e, 'args'),
        argsEnhancers: Jt(e, 'argsEnhancers'),
        argTypes: zr(e, 'argTypes'),
        argTypesEnhancers: [
          ...t.filter((o) => !o.secondPass),
          ...t.filter((o) => o.secondPass),
        ],
        globals: zr(e, 'globals'),
        initialGlobals: zr(e, 'initialGlobals'),
        globalTypes: zr(e, 'globalTypes'),
        loaders: Jt(e, 'loaders'),
        beforeAll: N5(n),
        beforeEach: Jt(e, 'beforeEach'),
        render: lr(e, 'render'),
        renderToCanvas: lr(e, 'renderToCanvas'),
        renderToDOM: lr(e, 'renderToDOM'),
        applyDecorators: lr(e, 'applyDecorators'),
        runStep: qg(r),
        tags: Jt(e, 'tags'),
        mount: lr(e, 'mount'),
        testingLibraryRender: lr(e, 'testingLibraryRender'),
      };
    }
    m(Ls, 'composeConfigs');
    var Yo = {},
      B5 = 'ComposedStory',
      L5 = 'Unnamed Story';
    function Mg(e) {
      return e ? ('default' in e ? e.default : e) : {};
    }
    m(Mg, 'extractAnnotation');
    function q5(e) {
      let t = Array.isArray(e) ? e : [e];
      return (Yo = Ls(t.map(Mg))), Yo;
    }
    m(q5, 'setProjectAnnotations');
    var ur = [];
    function M5(e, t, r, n, o) {
      if (e === void 0)
        throw new Error('Expected a story but received undefined.');
      t.title = t.title ?? B5;
      let a = Fs(t),
        i = o || e.storyName || e.story?.name || e.name || L5,
        s = Ds(i, e, a),
        l = n && !Yo?.testingLibraryRender && !r?.testingLibraryRender,
        u = Ko(
          Ls([
            { ...n, renderToCanvas: l ? void 0 : n?.renderToCanvas },
            Yo,
            r ?? {},
          ])
        ),
        c = js(s, a, u),
        d = Og(u.globalTypes),
        y = m(() => {
          let x = Bs({
            hooks: new vg(),
            globals: { ...d, ...u.initialGlobals },
            args: { ...c.initialArgs },
            viewMode: 'story',
            loaded: {},
            abortSignal: new AbortController().signal,
            step: m((v, O) => c.runStep(v, O, x), 'step'),
            canvasElement: globalThis?.document?.body,
            canvas: {},
            ...c,
            context: null,
            mount: null,
          });
          return (
            (x.context = x),
            c.renderToCanvas &&
              (x.renderToCanvas = async () => {
                let v = await c.renderToCanvas?.(
                  {
                    componentId: c.componentId,
                    title: c.title,
                    id: c.id,
                    name: c.name,
                    tags: c.tags,
                    showError: m((O) => {}, 'showError'),
                    showException: m((O) => {}, 'showException'),
                    forceRemount: !0,
                    storyContext: x,
                    storyFn: m(() => c.unboundStoryFn(x), 'storyFn'),
                    unboundStoryFn: c.unboundStoryFn,
                  },
                  x.canvasElement
                );
                v && ur.push(v);
              }),
            (x.mount = c.mount(x)),
            x
          );
        }, 'initializeContext'),
        f,
        h = m(async (x) => {
          let v = y();
          return (
            f && (v.loaded = f.loaded), Object.assign(v, x), c.playFunction(v)
          );
        }, 'backwardsCompatiblePlay'),
        g = m((x) => {
          let v = y();
          return Object.assign(v, x), Ug(c, v);
        }, 'newPlay'),
        _ =
          !c.renderToCanvas && c.playFunction
            ? h
            : !c.renderToCanvas && !c.playFunction
              ? void 0
              : g;
      return Object.assign(
        m(function (x) {
          let v = y();
          return (
            f && (v.loaded = f.loaded),
            (v.args = { ...v.initialArgs, ...x }),
            c.unboundStoryFn(v)
          );
        }, 'storyFn'),
        {
          id: c.id,
          storyName: i,
          load: m(async () => {
            for (let v of [...ur].reverse()) await v();
            ur.length = 0;
            let x = y();
            (x.loaded = await c.applyLoaders(x)),
              ur.push(...(await c.applyBeforeEach(x)).filter(Boolean)),
              (f = x);
          }, 'load'),
          args: c.initialArgs,
          parameters: c.parameters,
          argTypes: c.argTypes,
          play: _,
          tags: c.tags,
        }
      );
    }
    m(M5, 'composeStory');
    function U5(e, t, r) {
      let { default: n, __esModule: o, __namedExportsOrder: a, ...i } = e;
      return Object.entries(i).reduce(
        (s, [l, u]) =>
          Jo(l, n) ? Object.assign(s, { [l]: r(u, n, t, l) }) : s,
        {}
      );
    }
    m(U5, 'composeStories');
    function J5(e) {
      return e.extend({
        mount: m(async ({ mount: t, page: r }, n) => {
          await n(async (o, ...a) => {
            if (
              !('__pw_type' in o) ||
              ('__pw_type' in o && o.__pw_type !== 'jsx')
            )
              throw new Error(lt`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
            await r.evaluate(async (s) => {
              let l = await globalThis.__pwUnwrapObject?.(s);
              return ('__pw_type' in l ? l.type : l)?.load?.();
            }, o);
            let i = await t(o, ...a);
            return (
              await r.evaluate(async (s) => {
                let l = await globalThis.__pwUnwrapObject?.(s),
                  u = '__pw_type' in l ? l.type : l,
                  c = document.querySelector('#root');
                return u?.play?.({ canvasElement: c });
              }, o),
              i
            );
          });
        }, 'mount'),
      });
    }
    m(J5, 'createPlaywrightTest');
    async function Ug(e, t) {
      for (let o of [...ur].reverse()) await o();
      if (
        ((ur.length = 0),
        (t.loaded = await e.applyLoaders(t)),
        t.abortSignal.aborted)
      )
        return;
      ur.push(...(await e.applyBeforeEach(t)).filter(Boolean));
      let r = e.playFunction,
        n = e.usesMount;
      n || (await t.mount()),
        !t.abortSignal.aborted &&
          r &&
          (n ||
            (t.mount = async () => {
              throw new Mo({ playFunction: r.toString() });
            }),
          await r(t));
    }
    m(Ug, 'playStory');
    var Om = 1e3,
      $5 = 1e4,
      Jg = class {
        constructor(t, r, n) {
          (this.importFn = r),
            (this.storyIndex = new x5(t)),
            (this.projectAnnotations = Ko(n));
          let { initialGlobals: o, globalTypes: a } = this.projectAnnotations;
          (this.args = new S5()),
            (this.globals = new A5({ globals: o, globalTypes: a })),
            (this.hooks = {}),
            (this.cleanupCallbacks = {}),
            (this.processCSFFileWithCache = (0, Ki.default)(Om)(Pg)),
            (this.prepareMetaWithCache = (0, Ki.default)(Om)(Ng)),
            (this.prepareStoryWithCache = (0, Ki.default)($5)(js));
        }
        storyIndex;
        projectAnnotations;
        globals;
        args;
        hooks;
        cleanupCallbacks;
        cachedCSFFiles;
        processCSFFileWithCache;
        prepareMetaWithCache;
        prepareStoryWithCache;
        setProjectAnnotations(t) {
          this.projectAnnotations = Ko(t);
          let { initialGlobals: r, globalTypes: n } = t;
          this.globals.set({ globals: r, globalTypes: n });
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          t && (this.importFn = t),
            r && (this.storyIndex.entries = r.entries),
            this.cachedCSFFiles && (await this.cacheAllCSFFiles());
        }
        async storyIdToEntry(t) {
          return this.storyIndex.storyIdToEntry(t);
        }
        async loadCSFFileByStoryId(t) {
          let { importPath: r, title: n } = this.storyIndex.storyIdToEntry(t),
            o = await this.importFn(r);
          return this.processCSFFileWithCache(o, r, n);
        }
        async loadAllCSFFiles() {
          let t = {};
          return (
            Object.entries(this.storyIndex.entries).forEach(
              ([r, { importPath: n }]) => {
                t[n] = r;
              }
            ),
            (
              await Promise.all(
                Object.entries(t).map(async ([r, n]) => ({
                  importPath: r,
                  csfFile: await this.loadCSFFileByStoryId(n),
                }))
              )
            ).reduce((r, { importPath: n, csfFile: o }) => ((r[n] = o), r), {})
          );
        }
        async cacheAllCSFFiles() {
          this.cachedCSFFiles = await this.loadAllCSFFiles();
        }
        preparedMetaFromCSFFile({ csfFile: t }) {
          let r = t.meta;
          return this.prepareMetaWithCache(
            r,
            this.projectAnnotations,
            t.moduleExports.default
          );
        }
        async loadStory({ storyId: t }) {
          let r = await this.loadCSFFileByStoryId(t);
          return this.storyFromCSFFile({ storyId: t, csfFile: r });
        }
        storyFromCSFFile({ storyId: t, csfFile: r }) {
          let n = r.stories[t];
          if (!n) throw new om({ storyId: t });
          let o = r.meta,
            a = this.prepareStoryWithCache(n, o, this.projectAnnotations);
          return (
            this.args.setInitial(a),
            (this.hooks[a.id] = this.hooks[a.id] || new vg()),
            a
          );
        }
        componentStoriesFromCSFFile({ csfFile: t }) {
          return Object.keys(this.storyIndex.entries)
            .filter((r) => !!t.stories[r])
            .map((r) => this.storyFromCSFFile({ storyId: r, csfFile: t }));
        }
        async loadEntry(t) {
          let r = await this.storyIdToEntry(t),
            n = r.type === 'docs' ? r.storiesImports : [],
            [o, ...a] = await Promise.all([
              this.importFn(r.importPath),
              ...n.map((i) => {
                let s = this.storyIndex.importPathToEntry(i);
                return this.loadCSFFileByStoryId(s.id);
              }),
            ]);
          return { entryExports: o, csfFiles: a };
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          return Bs({
            ...t,
            args: r ? t.initialArgs : this.args.get(t.id),
            globals: this.globals.get(),
            hooks: this.hooks[t.id],
          });
        }
        addCleanupCallbacks(t, r) {
          this.cleanupCallbacks[t.id] = r;
        }
        async cleanupStory(t) {
          this.hooks[t.id].clean();
          let r = this.cleanupCallbacks[t.id];
          if (r) for (let n of [...r].reverse()) await n();
          delete this.cleanupCallbacks[t.id];
        }
        extract(t = { includeDocsOnly: !1 }) {
          let { cachedCSFFiles: r } = this;
          if (!r) throw new Vh();
          return Object.entries(this.storyIndex.entries).reduce(
            (n, [o, { type: a, importPath: i }]) => {
              if (a === 'docs') return n;
              let s = r[i],
                l = this.storyFromCSFFile({ storyId: o, csfFile: s });
              return (
                (!t.includeDocsOnly && l.parameters.docsOnly) ||
                  (n[o] = Object.entries(l).reduce(
                    (u, [c, d]) =>
                      c === 'moduleExport' || typeof d == 'function'
                        ? u
                        : Array.isArray(d)
                          ? Object.assign(u, { [c]: d.slice().sort() })
                          : Object.assign(u, { [c]: d }),
                    { args: l.initialArgs }
                  )),
                n
              );
            },
            {}
          );
        }
        getSetStoriesPayload() {
          let t = this.extract({ includeDocsOnly: !0 }),
            r = Object.values(t).reduce(
              (n, { title: o }) => ((n[o] = {}), n),
              {}
            );
          return {
            v: 2,
            globals: this.globals.get(),
            globalParameters: {},
            kindParameters: r,
            stories: t,
          };
        }
        getStoriesJsonData = m(() => {
          let t = this.getSetStoriesPayload(),
            r = ['fileName', 'docsOnly', 'framework', '__id', '__isArgsStory'];
          return {
            v: 3,
            stories: (0, g5.default)(t.stories, (n) => {
              let { importPath: o } = this.storyIndex.entries[n.id];
              return {
                ...(0, Am.default)(n, ['id', 'name', 'title']),
                importPath: o,
                kind: n.title,
                story: n.name,
                parameters: {
                  ...(0, Am.default)(n.parameters, r),
                  fileName: o,
                },
              };
            }),
          };
        }, 'getStoriesJsonData');
        raw() {
          return (
            Ct(
              'StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead'
            ),
            Object.values(this.extract())
              .map(({ id: t }) => this.fromId(t))
              .filter(Boolean)
          );
        }
        fromId(t) {
          if (
            (Ct(
              'StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead'
            ),
            !this.cachedCSFFiles)
          )
            throw new Error(
              'Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.'
            );
          let r;
          try {
            ({ importPath: r } = this.storyIndex.storyIdToEntry(t));
          } catch {
            return null;
          }
          let n = this.cachedCSFFiles[r],
            o = this.storyFromCSFFile({ storyId: t, csfFile: n });
          return {
            ...o,
            storyFn: m((a) => {
              let i = {
                ...this.getStoryContext(o),
                abortSignal: new AbortController().signal,
                canvasElement: null,
                loaded: {},
                step: m((s, l) => o.runStep(s, l, i), 'step'),
                context: null,
                mount: null,
                canvas: {},
                viewMode: 'story',
              };
              return o.unboundStoryFn({ ...i, ...a });
            }, 'storyFn'),
          };
        }
      };
    m(Jg, 'StoryStore');
    var z5 = Jg;
    function $g(e) {
      return e.startsWith('\\\\?\\') ? e : e.replace(/\\/g, '/');
    }
    m($g, 'slash');
    var V5 = m((e) => {
      if (e.length === 0) return e;
      let t = e[e.length - 1],
        r = t?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, '');
      if (e.length === 1) return [r];
      let n = e[e.length - 2];
      return r && n && r.toLowerCase() === n.toLowerCase()
        ? [...e.slice(0, -2), r]
        : r && (/^(story|stories)([.][^.]+)$/i.test(t) || /^index$/i.test(r))
          ? e.slice(0, -1)
          : [...e.slice(0, -1), r];
    }, 'sanitize');
    function ss(e) {
      return e
        .flatMap((t) => t.split('/'))
        .filter(Boolean)
        .join('/');
    }
    m(ss, 'pathJoin');
    var H5 = m((e, t, r) => {
        let {
          directory: n,
          importPathMatcher: o,
          titlePrefix: a = '',
        } = t || {};
        typeof e == 'number' &&
          Ut.warn(lt`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
        let i = $g(String(e));
        if (o.exec(i)) {
          if (!r) {
            let s = i.replace(n, ''),
              l = ss([a, s]).split('/');
            return (l = V5(l)), l.join('/');
          }
          return a ? ss([a, r]) : r;
        }
      }, 'userOrAutoTitleFromSpecifier'),
      zre = m((e, t, r) => {
        for (let n = 0; n < t.length; n += 1) {
          let o = H5(e, t[n], r);
          if (o) return o;
        }
        return r || void 0;
      }, 'userOrAutoTitle'),
      Im = /\s*\/\s*/,
      G5 = m(
        (e = {}) =>
          (t, r) => {
            if (t.title === r.title && !e.includeNames) return 0;
            let n = e.method || 'configure',
              o = e.order || [],
              a = t.title.trim().split(Im),
              i = r.title.trim().split(Im);
            e.includeNames && (a.push(t.name), i.push(r.name));
            let s = 0;
            for (; a[s] || i[s]; ) {
              if (!a[s]) return -1;
              if (!i[s]) return 1;
              let l = a[s],
                u = i[s];
              if (l !== u) {
                let d = o.indexOf(l),
                  y = o.indexOf(u),
                  f = o.indexOf('*');
                return d !== -1 || y !== -1
                  ? (d === -1 && (f !== -1 ? (d = f) : (d = o.length)),
                    y === -1 && (f !== -1 ? (y = f) : (y = o.length)),
                    d - y)
                  : n === 'configure'
                    ? 0
                    : l.localeCompare(u, e.locales ? e.locales : void 0, {
                        numeric: !0,
                        sensitivity: 'accent',
                      });
              }
              let c = o.indexOf(l);
              c === -1 && (c = o.indexOf('*')),
                (o = c !== -1 && Array.isArray(o[c + 1]) ? o[c + 1] : []),
                (s += 1);
            }
            return 0;
          },
        'storySort'
      ),
      W5 = m((e, t, r) => {
        if (t) {
          let n;
          typeof t == 'function' ? (n = t) : (n = G5(t)), e.sort(n);
        } else
          e.sort((n, o) => r.indexOf(n.importPath) - r.indexOf(o.importPath));
        return e;
      }, 'sortStoriesCommon'),
      Vre = m((e, t, r) => {
        try {
          return W5(e, t, r);
        } catch (n) {
          throw new Error(lt`
    Error sorting stories with sort parameter ${t}:

    > ${n.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
        }
      }, 'sortStoriesV7'),
      aa = new Error('prepareAborted'),
      { AbortController: Pm } = globalThis;
    function ls(e) {
      try {
        let { name: t = 'Error', message: r = String(e), stack: n } = e;
        return { name: t, message: r, stack: n };
      } catch {
        return { name: 'Error', message: String(e) };
      }
    }
    m(ls, 'serializeError');
    var zg = class {
      constructor(
        t,
        r,
        n,
        o,
        a,
        i,
        s = { autoplay: !0, forceInitialArgs: !1 },
        l
      ) {
        (this.channel = t),
          (this.store = r),
          (this.renderToScreen = n),
          (this.callbacks = o),
          (this.id = a),
          (this.viewMode = i),
          (this.renderOptions = s),
          (this.abortController = new Pm()),
          l && ((this.story = l), (this.phase = 'preparing'));
      }
      type = 'story';
      story;
      phase;
      abortController;
      canvasElement;
      notYetRendered = !0;
      rerenderEnqueued = !1;
      disableKeyListeners = !1;
      teardownRender = m(() => {}, 'teardownRender');
      torndown = !1;
      async runPhase(t, r, n) {
        (this.phase = r),
          this.channel.emit(kr, { newPhase: this.phase, storyId: this.id }),
          n && (await n(), this.checkIfAborted(t));
      }
      checkIfAborted(t) {
        return t.aborted
          ? ((this.phase = 'aborted'),
            this.channel.emit(kr, { newPhase: this.phase, storyId: this.id }),
            !0)
          : !1;
      }
      async prepare() {
        if (
          (await this.runPhase(
            this.abortController.signal,
            'preparing',
            async () => {
              this.story = await this.store.loadStory({ storyId: this.id });
            }
          ),
          this.abortController.signal.aborted)
        )
          throw (await this.store.cleanupStory(this.story), aa);
      }
      isEqual(t) {
        return !!(this.id === t.id && this.story && this.story === t.story);
      }
      isPreparing() {
        return ['preparing'].includes(this.phase);
      }
      isPending() {
        return ['loading', 'beforeEach', 'rendering', 'playing'].includes(
          this.phase
        );
      }
      async renderToElement(t) {
        return (
          (this.canvasElement = t),
          this.render({ initial: !0, forceRemount: !0 })
        );
      }
      storyContext() {
        if (!this.story)
          throw new Error('Cannot call storyContext before preparing');
        let { forceInitialArgs: t } = this.renderOptions;
        return this.store.getStoryContext(this.story, { forceInitialArgs: t });
      }
      async render({ initial: t = !1, forceRemount: r = !1 } = {}) {
        let { canvasElement: n } = this;
        if (!this.story) throw new Error('cannot render when not prepared');
        let o = this.story;
        if (!n) throw new Error('cannot render when canvasElement is unset');
        let {
          id: a,
          componentId: i,
          title: s,
          name: l,
          tags: u,
          applyLoaders: c,
          applyBeforeEach: d,
          unboundStoryFn: y,
          playFunction: f,
          runStep: h,
        } = o;
        r && !t && (this.cancelRender(), (this.abortController = new Pm()));
        let g = this.abortController.signal,
          _ = !1,
          x = o.usesMount;
        try {
          let v = {
            ...this.storyContext(),
            viewMode: this.viewMode,
            abortSignal: g,
            canvasElement: n,
            loaded: {},
            step: m((D, U) => h(D, U, v), 'step'),
            context: null,
            canvas: {},
            renderToCanvas: m(async () => {
              let D = await this.renderToScreen(O, n);
              (this.teardownRender = D || (() => {})), (_ = !0);
            }, 'renderToCanvas'),
            mount: m(async (...D) => {
              this.callbacks.showStoryDuringRender?.();
              let U = null;
              return (
                await this.runPhase(g, 'rendering', async () => {
                  U = await o.mount(v)(...D);
                }),
                x && (await this.runPhase(g, 'playing')),
                U
              );
            }, 'mount'),
          };
          v.context = v;
          let O = {
            componentId: i,
            title: s,
            kind: s,
            id: a,
            name: l,
            story: l,
            tags: u,
            ...this.callbacks,
            showError: m(
              (D) => ((this.phase = 'errored'), this.callbacks.showError(D)),
              'showError'
            ),
            showException: m(
              (D) => (
                (this.phase = 'errored'), this.callbacks.showException(D)
              ),
              'showException'
            ),
            forceRemount: r || this.notYetRendered,
            storyContext: v,
            storyFn: m(() => y(v), 'storyFn'),
            unboundStoryFn: y,
          };
          if (
            (await this.runPhase(g, 'loading', async () => {
              v.loaded = await c(v);
            }),
            g.aborted)
          )
            return;
          let C = await d(v);
          if (
            (this.store.addCleanupCallbacks(o, C),
            this.checkIfAborted(g) ||
              (!_ && !x && (await v.mount()),
              (this.notYetRendered = !1),
              g.aborted))
          )
            return;
          let I =
              this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors ===
              !0,
            P = new Set(),
            F = m((D) => P.add('error' in D ? D.error : D.reason), 'onError');
          if (
            this.renderOptions.autoplay &&
            r &&
            f &&
            this.phase !== 'errored'
          ) {
            window.addEventListener('error', F),
              window.addEventListener('unhandledrejection', F),
              (this.disableKeyListeners = !0);
            try {
              if (
                (x
                  ? await f(v)
                  : ((v.mount = async () => {
                      throw new Mo({ playFunction: f.toString() });
                    }),
                    await this.runPhase(g, 'playing', async () => f(v))),
                !_)
              )
                throw new pm();
              this.checkIfAborted(g),
                !I && P.size > 0
                  ? await this.runPhase(g, 'errored')
                  : await this.runPhase(g, 'played');
            } catch (D) {
              if (
                (this.callbacks.showStoryDuringRender?.(),
                await this.runPhase(g, 'errored', async () => {
                  this.channel.emit(du, ls(D));
                }),
                this.story.parameters.throwPlayFunctionExceptions !== !1)
              )
                throw D;
              console.error(D);
            }
            if (
              (!I && P.size > 0 && this.channel.emit(Tu, Array.from(P).map(ls)),
              (this.disableKeyListeners = !1),
              window.removeEventListener('unhandledrejection', F),
              window.removeEventListener('error', F),
              g.aborted)
            )
              return;
          }
          await this.runPhase(g, 'completed', async () =>
            this.channel.emit(xn, a)
          );
        } catch (v) {
          (this.phase = 'errored'), this.callbacks.showException(v);
        }
        this.rerenderEnqueued && ((this.rerenderEnqueued = !1), this.render());
      }
      async rerender() {
        if (this.isPending() && this.phase !== 'playing')
          this.rerenderEnqueued = !0;
        else return this.render();
      }
      async remount() {
        return await this.teardown(), this.render({ forceRemount: !0 });
      }
      cancelRender() {
        this.abortController?.abort();
      }
      async teardown() {
        (this.torndown = !0),
          this.cancelRender(),
          this.story && (await this.store.cleanupStory(this.story));
        for (let t = 0; t < 3; t += 1) {
          if (!this.isPending()) {
            await this.teardownRender();
            return;
          }
          await new Promise((r) => setTimeout(r, 0));
        }
        window.location.reload(), await new Promise(() => {});
      }
    };
    m(zg, 'StoryRender');
    var Vg = zg,
      { fetch: K5 } = Ue,
      Y5 = './index.json',
      Hg = class {
        constructor(t, r, n = pr.getChannel(), o = !0) {
          (this.importFn = t),
            (this.getProjectAnnotations = r),
            (this.channel = n),
            (this.storeInitializationPromise = new Promise((a, i) => {
              (this.resolveStoreInitializationPromise = a),
                (this.rejectStoreInitializationPromise = i);
            })),
            o && this.initialize();
        }
        serverChannel;
        storyStoreValue;
        renderToCanvas;
        storyRenders = [];
        previewEntryError;
        projectAnnotationsBeforeInitialization;
        beforeAllCleanup;
        storeInitializationPromise;
        resolveStoreInitializationPromise;
        rejectStoreInitializationPromise;
        get storyStore() {
          return new Proxy(
            {},
            {
              get: m((t, r) => {
                if (this.storyStoreValue)
                  return (
                    Ct(
                      'Accessing the Story Store is deprecated and will be removed in 9.0'
                    ),
                    this.storyStoreValue[r]
                  );
                throw new im();
              }, 'get'),
            }
          );
        }
        async initialize() {
          this.setupListeners();
          try {
            let t = await this.getProjectAnnotationsOrRenderError();
            await this.runBeforeAllHook(t),
              await this.initializeWithProjectAnnotations(t);
          } catch (t) {
            this.rejectStoreInitializationPromise(t);
          }
        }
        ready() {
          return this.storeInitializationPromise;
        }
        setupListeners() {
          this.channel.on(xu, this.onStoryIndexChanged.bind(this)),
            this.channel.on(yo, this.onUpdateGlobals.bind(this)),
            this.channel.on(ho, this.onUpdateArgs.bind(this)),
            this.channel.on(iu, this.onRequestArgTypesInfo.bind(this)),
            this.channel.on(po, this.onResetArgs.bind(this)),
            this.channel.on(co, this.onForceReRender.bind(this)),
            this.channel.on(uu, this.onForceRemount.bind(this));
        }
        async getProjectAnnotationsOrRenderError() {
          try {
            let t = await this.getProjectAnnotations();
            if (
              ((this.renderToCanvas = t.renderToCanvas), !this.renderToCanvas)
            )
              throw new Gh();
            return t;
          } catch (t) {
            throw (
              (this.renderPreviewEntryError('Error reading preview.js:', t), t)
            );
          }
        }
        async initializeWithProjectAnnotations(t) {
          this.projectAnnotationsBeforeInitialization = t;
          try {
            let r = await this.getStoryIndexFromServer();
            return this.initializeWithStoryIndex(r);
          } catch (r) {
            throw (
              (this.renderPreviewEntryError('Error loading story index:', r), r)
            );
          }
        }
        async runBeforeAllHook(t) {
          try {
            await this.beforeAllCleanup?.(),
              (this.beforeAllCleanup = await t.beforeAll?.());
          } catch (r) {
            throw (
              (this.renderPreviewEntryError('Error in beforeAll hook:', r), r)
            );
          }
        }
        async getStoryIndexFromServer() {
          let t = await K5(Y5);
          if (t.status === 200) return t.json();
          throw new Yh({ text: await t.text() });
        }
        initializeWithStoryIndex(t) {
          if (!this.projectAnnotationsBeforeInitialization)
            throw new Error(
              'Cannot call initializeWithStoryIndex until project annotations resolve'
            );
          (this.storyStoreValue = new z5(
            t,
            this.importFn,
            this.projectAnnotationsBeforeInitialization
          )),
            delete this.projectAnnotationsBeforeInitialization,
            this.setInitialGlobals(),
            this.resolveStoreInitializationPromise();
        }
        async setInitialGlobals() {
          this.emitGlobals();
        }
        emitGlobals() {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'emitGlobals' });
          let t = {
            globals: this.storyStoreValue.globals.get() || {},
            globalTypes:
              this.storyStoreValue.projectAnnotations.globalTypes || {},
          };
          this.channel.emit(mu, t);
        }
        async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
          delete this.previewEntryError, (this.getProjectAnnotations = t);
          let r = await this.getProjectAnnotationsOrRenderError();
          if ((await this.runBeforeAllHook(r), !this.storyStoreValue)) {
            await this.initializeWithProjectAnnotations(r);
            return;
          }
          this.storyStoreValue.setProjectAnnotations(r), this.emitGlobals();
        }
        async onStoryIndexChanged() {
          if (
            (delete this.previewEntryError,
            !(
              !this.storyStoreValue &&
              !this.projectAnnotationsBeforeInitialization
            ))
          )
            try {
              let t = await this.getStoryIndexFromServer();
              if (this.projectAnnotationsBeforeInitialization) {
                this.initializeWithStoryIndex(t);
                return;
              }
              await this.onStoriesChanged({ storyIndex: t });
            } catch (t) {
              throw (
                (this.renderPreviewEntryError('Error loading story index:', t),
                t)
              );
            }
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'onStoriesChanged' });
          await this.storyStoreValue.onStoriesChanged({
            importFn: t,
            storyIndex: r,
          });
        }
        async onUpdateGlobals({ globals: t }) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'onUpdateGlobals' });
          this.storyStoreValue.globals.update(t),
            await Promise.all(this.storyRenders.map((r) => r.rerender())),
            this.channel.emit(cu, {
              globals: this.storyStoreValue.globals.get(),
              initialGlobals: this.storyStoreValue.globals.initialGlobals,
            });
        }
        async onUpdateArgs({ storyId: t, updatedArgs: r }) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'onUpdateArgs' });
          this.storyStoreValue.args.update(t, r),
            await Promise.all(
              this.storyRenders
                .filter((n) => n.id === t && !n.renderOptions.forceInitialArgs)
                .map((n) =>
                  n.story && n.story.usesMount ? n.remount() : n.rerender()
                )
            ),
            this.channel.emit(gu, {
              storyId: t,
              args: this.storyStoreValue.args.get(t),
            });
        }
        async onRequestArgTypesInfo({ id: t, payload: r }) {
          try {
            await this.storeInitializationPromise;
            let n = await this.storyStoreValue?.loadStory(r);
            this.channel.emit(Ka, {
              id: t,
              success: !0,
              payload: { argTypes: n?.argTypes || {} },
              error: null,
            });
          } catch (n) {
            this.channel.emit(Ka, { id: t, success: !1, error: n?.message });
          }
        }
        async onResetArgs({ storyId: t, argNames: r }) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'onResetArgs' });
          let n =
              this.storyRenders.find((a) => a.id === t)?.story ||
              (await this.storyStoreValue.loadStory({ storyId: t })),
            o = (
              r || [
                ...new Set([
                  ...Object.keys(n.initialArgs),
                  ...Object.keys(this.storyStoreValue.args.get(t)),
                ]),
              ]
            ).reduce((a, i) => ((a[i] = n.initialArgs[i]), a), {});
          await this.onUpdateArgs({ storyId: t, updatedArgs: o });
        }
        async onForceReRender() {
          await Promise.all(this.storyRenders.map((t) => t.rerender()));
        }
        async onForceRemount({ storyId: t }) {
          await Promise.all(
            this.storyRenders.filter((r) => r.id === t).map((r) => r.remount())
          );
        }
        renderStoryToElement(t, r, n, o) {
          if (!this.renderToCanvas || !this.storyStoreValue)
            throw new rt({ methodName: 'renderStoryToElement' });
          let a = new Vg(
            this.channel,
            this.storyStoreValue,
            this.renderToCanvas,
            n,
            t.id,
            'docs',
            o,
            t
          );
          return (
            a.renderToElement(r),
            this.storyRenders.push(a),
            async () => {
              await this.teardownRender(a);
            }
          );
        }
        async teardownRender(t, { viewModeChanged: r } = {}) {
          (this.storyRenders = this.storyRenders.filter((n) => n !== t)),
            await t?.teardown?.({ viewModeChanged: r });
        }
        async loadStory({ storyId: t }) {
          if (!this.storyStoreValue) throw new rt({ methodName: 'loadStory' });
          return this.storyStoreValue.loadStory({ storyId: t });
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'getStoryContext' });
          return this.storyStoreValue.getStoryContext(t, {
            forceInitialArgs: r,
          });
        }
        async extract(t) {
          if (!this.storyStoreValue) throw new rt({ methodName: 'extract' });
          if (this.previewEntryError) throw this.previewEntryError;
          return (
            await this.storyStoreValue.cacheAllCSFFiles(),
            this.storyStoreValue.extract(t)
          );
        }
        renderPreviewEntryError(t, r) {
          (this.previewEntryError = r),
            me.error(t),
            me.error(r),
            this.channel.emit(su, r);
        }
      };
    m(Hg, 'Preview');
    var X5 = Hg,
      Q5 = !1,
      Xi = 'Invariant failed';
    function zo(e, t) {
      if (!e) {
        if (Q5) throw new Error(Xi);
        var r = typeof t == 'function' ? t() : t,
          n = r ? ''.concat(Xi, ': ').concat(r) : Xi;
        throw new Error(n);
      }
    }
    m(zo, 'invariant');
    var Gg = class {
      constructor(t, r, n, o) {
        (this.channel = t),
          (this.store = r),
          (this.renderStoryToElement = n),
          (this.componentStoriesValue = []),
          (this.storyIdToCSFFile = new Map()),
          (this.exportToStory = new Map()),
          (this.exportsToCSFFile = new Map()),
          (this.nameToStoryId = new Map()),
          (this.attachedCSFFiles = new Set()),
          o.forEach((a, i) => {
            this.referenceCSFFile(a);
          });
      }
      componentStoriesValue;
      storyIdToCSFFile;
      exportToStory;
      exportsToCSFFile;
      nameToStoryId;
      attachedCSFFiles;
      primaryStory;
      referenceCSFFile(t) {
        this.exportsToCSFFile.set(t.moduleExports, t),
          this.exportsToCSFFile.set(t.moduleExports.default, t),
          this.store
            .componentStoriesFromCSFFile({ csfFile: t })
            .forEach((r) => {
              let n = t.stories[r.id];
              this.storyIdToCSFFile.set(n.id, t),
                this.exportToStory.set(n.moduleExport, r);
            });
      }
      attachCSFFile(t) {
        if (!this.exportsToCSFFile.has(t.moduleExports))
          throw new Error(
            'Cannot attach a CSF file that has not been referenced'
          );
        this.attachedCSFFiles.has(t) ||
          (this.attachedCSFFiles.add(t),
          this.store
            .componentStoriesFromCSFFile({ csfFile: t })
            .forEach((r) => {
              this.nameToStoryId.set(r.name, r.id),
                this.componentStoriesValue.push(r),
                this.primaryStory || (this.primaryStory = r);
            }));
      }
      referenceMeta(t, r) {
        let n = this.resolveModuleExport(t);
        if (n.type !== 'meta')
          throw new Error(
            '<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?'
          );
        r && this.attachCSFFile(n.csfFile);
      }
      get projectAnnotations() {
        let { projectAnnotations: t } = this.store;
        if (!t)
          throw new Error(
            "Can't get projectAnnotations from DocsContext before they are initialized"
          );
        return t;
      }
      resolveAttachedModuleExportType(t) {
        if (t === 'story') {
          if (!this.primaryStory)
            throw new Error(
              'No primary story attached to this docs file, did you forget to use <Meta of={} />?'
            );
          return { type: 'story', story: this.primaryStory };
        }
        if (this.attachedCSFFiles.size === 0)
          throw new Error(
            'No CSF file attached to this docs file, did you forget to use <Meta of={} />?'
          );
        let r = Array.from(this.attachedCSFFiles)[0];
        if (t === 'meta') return { type: 'meta', csfFile: r };
        let { component: n } = r.meta;
        if (!n)
          throw new Error(
            'Attached CSF file does not defined a component, did you forget to export one?'
          );
        return { type: 'component', component: n };
      }
      resolveModuleExport(t) {
        let r = this.exportsToCSFFile.get(t);
        if (r) return { type: 'meta', csfFile: r };
        let n = this.exportToStory.get(t);
        return n
          ? { type: 'story', story: n }
          : { type: 'component', component: t };
      }
      resolveOf(t, r = []) {
        let n;
        if (['component', 'meta', 'story'].includes(t)) {
          let o = t;
          n = this.resolveAttachedModuleExportType(o);
        } else n = this.resolveModuleExport(t);
        if (r.length && !r.includes(n.type)) {
          let o = n.type === 'component' ? 'component or unknown' : n.type;
          throw new Error(lt`Invalid value passed to the 'of' prop. The value was resolved to a '${o}' type but the only types for this block are: ${r.join(', ')}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
        }
        switch (n.type) {
          case 'component':
            return { ...n, projectAnnotations: this.projectAnnotations };
          case 'meta':
            return {
              ...n,
              preparedMeta: this.store.preparedMetaFromCSFFile({
                csfFile: n.csfFile,
              }),
            };
          case 'story':
          default:
            return n;
        }
      }
      storyIdByName = m((t) => {
        let r = this.nameToStoryId.get(t);
        if (r) return r;
        throw new Error(`No story found with that name: ${t}`);
      }, 'storyIdByName');
      componentStories = m(
        () => this.componentStoriesValue,
        'componentStories'
      );
      componentStoriesFromCSFFile = m(
        (t) => this.store.componentStoriesFromCSFFile({ csfFile: t }),
        'componentStoriesFromCSFFile'
      );
      storyById = m((t) => {
        if (!t) {
          if (!this.primaryStory)
            throw new Error(
              'No primary story defined for docs entry. Did you forget to use `<Meta>`?'
            );
          return this.primaryStory;
        }
        let r = this.storyIdToCSFFile.get(t);
        if (!r)
          throw new Error(
            `Called \`storyById\` for story that was never loaded: ${t}`
          );
        return this.store.storyFromCSFFile({ storyId: t, csfFile: r });
      }, 'storyById');
      getStoryContext = m(
        (t) => ({
          ...this.store.getStoryContext(t),
          loaded: {},
          viewMode: 'docs',
        }),
        'getStoryContext'
      );
      loadStory = m((t) => this.store.loadStory({ storyId: t }), 'loadStory');
    };
    m(Gg, 'DocsContext');
    var Wg = Gg,
      Kg = class {
        constructor(t, r, n, o) {
          (this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.id = n.id);
        }
        type = 'docs';
        subtype = 'csf';
        id;
        story;
        rerender;
        teardownRender;
        torndown = !1;
        disableKeyListeners = !1;
        preparing = !1;
        csfFiles;
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id);
          if (this.torndown) throw aa;
          let { importPath: n, title: o } = this.entry,
            a = this.store.processCSFFileWithCache(t, n, o),
            i = Object.keys(a.stories)[0];
          (this.story = this.store.storyFromCSFFile({
            storyId: i,
            csfFile: a,
          })),
            (this.csfFiles = [a, ...r]),
            (this.preparing = !1);
        }
        isEqual(t) {
          return !!(this.id === t.id && this.story && this.story === t.story);
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error('Cannot render docs before preparing');
          let r = new Wg(this.channel, this.store, t, this.csfFiles);
          return this.csfFiles.forEach((n) => r.attachCSFFile(n)), r;
        }
        async renderToElement(t, r) {
          if (!this.story || !this.csfFiles)
            throw new Error('Cannot render docs before preparing');
          let n = this.docsContext(r),
            { docs: o } = this.story.parameters || {};
          if (!o)
            throw new Error(
              'Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed'
            );
          let a = await o.renderer(),
            { render: i } = a,
            s = m(async () => {
              try {
                await i(n, o, t), this.channel.emit(uo, this.id);
              } catch (l) {
                this.callbacks.showException(l);
              }
            }, 'renderDocs');
          return (
            (this.rerender = async () => s()),
            (this.teardownRender = async ({ viewModeChanged: l }) => {
              !l || !t || a.unmount(t);
            }),
            s()
          );
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0);
        }
      };
    m(Kg, 'CsfDocsRender');
    var km = Kg,
      Yg = class {
        constructor(t, r, n, o) {
          (this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.id = n.id);
        }
        type = 'docs';
        subtype = 'mdx';
        id;
        exports;
        rerender;
        teardownRender;
        torndown = !1;
        disableKeyListeners = !1;
        preparing = !1;
        csfFiles;
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id);
          if (this.torndown) throw aa;
          (this.csfFiles = r), (this.exports = t), (this.preparing = !1);
        }
        isEqual(t) {
          return !!(
            this.id === t.id &&
            this.exports &&
            this.exports === t.exports
          );
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error('Cannot render docs before preparing');
          return new Wg(this.channel, this.store, t, this.csfFiles);
        }
        async renderToElement(t, r) {
          if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
            throw new Error('Cannot render docs before preparing');
          let n = this.docsContext(r),
            { docs: o } = this.store.projectAnnotations.parameters || {};
          if (!o)
            throw new Error(
              'Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed'
            );
          let a = { ...o, page: this.exports.default },
            i = await o.renderer(),
            { render: s } = i,
            l = m(async () => {
              try {
                await s(n, a, t), this.channel.emit(uo, this.id);
              } catch (u) {
                this.callbacks.showException(u);
              }
            }, 'renderDocs');
          return (
            (this.rerender = async () => l()),
            (this.teardownRender = async ({ viewModeChanged: u } = {}) => {
              !u || !t || (i.unmount(t), (this.torndown = !0));
            }),
            l()
          );
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0);
        }
      };
    m(Yg, 'MdxDocsRender');
    var Rm = Yg,
      Z5 = globalThis;
    function Xg(e) {
      let t = (e.composedPath && e.composedPath()[0]) || e.target;
      return (
        /input|textarea/i.test(t.tagName) ||
        t.getAttribute('contenteditable') !== null
      );
    }
    m(Xg, 'focusInInput');
    var Qg = 'attached-mdx',
      eD = 'unattached-mdx';
    function Zg({ tags: e }) {
      return e?.includes(eD) || e?.includes(Qg);
    }
    m(Zg, 'isMdxEntry');
    function Vo(e) {
      return e.type === 'story';
    }
    m(Vo, 'isStoryRender');
    function eb(e) {
      return e.type === 'docs';
    }
    m(eb, 'isDocsRender');
    function tb(e) {
      return eb(e) && e.subtype === 'csf';
    }
    m(tb, 'isCsfDocsRender');
    var rb = class extends X5 {
      constructor(t, r, n, o) {
        super(t, r, void 0, !1),
          (this.importFn = t),
          (this.getProjectAnnotations = r),
          (this.selectionStore = n),
          (this.view = o),
          this.initialize();
      }
      currentSelection;
      currentRender;
      setupListeners() {
        super.setupListeners(),
          (Z5.onkeydown = this.onKeydown.bind(this)),
          this.channel.on(hu, this.onSetCurrentStory.bind(this)),
          this.channel.on(Cu, this.onUpdateQueryParams.bind(this)),
          this.channel.on(fu, this.onPreloadStories.bind(this));
      }
      async setInitialGlobals() {
        if (!this.storyStoreValue)
          throw new rt({ methodName: 'setInitialGlobals' });
        let { globals: t } = this.selectionStore.selectionSpecifier || {};
        t && this.storyStoreValue.globals.updateFromPersisted(t),
          this.emitGlobals();
      }
      async initializeWithStoryIndex(t) {
        return (
          await super.initializeWithStoryIndex(t), this.selectSpecifiedStory()
        );
      }
      async selectSpecifiedStory() {
        if (!this.storyStoreValue)
          throw new rt({ methodName: 'selectSpecifiedStory' });
        if (this.selectionStore.selection) {
          await this.renderSelection();
          return;
        }
        if (!this.selectionStore.selectionSpecifier) {
          this.renderMissingStory();
          return;
        }
        let { storySpecifier: t, args: r } =
            this.selectionStore.selectionSpecifier,
          n = this.storyStoreValue.storyIndex.entryFromSpecifier(t);
        if (!n) {
          t === '*'
            ? this.renderStoryLoadingException(t, new em())
            : this.renderStoryLoadingException(
                t,
                new rm({ storySpecifier: t.toString() })
              );
          return;
        }
        let { id: o, type: a } = n;
        this.selectionStore.setSelection({ storyId: o, viewMode: a }),
          this.channel.emit(wu, this.selectionStore.selection),
          this.channel.emit(Ya, this.selectionStore.selection),
          await this.renderSelection({ persistedArgs: r });
      }
      async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
        await super.onGetProjectAnnotationsChanged({
          getProjectAnnotations: t,
        }),
          this.selectionStore.selection && this.renderSelection();
      }
      async onStoriesChanged({ importFn: t, storyIndex: r }) {
        await super.onStoriesChanged({ importFn: t, storyIndex: r }),
          this.selectionStore.selection
            ? await this.renderSelection()
            : await this.selectSpecifiedStory();
      }
      onKeydown(t) {
        if (!this.storyRenders.find((r) => r.disableKeyListeners) && !Xg(t)) {
          let {
            altKey: r,
            ctrlKey: n,
            metaKey: o,
            shiftKey: a,
            key: i,
            code: s,
            keyCode: l,
          } = t;
          this.channel.emit(yu, {
            event: {
              altKey: r,
              ctrlKey: n,
              metaKey: o,
              shiftKey: a,
              key: i,
              code: s,
              keyCode: l,
            },
          });
        }
      }
      async onSetCurrentStory(t) {
        this.selectionStore.setSelection({ viewMode: 'story', ...t }),
          await this.storeInitializationPromise,
          this.channel.emit(Ya, this.selectionStore.selection),
          this.renderSelection();
      }
      onUpdateQueryParams(t) {
        this.selectionStore.setQueryParams(t);
      }
      async onUpdateGlobals({ globals: t }) {
        super.onUpdateGlobals({ globals: t }),
          (this.currentRender instanceof Rm ||
            this.currentRender instanceof km) &&
            (await this.currentRender.rerender?.());
      }
      async onUpdateArgs({ storyId: t, updatedArgs: r }) {
        super.onUpdateArgs({ storyId: t, updatedArgs: r });
      }
      async onPreloadStories({ ids: t }) {
        await this.storeInitializationPromise,
          this.storyStoreValue &&
            (await Promise.allSettled(
              t.map((r) => this.storyStoreValue?.loadEntry(r))
            ));
      }
      async renderSelection({ persistedArgs: t } = {}) {
        let { renderToCanvas: r } = this;
        if (!this.storyStoreValue || !r)
          throw new rt({ methodName: 'renderSelection' });
        let { selection: n } = this.selectionStore;
        if (!n)
          throw new Error(
            'Cannot call renderSelection as no selection was made'
          );
        let { storyId: o } = n,
          a;
        try {
          a = await this.storyStoreValue.storyIdToEntry(o);
        } catch (y) {
          this.currentRender && (await this.teardownRender(this.currentRender)),
            this.renderStoryLoadingException(o, y);
          return;
        }
        let i = this.currentSelection?.storyId !== o,
          s = this.currentRender?.type !== a.type;
        a.type === 'story'
          ? this.view.showPreparingStory({ immediate: s })
          : this.view.showPreparingDocs({ immediate: s }),
          this.currentRender?.isPreparing() &&
            (await this.teardownRender(this.currentRender));
        let l;
        a.type === 'story'
          ? (l = new Vg(
              this.channel,
              this.storyStoreValue,
              r,
              this.mainStoryCallbacks(o),
              o,
              'story'
            ))
          : Zg(a)
            ? (l = new Rm(
                this.channel,
                this.storyStoreValue,
                a,
                this.mainStoryCallbacks(o)
              ))
            : (l = new km(
                this.channel,
                this.storyStoreValue,
                a,
                this.mainStoryCallbacks(o)
              ));
        let u = this.currentSelection;
        this.currentSelection = n;
        let c = this.currentRender;
        this.currentRender = l;
        try {
          await l.prepare();
        } catch (y) {
          c && (await this.teardownRender(c)),
            y !== aa && this.renderStoryLoadingException(o, y);
          return;
        }
        let d = !i && c && !l.isEqual(c);
        if (
          (t &&
            Vo(l) &&
            (zo(!!l.story),
            this.storyStoreValue.args.updateFromPersisted(l.story, t)),
          c && !c.torndown && !i && !d && !s)
        ) {
          (this.currentRender = c),
            this.channel.emit(Au, o),
            this.view.showMain();
          return;
        }
        if (
          (c && (await this.teardownRender(c, { viewModeChanged: s })),
          u && (i || s) && this.channel.emit(bu, o),
          Vo(l))
        ) {
          zo(!!l.story);
          let {
            parameters: y,
            initialArgs: f,
            argTypes: h,
            unmappedArgs: g,
          } = this.storyStoreValue.getStoryContext(l.story);
          this.channel.emit(Eu, {
            id: o,
            parameters: y,
            initialArgs: f,
            argTypes: h,
            args: g,
          });
        } else {
          let { parameters: y } = this.storyStoreValue.projectAnnotations;
          if (tb(l) || l.entry.tags?.includes(Qg)) {
            if (!l.csfFiles) throw new Qh({ storyId: o });
            ({ parameters: y } = this.storyStoreValue.preparedMetaFromCSFFile({
              csfFile: l.csfFiles[0],
            }));
          }
          this.channel.emit(lu, { id: o, parameters: y });
        }
        Vo(l)
          ? (zo(!!l.story),
            this.storyRenders.push(l),
            this.currentRender.renderToElement(
              this.view.prepareForStory(l.story)
            ))
          : this.currentRender.renderToElement(
              this.view.prepareForDocs(),
              this.renderStoryToElement.bind(this)
            );
      }
      async teardownRender(t, { viewModeChanged: r = !1 } = {}) {
        (this.storyRenders = this.storyRenders.filter((n) => n !== t)),
          await t?.teardown?.({ viewModeChanged: r });
      }
      mainStoryCallbacks(t) {
        return {
          showStoryDuringRender: m(
            () => this.view.showStoryDuringRender(),
            'showStoryDuringRender'
          ),
          showMain: m(() => this.view.showMain(), 'showMain'),
          showError: m((r) => this.renderError(t, r), 'showError'),
          showException: m((r) => this.renderException(t, r), 'showException'),
        };
      }
      renderPreviewEntryError(t, r) {
        super.renderPreviewEntryError(t, r), this.view.showErrorDisplay(r);
      }
      renderMissingStory() {
        this.view.showNoPreview(), this.channel.emit(Qa);
      }
      renderStoryLoadingException(t, r) {
        me.error(r), this.view.showErrorDisplay(r), this.channel.emit(Qa, t);
      }
      renderException(t, r) {
        let { name: n = 'Error', message: o = String(r), stack: a } = r;
        this.channel.emit(Su, { name: n, message: o, stack: a }),
          this.channel.emit(kr, { newPhase: 'errored', storyId: t }),
          this.view.showErrorDisplay(r),
          me.error(`Error rendering story '${t}':`),
          me.error(r);
      }
      renderError(t, { title: r, description: n }) {
        me.error(`Error rendering story ${r}: ${n}`),
          this.channel.emit(vu, { title: r, description: n }),
          this.channel.emit(kr, { newPhase: 'errored', storyId: t }),
          this.view.showErrorDisplay({ message: r, stack: n });
      }
    };
    m(rb, 'PreviewWithSelection');
    var tD = rb,
      us = Qe(Os(), 1),
      rD = Qe(Os(), 1),
      nD = Qe(As(), 1),
      Dm = /^[a-zA-Z0-9 _-]*$/,
      nb = /^-?[0-9]+(\.[0-9]+)?$/,
      oD = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
      ob =
        /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
      cs = m(
        (e = '', t) =>
          e === null || e === '' || !Dm.test(e)
            ? !1
            : t == null ||
                t instanceof Date ||
                typeof t == 'number' ||
                typeof t == 'boolean'
              ? !0
              : typeof t == 'string'
                ? Dm.test(t) || nb.test(t) || oD.test(t) || ob.test(t)
                : Array.isArray(t)
                  ? t.every((r) => cs(e, r))
                  : (0, nD.default)(t)
                    ? Object.entries(t).every(([r, n]) => cs(r, n))
                    : !1,
        'validateArgs'
      ),
      aD = {
        delimiter: ';',
        allowDots: !0,
        allowSparse: !0,
        decoder(e, t, r, n) {
          if (n === 'value' && e.startsWith('!')) {
            if (e === '!undefined') return;
            if (e === '!null') return null;
            if (e === '!true') return !0;
            if (e === '!false') return !1;
            if (e.startsWith('!date(') && e.endsWith(')'))
              return new Date(e.slice(6, -1));
            if (e.startsWith('!hex(') && e.endsWith(')'))
              return `#${e.slice(5, -1)}`;
            let o = e.slice(1).match(ob);
            if (o)
              return e.startsWith('!rgba')
                ? `${o[1]}(${o[2]}, ${o[3]}, ${o[4]}, ${o[5]})`
                : e.startsWith('!hsla')
                  ? `${o[1]}(${o[2]}, ${o[3]}%, ${o[4]}%, ${o[5]})`
                  : e.startsWith('!rgb')
                    ? `${o[1]}(${o[2]}, ${o[3]}, ${o[4]})`
                    : `${o[1]}(${o[2]}, ${o[3]}%, ${o[4]}%)`;
          }
          return n === 'value' && nb.test(e) ? Number(e) : t(e, t, r);
        },
      },
      Fm = m((e) => {
        let t = e.split(';').map((r) => r.replace('=', '~').replace(':', '='));
        return Object.entries(rD.default.parse(t.join(';'), aD)).reduce(
          (r, [n, o]) =>
            cs(n, o)
              ? Object.assign(r, { [n]: o })
              : (Ut.warn(lt`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `),
                r),
          {}
        );
      }, 'parseArgsParam'),
      { history: ab, document: _t } = Ue;
    function ib(e) {
      let t = (e || '').match(/^\/story\/(.+)/);
      if (!t)
        throw new Error(`Invalid path '${e}',  must start with '/story/'`);
      return t[1];
    }
    m(ib, 'pathToId');
    var sb = m(({ selection: e, extraParams: t }) => {
        let r = typeof _t < 'u' ? _t.location.search : '',
          {
            path: n,
            selectedKind: o,
            selectedStory: a,
            ...i
          } = us.default.parse(r, { ignoreQueryPrefix: !0 });
        return us.default.stringify(
          { ...i, ...t, ...(e && { id: e.storyId, viewMode: e.viewMode }) },
          { encode: !1, addQueryPrefix: !0 }
        );
      }, 'getQueryString'),
      iD = m((e) => {
        if (!e) return;
        let t = sb({ selection: e }),
          { hash: r = '' } = _t.location;
        (_t.title = e.storyId),
          ab.replaceState({}, '', `${_t.location.pathname}${t}${r}`);
      }, 'setPath'),
      sD = m(
        (e) => e != null && typeof e == 'object' && Array.isArray(e) === !1,
        'isObject'
      ),
      Nn = m((e) => {
        if (e !== void 0) {
          if (typeof e == 'string') return e;
          if (Array.isArray(e)) return Nn(e[0]);
          if (sD(e)) return Nn(Object.values(e).filter(Boolean));
        }
      }, 'getFirstString'),
      lD = m(() => {
        if (typeof _t < 'u') {
          let e = us.default.parse(_t.location.search, {
              ignoreQueryPrefix: !0,
            }),
            t = typeof e.args == 'string' ? Fm(e.args) : void 0,
            r = typeof e.globals == 'string' ? Fm(e.globals) : void 0,
            n = Nn(e.viewMode);
          (typeof n != 'string' || !n.match(/docs|story/)) && (n = 'story');
          let o = Nn(e.path),
            a = o ? ib(o) : Nn(e.id);
          if (a) return { storySpecifier: a, args: t, globals: r, viewMode: n };
        }
        return null;
      }, 'getSelectionSpecifierFromPath'),
      lb = class {
        selectionSpecifier;
        selection;
        constructor() {
          this.selectionSpecifier = lD();
        }
        setSelection(t) {
          (this.selection = t), iD(this.selection);
        }
        setQueryParams(t) {
          let r = sb({ extraParams: t }),
            { hash: n = '' } = _t.location;
          ab.replaceState({}, '', `${_t.location.pathname}${r}${n}`);
        }
      };
    m(lb, 'UrlStore');
    var uD = lb,
      cD = Qe(o5(), 1),
      pD = Qe(Os(), 1),
      { document: Ge } = Ue,
      jm = 100,
      ub = ((e) => (
        (e.MAIN = 'MAIN'),
        (e.NOPREVIEW = 'NOPREVIEW'),
        (e.PREPARING_STORY = 'PREPARING_STORY'),
        (e.PREPARING_DOCS = 'PREPARING_DOCS'),
        (e.ERROR = 'ERROR'),
        e
      ))(ub || {}),
      Qi = {
        PREPARING_STORY: 'sb-show-preparing-story',
        PREPARING_DOCS: 'sb-show-preparing-docs',
        MAIN: 'sb-show-main',
        NOPREVIEW: 'sb-show-nopreview',
        ERROR: 'sb-show-errordisplay',
      },
      Zi = {
        centered: 'sb-main-centered',
        fullscreen: 'sb-main-fullscreen',
        padded: 'sb-main-padded',
      },
      Nm = new cD.default({ escapeXML: !0 }),
      cb = class {
        currentLayoutClass;
        testing = !1;
        preparingTimeout;
        constructor() {
          if (typeof Ge < 'u') {
            let { __SPECIAL_TEST_PARAMETER__: t } = pD.default.parse(
              Ge.location.search,
              { ignoreQueryPrefix: !0 }
            );
            switch (t) {
              case 'preparing-story': {
                this.showPreparingStory(), (this.testing = !0);
                break;
              }
              case 'preparing-docs': {
                this.showPreparingDocs(), (this.testing = !0);
                break;
              }
              default:
            }
          }
        }
        prepareForStory(t) {
          return (
            this.showStory(),
            this.applyLayout(t.parameters.layout),
            (Ge.documentElement.scrollTop = 0),
            (Ge.documentElement.scrollLeft = 0),
            this.storyRoot()
          );
        }
        storyRoot() {
          return Ge.getElementById('storybook-root');
        }
        prepareForDocs() {
          return (
            this.showMain(),
            this.showDocs(),
            this.applyLayout('fullscreen'),
            (Ge.documentElement.scrollTop = 0),
            (Ge.documentElement.scrollLeft = 0),
            this.docsRoot()
          );
        }
        docsRoot() {
          return Ge.getElementById('storybook-docs');
        }
        applyLayout(t = 'padded') {
          if (t === 'none') {
            Ge.body.classList.remove(this.currentLayoutClass),
              (this.currentLayoutClass = null);
            return;
          }
          this.checkIfLayoutExists(t);
          let r = Zi[t];
          Ge.body.classList.remove(this.currentLayoutClass),
            Ge.body.classList.add(r),
            (this.currentLayoutClass = r);
        }
        checkIfLayoutExists(t) {
          Zi[t] ||
            me.warn(lt`
          The desired layout: ${t} is not a valid option.
          The possible options are: ${Object.keys(Zi).join(', ')}, none.
        `);
        }
        showMode(t) {
          clearTimeout(this.preparingTimeout),
            Object.keys(ub).forEach((r) => {
              r === t
                ? Ge.body.classList.add(Qi[r])
                : Ge.body.classList.remove(Qi[r]);
            });
        }
        showErrorDisplay({ message: t = '', stack: r = '' }) {
          let n = t,
            o = r,
            a = t.split(`
`);
          a.length > 1 &&
            (([n] = a),
            (o = a
              .slice(1)
              .join(
                `
`
              )
              .replace(/^\n/, ''))),
            (Ge.getElementById('error-message').innerHTML = Nm.toHtml(n)),
            (Ge.getElementById('error-stack').innerHTML = Nm.toHtml(o)),
            this.showMode('ERROR');
        }
        showNoPreview() {
          this.testing ||
            (this.showMode('NOPREVIEW'),
            this.storyRoot()?.setAttribute('hidden', 'true'),
            this.docsRoot()?.setAttribute('hidden', 'true'));
        }
        showPreparingStory({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode('PREPARING_STORY')
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode('PREPARING_STORY'),
                  jm
                ));
        }
        showPreparingDocs({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode('PREPARING_DOCS')
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode('PREPARING_DOCS'),
                  jm
                ));
        }
        showMain() {
          this.showMode('MAIN');
        }
        showDocs() {
          this.storyRoot().setAttribute('hidden', 'true'),
            this.docsRoot().removeAttribute('hidden');
        }
        showStory() {
          this.docsRoot().setAttribute('hidden', 'true'),
            this.storyRoot().removeAttribute('hidden');
        }
        showStoryDuringRender() {
          Ge.body.classList.add(Qi.MAIN);
        }
      };
    m(cb, 'WebView');
    var dD = cb,
      fD = class extends tD {
        constructor(t, r) {
          super(t, r, new uD(), new dD()),
            (this.importFn = t),
            (this.getProjectAnnotations = r),
            (Ue.__STORYBOOK_PREVIEW__ = this);
        }
      };
    m(fD, 'PreviewWeb');
    var { document: cr } = Ue,
      yD = [
        'application/javascript',
        'application/ecmascript',
        'application/x-ecmascript',
        'application/x-javascript',
        'text/ecmascript',
        'text/javascript',
        'text/javascript1.0',
        'text/javascript1.1',
        'text/javascript1.2',
        'text/javascript1.3',
        'text/javascript1.4',
        'text/javascript1.5',
        'text/jscript',
        'text/livescript',
        'text/x-ecmascript',
        'text/x-javascript',
        'module',
      ],
      hD = 'script',
      Bm = 'scripts-root';
    function ps() {
      let e = cr.createEvent('Event');
      e.initEvent('DOMContentLoaded', !0, !0), cr.dispatchEvent(e);
    }
    m(ps, 'simulateDOMContentLoaded');
    function pb(e, t, r) {
      let n = cr.createElement('script');
      (n.type = e.type === 'module' ? 'module' : 'text/javascript'),
        e.src
          ? ((n.onload = t), (n.onerror = t), (n.src = e.src))
          : (n.textContent = e.innerText),
        r ? r.appendChild(n) : cr.head.appendChild(n),
        e.parentNode.removeChild(e),
        e.src || t();
    }
    m(pb, 'insertScript');
    function qs(e, t, r = 0) {
      e[r](() => {
        r++, r === e.length ? t() : qs(e, t, r);
      });
    }
    m(qs, 'insertScriptsSequentially');
    function mD(e) {
      let t = cr.getElementById(Bm);
      t
        ? (t.innerHTML = '')
        : ((t = cr.createElement('div')), (t.id = Bm), cr.body.appendChild(t));
      let r = Array.from(e.querySelectorAll(hD));
      if (r.length) {
        let n = [];
        r.forEach((o) => {
          let a = o.getAttribute('type');
          (!a || yD.includes(a)) && n.push((i) => pb(o, i, t));
        }),
          n.length && qs(n, ps, void 0);
      } else ps();
    }
    m(mD, 'simulatePageLoad');
    S();
    A();
    T();
    S();
    A();
    T();
    var gD = Object.create,
      Ms = Object.defineProperty,
      bD = Object.getOwnPropertyDescriptor,
      vD = Object.getOwnPropertyNames,
      xD = Object.getPrototypeOf,
      ED = Object.prototype.hasOwnProperty,
      b = (e, t) => Ms(e, 'name', { value: t, configurable: !0 }),
      K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      wD = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of vD(t))
            !ED.call(e, o) &&
              o !== r &&
              Ms(e, o, {
                get: () => t[o],
                enumerable: !(n = bD(t, o)) || n.enumerable,
              });
        return e;
      },
      db = (e, t, r) => (
        (r = e != null ? gD(xD(e)) : {}),
        wD(
          t || !e || !e.__esModule
            ? Ms(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      fb = K((e, t) => {
        var r =
          typeof window == 'object' &&
          window &&
          window.Object === Object &&
          window;
        t.exports = r;
      }),
      kt = K((e, t) => {
        var r = fb(),
          n = typeof self == 'object' && self && self.Object === Object && self,
          o = r || n || Function('return this')();
        t.exports = o;
      }),
      sa = K((e, t) => {
        var r = kt(),
          n = r.Symbol;
        t.exports = n;
      }),
      SD = K((e, t) => {
        var r = sa(),
          n = Object.prototype,
          o = n.hasOwnProperty,
          a = n.toString,
          i = r ? r.toStringTag : void 0;
        function s(l) {
          var u = o.call(l, i),
            c = l[i];
          try {
            l[i] = void 0;
            var d = !0;
          } catch {}
          var y = a.call(l);
          return d && (u ? (l[i] = c) : delete l[i]), y;
        }
        b(s, 'getRawTag'), (t.exports = s);
      }),
      AD = K((e, t) => {
        var r = Object.prototype,
          n = r.toString;
        function o(a) {
          return n.call(a);
        }
        b(o, 'objectToString'), (t.exports = o);
      }),
      Hn = K((e, t) => {
        var r = sa(),
          n = SD(),
          o = AD(),
          a = '[object Null]',
          i = '[object Undefined]',
          s = r ? r.toStringTag : void 0;
        function l(u) {
          return u == null
            ? u === void 0
              ? i
              : a
            : s && s in Object(u)
              ? n(u)
              : o(u);
        }
        b(l, 'baseGetTag'), (t.exports = l);
      }),
      Us = K((e, t) => {
        function r(n) {
          var o = typeof n;
          return n != null && (o == 'object' || o == 'function');
        }
        b(r, 'isObject'), (t.exports = r);
      }),
      yb = K((e, t) => {
        var r = Hn(),
          n = Us(),
          o = '[object AsyncFunction]',
          a = '[object Function]',
          i = '[object GeneratorFunction]',
          s = '[object Proxy]';
        function l(u) {
          if (!n(u)) return !1;
          var c = r(u);
          return c == a || c == i || c == o || c == s;
        }
        b(l, 'isFunction'), (t.exports = l);
      }),
      TD = K((e, t) => {
        var r = kt(),
          n = r['__core-js_shared__'];
        t.exports = n;
      }),
      CD = K((e, t) => {
        var r = TD(),
          n = (function () {
            var a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
            return a ? 'Symbol(src)_1.' + a : '';
          })();
        function o(a) {
          return !!n && n in a;
        }
        b(o, 'isMasked'), (t.exports = o);
      }),
      hb = K((e, t) => {
        var r = Function.prototype,
          n = r.toString;
        function o(a) {
          if (a != null) {
            try {
              return n.call(a);
            } catch {}
            try {
              return a + '';
            } catch {}
          }
          return '';
        }
        b(o, 'toSource'), (t.exports = o);
      }),
      _D = K((e, t) => {
        var r = yb(),
          n = CD(),
          o = Us(),
          a = hb(),
          i = /[\\^$.*+?()[\]{}|]/g,
          s = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          u = Object.prototype,
          c = l.toString,
          d = u.hasOwnProperty,
          y = RegExp(
            '^' +
              c
                .call(d)
                .replace(i, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
        function f(h) {
          if (!o(h) || n(h)) return !1;
          var g = r(h) ? y : s;
          return g.test(a(h));
        }
        b(f, 'baseIsNative'), (t.exports = f);
      }),
      OD = K((e, t) => {
        function r(n, o) {
          return n?.[o];
        }
        b(r, 'getValue'), (t.exports = r);
      }),
      yr = K((e, t) => {
        var r = _D(),
          n = OD();
        function o(a, i) {
          var s = n(a, i);
          return r(s) ? s : void 0;
        }
        b(o, 'getNative'), (t.exports = o);
      }),
      ID = K((e, t) => {
        var r = yr(),
          n = (function () {
            try {
              var o = r(Object, 'defineProperty');
              return o({}, '', {}), o;
            } catch {}
          })();
        t.exports = n;
      }),
      PD = K((e, t) => {
        var r = ID();
        function n(o, a, i) {
          a == '__proto__' && r
            ? r(o, a, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0,
              })
            : (o[a] = i);
        }
        b(n, 'baseAssignValue'), (t.exports = n);
      }),
      kD = K((e, t) => {
        function r(n) {
          return function (o, a, i) {
            for (var s = -1, l = Object(o), u = i(o), c = u.length; c--; ) {
              var d = u[n ? c : ++s];
              if (a(l[d], d, l) === !1) break;
            }
            return o;
          };
        }
        b(r, 'createBaseFor'), (t.exports = r);
      }),
      RD = K((e, t) => {
        var r = kD(),
          n = r();
        t.exports = n;
      }),
      DD = K((e, t) => {
        function r(n, o) {
          for (var a = -1, i = Array(n); ++a < n; ) i[a] = o(a);
          return i;
        }
        b(r, 'baseTimes'), (t.exports = r);
      }),
      Gn = K((e, t) => {
        function r(n) {
          return n != null && typeof n == 'object';
        }
        b(r, 'isObjectLike'), (t.exports = r);
      }),
      FD = K((e, t) => {
        var r = Hn(),
          n = Gn(),
          o = '[object Arguments]';
        function a(i) {
          return n(i) && r(i) == o;
        }
        b(a, 'baseIsArguments'), (t.exports = a);
      }),
      mb = K((e, t) => {
        var r = FD(),
          n = Gn(),
          o = Object.prototype,
          a = o.hasOwnProperty,
          i = o.propertyIsEnumerable,
          s = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (l) {
                return n(l) && a.call(l, 'callee') && !i.call(l, 'callee');
              };
        t.exports = s;
      }),
      zt = K((e, t) => {
        var r = Array.isArray;
        t.exports = r;
      }),
      jD = K((e, t) => {
        function r() {
          return !1;
        }
        b(r, 'stubFalse'), (t.exports = r);
      }),
      gb = K((e, t) => {
        var r = kt(),
          n = jD(),
          o = typeof e == 'object' && e && !e.nodeType && e,
          a = o && typeof t == 'object' && t && !t.nodeType && t,
          i = a && a.exports === o,
          s = i ? r.Buffer : void 0,
          l = s ? s.isBuffer : void 0,
          u = l || n;
        t.exports = u;
      }),
      bb = K((e, t) => {
        var r = 9007199254740991,
          n = /^(?:0|[1-9]\d*)$/;
        function o(a, i) {
          var s = typeof a;
          return (
            (i = i ?? r),
            !!i &&
              (s == 'number' || (s != 'symbol' && n.test(a))) &&
              a > -1 &&
              a % 1 == 0 &&
              a < i
          );
        }
        b(o, 'isIndex'), (t.exports = o);
      }),
      Js = K((e, t) => {
        var r = 9007199254740991;
        function n(o) {
          return typeof o == 'number' && o > -1 && o % 1 == 0 && o <= r;
        }
        b(n, 'isLength'), (t.exports = n);
      }),
      ND = K((e, t) => {
        var r = Hn(),
          n = Js(),
          o = Gn(),
          a = '[object Arguments]',
          i = '[object Array]',
          s = '[object Boolean]',
          l = '[object Date]',
          u = '[object Error]',
          c = '[object Function]',
          d = '[object Map]',
          y = '[object Number]',
          f = '[object Object]',
          h = '[object RegExp]',
          g = '[object Set]',
          _ = '[object String]',
          x = '[object WeakMap]',
          v = '[object ArrayBuffer]',
          O = '[object DataView]',
          C = '[object Float32Array]',
          I = '[object Float64Array]',
          P = '[object Int8Array]',
          F = '[object Int16Array]',
          D = '[object Int32Array]',
          U = '[object Uint8Array]',
          G = '[object Uint8ClampedArray]',
          X = '[object Uint16Array]',
          Q = '[object Uint32Array]',
          V = {};
        (V[C] = V[I] = V[P] = V[F] = V[D] = V[U] = V[G] = V[X] = V[Q] = !0),
          (V[a] =
            V[i] =
            V[v] =
            V[s] =
            V[O] =
            V[l] =
            V[u] =
            V[c] =
            V[d] =
            V[y] =
            V[f] =
            V[h] =
            V[g] =
            V[_] =
            V[x] =
              !1);
        function R(q) {
          return o(q) && n(q.length) && !!V[r(q)];
        }
        b(R, 'baseIsTypedArray'), (t.exports = R);
      }),
      BD = K((e, t) => {
        function r(n) {
          return function (o) {
            return n(o);
          };
        }
        b(r, 'baseUnary'), (t.exports = r);
      }),
      LD = K((e, t) => {
        var r = fb(),
          n = typeof e == 'object' && e && !e.nodeType && e,
          o = n && typeof t == 'object' && t && !t.nodeType && t,
          a = o && o.exports === n,
          i = a && r.process,
          s = (function () {
            try {
              var l = o && o.require && o.require('util').types;
              return l || (i && i.binding && i.binding('util'));
            } catch {}
          })();
        t.exports = s;
      }),
      vb = K((e, t) => {
        var r = ND(),
          n = BD(),
          o = LD(),
          a = o && o.isTypedArray,
          i = a ? n(a) : r;
        t.exports = i;
      }),
      qD = K((e, t) => {
        var r = DD(),
          n = mb(),
          o = zt(),
          a = gb(),
          i = bb(),
          s = vb(),
          l = Object.prototype,
          u = l.hasOwnProperty;
        function c(d, y) {
          var f = o(d),
            h = !f && n(d),
            g = !f && !h && a(d),
            _ = !f && !h && !g && s(d),
            x = f || h || g || _,
            v = x ? r(d.length, String) : [],
            O = v.length;
          for (var C in d)
            (y || u.call(d, C)) &&
              !(
                x &&
                (C == 'length' ||
                  (g && (C == 'offset' || C == 'parent')) ||
                  (_ &&
                    (C == 'buffer' ||
                      C == 'byteLength' ||
                      C == 'byteOffset')) ||
                  i(C, O))
              ) &&
              v.push(C);
          return v;
        }
        b(c, 'arrayLikeKeys'), (t.exports = c);
      }),
      MD = K((e, t) => {
        var r = Object.prototype;
        function n(o) {
          var a = o && o.constructor,
            i = (typeof a == 'function' && a.prototype) || r;
          return o === i;
        }
        b(n, 'isPrototype'), (t.exports = n);
      }),
      UD = K((e, t) => {
        function r(n, o) {
          return function (a) {
            return n(o(a));
          };
        }
        b(r, 'overArg'), (t.exports = r);
      }),
      JD = K((e, t) => {
        var r = UD(),
          n = r(Object.keys, Object);
        t.exports = n;
      }),
      $D = K((e, t) => {
        var r = MD(),
          n = JD(),
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s) {
          if (!r(s)) return n(s);
          var l = [];
          for (var u in Object(s))
            a.call(s, u) && u != 'constructor' && l.push(u);
          return l;
        }
        b(i, 'baseKeys'), (t.exports = i);
      }),
      zD = K((e, t) => {
        var r = yb(),
          n = Js();
        function o(a) {
          return a != null && n(a.length) && !r(a);
        }
        b(o, 'isArrayLike'), (t.exports = o);
      }),
      $s = K((e, t) => {
        var r = qD(),
          n = $D(),
          o = zD();
        function a(i) {
          return o(i) ? r(i) : n(i);
        }
        b(a, 'keys'), (t.exports = a);
      }),
      VD = K((e, t) => {
        var r = RD(),
          n = $s();
        function o(a, i) {
          return a && r(a, i, n);
        }
        b(o, 'baseForOwn'), (t.exports = o);
      }),
      HD = K((e, t) => {
        function r() {
          (this.__data__ = []), (this.size = 0);
        }
        b(r, 'listCacheClear'), (t.exports = r);
      }),
      xb = K((e, t) => {
        function r(n, o) {
          return n === o || (n !== n && o !== o);
        }
        b(r, 'eq'), (t.exports = r);
      }),
      la = K((e, t) => {
        var r = xb();
        function n(o, a) {
          for (var i = o.length; i--; ) if (r(o[i][0], a)) return i;
          return -1;
        }
        b(n, 'assocIndexOf'), (t.exports = n);
      }),
      GD = K((e, t) => {
        var r = la(),
          n = Array.prototype,
          o = n.splice;
        function a(i) {
          var s = this.__data__,
            l = r(s, i);
          if (l < 0) return !1;
          var u = s.length - 1;
          return l == u ? s.pop() : o.call(s, l, 1), --this.size, !0;
        }
        b(a, 'listCacheDelete'), (t.exports = a);
      }),
      WD = K((e, t) => {
        var r = la();
        function n(o) {
          var a = this.__data__,
            i = r(a, o);
          return i < 0 ? void 0 : a[i][1];
        }
        b(n, 'listCacheGet'), (t.exports = n);
      }),
      KD = K((e, t) => {
        var r = la();
        function n(o) {
          return r(this.__data__, o) > -1;
        }
        b(n, 'listCacheHas'), (t.exports = n);
      }),
      YD = K((e, t) => {
        var r = la();
        function n(o, a) {
          var i = this.__data__,
            s = r(i, o);
          return s < 0 ? (++this.size, i.push([o, a])) : (i[s][1] = a), this;
        }
        b(n, 'listCacheSet'), (t.exports = n);
      }),
      ua = K((e, t) => {
        var r = HD(),
          n = GD(),
          o = WD(),
          a = KD(),
          i = YD();
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length;
          for (this.clear(); ++u < c; ) {
            var d = l[u];
            this.set(d[0], d[1]);
          }
        }
        b(s, 'ListCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s);
      }),
      XD = K((e, t) => {
        var r = ua();
        function n() {
          (this.__data__ = new r()), (this.size = 0);
        }
        b(n, 'stackClear'), (t.exports = n);
      }),
      QD = K((e, t) => {
        function r(n) {
          var o = this.__data__,
            a = o.delete(n);
          return (this.size = o.size), a;
        }
        b(r, 'stackDelete'), (t.exports = r);
      }),
      ZD = K((e, t) => {
        function r(n) {
          return this.__data__.get(n);
        }
        b(r, 'stackGet'), (t.exports = r);
      }),
      eF = K((e, t) => {
        function r(n) {
          return this.__data__.has(n);
        }
        b(r, 'stackHas'), (t.exports = r);
      }),
      zs = K((e, t) => {
        var r = yr(),
          n = kt(),
          o = r(n, 'Map');
        t.exports = o;
      }),
      ca = K((e, t) => {
        var r = yr(),
          n = r(Object, 'create');
        t.exports = n;
      }),
      tF = K((e, t) => {
        var r = ca();
        function n() {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        }
        b(n, 'hashClear'), (t.exports = n);
      }),
      rF = K((e, t) => {
        function r(n) {
          var o = this.has(n) && delete this.__data__[n];
          return (this.size -= o ? 1 : 0), o;
        }
        b(r, 'hashDelete'), (t.exports = r);
      }),
      nF = K((e, t) => {
        var r = ca(),
          n = '__lodash_hash_undefined__',
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s) {
          var l = this.__data__;
          if (r) {
            var u = l[s];
            return u === n ? void 0 : u;
          }
          return a.call(l, s) ? l[s] : void 0;
        }
        b(i, 'hashGet'), (t.exports = i);
      }),
      oF = K((e, t) => {
        var r = ca(),
          n = Object.prototype,
          o = n.hasOwnProperty;
        function a(i) {
          var s = this.__data__;
          return r ? s[i] !== void 0 : o.call(s, i);
        }
        b(a, 'hashHas'), (t.exports = a);
      }),
      aF = K((e, t) => {
        var r = ca(),
          n = '__lodash_hash_undefined__';
        function o(a, i) {
          var s = this.__data__;
          return (
            (this.size += this.has(a) ? 0 : 1),
            (s[a] = r && i === void 0 ? n : i),
            this
          );
        }
        b(o, 'hashSet'), (t.exports = o);
      }),
      iF = K((e, t) => {
        var r = tF(),
          n = rF(),
          o = nF(),
          a = oF(),
          i = aF();
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length;
          for (this.clear(); ++u < c; ) {
            var d = l[u];
            this.set(d[0], d[1]);
          }
        }
        b(s, 'Hash'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s);
      }),
      sF = K((e, t) => {
        var r = iF(),
          n = ua(),
          o = zs();
        function a() {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (o || n)(),
              string: new r(),
            });
        }
        b(a, 'mapCacheClear'), (t.exports = a);
      }),
      lF = K((e, t) => {
        function r(n) {
          var o = typeof n;
          return o == 'string' ||
            o == 'number' ||
            o == 'symbol' ||
            o == 'boolean'
            ? n !== '__proto__'
            : n === null;
        }
        b(r, 'isKeyable'), (t.exports = r);
      }),
      pa = K((e, t) => {
        var r = lF();
        function n(o, a) {
          var i = o.__data__;
          return r(a) ? i[typeof a == 'string' ? 'string' : 'hash'] : i.map;
        }
        b(n, 'getMapData'), (t.exports = n);
      }),
      uF = K((e, t) => {
        var r = pa();
        function n(o) {
          var a = r(this, o).delete(o);
          return (this.size -= a ? 1 : 0), a;
        }
        b(n, 'mapCacheDelete'), (t.exports = n);
      }),
      cF = K((e, t) => {
        var r = pa();
        function n(o) {
          return r(this, o).get(o);
        }
        b(n, 'mapCacheGet'), (t.exports = n);
      }),
      pF = K((e, t) => {
        var r = pa();
        function n(o) {
          return r(this, o).has(o);
        }
        b(n, 'mapCacheHas'), (t.exports = n);
      }),
      dF = K((e, t) => {
        var r = pa();
        function n(o, a) {
          var i = r(this, o),
            s = i.size;
          return i.set(o, a), (this.size += i.size == s ? 0 : 1), this;
        }
        b(n, 'mapCacheSet'), (t.exports = n);
      }),
      Vs = K((e, t) => {
        var r = sF(),
          n = uF(),
          o = cF(),
          a = pF(),
          i = dF();
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length;
          for (this.clear(); ++u < c; ) {
            var d = l[u];
            this.set(d[0], d[1]);
          }
        }
        b(s, 'MapCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s);
      }),
      fF = K((e, t) => {
        var r = ua(),
          n = zs(),
          o = Vs(),
          a = 200;
        function i(s, l) {
          var u = this.__data__;
          if (u instanceof r) {
            var c = u.__data__;
            if (!n || c.length < a - 1)
              return c.push([s, l]), (this.size = ++u.size), this;
            u = this.__data__ = new o(c);
          }
          return u.set(s, l), (this.size = u.size), this;
        }
        b(i, 'stackSet'), (t.exports = i);
      }),
      Eb = K((e, t) => {
        var r = ua(),
          n = XD(),
          o = QD(),
          a = ZD(),
          i = eF(),
          s = fF();
        function l(u) {
          var c = (this.__data__ = new r(u));
          this.size = c.size;
        }
        b(l, 'Stack'),
          (l.prototype.clear = n),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = s),
          (t.exports = l);
      }),
      yF = K((e, t) => {
        var r = '__lodash_hash_undefined__';
        function n(o) {
          return this.__data__.set(o, r), this;
        }
        b(n, 'setCacheAdd'), (t.exports = n);
      }),
      hF = K((e, t) => {
        function r(n) {
          return this.__data__.has(n);
        }
        b(r, 'setCacheHas'), (t.exports = r);
      }),
      mF = K((e, t) => {
        var r = Vs(),
          n = yF(),
          o = hF();
        function a(i) {
          var s = -1,
            l = i == null ? 0 : i.length;
          for (this.__data__ = new r(); ++s < l; ) this.add(i[s]);
        }
        b(a, 'SetCache'),
          (a.prototype.add = a.prototype.push = n),
          (a.prototype.has = o),
          (t.exports = a);
      }),
      gF = K((e, t) => {
        function r(n, o) {
          for (var a = -1, i = n == null ? 0 : n.length; ++a < i; )
            if (o(n[a], a, n)) return !0;
          return !1;
        }
        b(r, 'arraySome'), (t.exports = r);
      }),
      bF = K((e, t) => {
        function r(n, o) {
          return n.has(o);
        }
        b(r, 'cacheHas'), (t.exports = r);
      }),
      wb = K((e, t) => {
        var r = mF(),
          n = gF(),
          o = bF(),
          a = 1,
          i = 2;
        function s(l, u, c, d, y, f) {
          var h = c & a,
            g = l.length,
            _ = u.length;
          if (g != _ && !(h && _ > g)) return !1;
          var x = f.get(l),
            v = f.get(u);
          if (x && v) return x == u && v == l;
          var O = -1,
            C = !0,
            I = c & i ? new r() : void 0;
          for (f.set(l, u), f.set(u, l); ++O < g; ) {
            var P = l[O],
              F = u[O];
            if (d) var D = h ? d(F, P, O, u, l, f) : d(P, F, O, l, u, f);
            if (D !== void 0) {
              if (D) continue;
              C = !1;
              break;
            }
            if (I) {
              if (
                !n(u, function (U, G) {
                  if (!o(I, G) && (P === U || y(P, U, c, d, f)))
                    return I.push(G);
                })
              ) {
                C = !1;
                break;
              }
            } else if (!(P === F || y(P, F, c, d, f))) {
              C = !1;
              break;
            }
          }
          return f.delete(l), f.delete(u), C;
        }
        b(s, 'equalArrays'), (t.exports = s);
      }),
      vF = K((e, t) => {
        var r = kt(),
          n = r.Uint8Array;
        t.exports = n;
      }),
      xF = K((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size);
          return (
            n.forEach(function (i, s) {
              a[++o] = [s, i];
            }),
            a
          );
        }
        b(r, 'mapToArray'), (t.exports = r);
      }),
      EF = K((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size);
          return (
            n.forEach(function (i) {
              a[++o] = i;
            }),
            a
          );
        }
        b(r, 'setToArray'), (t.exports = r);
      }),
      wF = K((e, t) => {
        var r = sa(),
          n = vF(),
          o = xb(),
          a = wb(),
          i = xF(),
          s = EF(),
          l = 1,
          u = 2,
          c = '[object Boolean]',
          d = '[object Date]',
          y = '[object Error]',
          f = '[object Map]',
          h = '[object Number]',
          g = '[object RegExp]',
          _ = '[object Set]',
          x = '[object String]',
          v = '[object Symbol]',
          O = '[object ArrayBuffer]',
          C = '[object DataView]',
          I = r ? r.prototype : void 0,
          P = I ? I.valueOf : void 0;
        function F(D, U, G, X, Q, V, R) {
          switch (G) {
            case C:
              if (D.byteLength != U.byteLength || D.byteOffset != U.byteOffset)
                return !1;
              (D = D.buffer), (U = U.buffer);
            case O:
              return !(D.byteLength != U.byteLength || !V(new n(D), new n(U)));
            case c:
            case d:
            case h:
              return o(+D, +U);
            case y:
              return D.name == U.name && D.message == U.message;
            case g:
            case x:
              return D == U + '';
            case f:
              var q = i;
            case _:
              var M = X & l;
              if ((q || (q = s), D.size != U.size && !M)) return !1;
              var Y = R.get(D);
              if (Y) return Y == U;
              (X |= u), R.set(D, U);
              var te = a(q(D), q(U), X, Q, V, R);
              return R.delete(D), te;
            case v:
              if (P) return P.call(D) == P.call(U);
          }
          return !1;
        }
        b(F, 'equalByTag'), (t.exports = F);
      }),
      SF = K((e, t) => {
        function r(n, o) {
          for (var a = -1, i = o.length, s = n.length; ++a < i; )
            n[s + a] = o[a];
          return n;
        }
        b(r, 'arrayPush'), (t.exports = r);
      }),
      AF = K((e, t) => {
        var r = SF(),
          n = zt();
        function o(a, i, s) {
          var l = i(a);
          return n(a) ? l : r(l, s(a));
        }
        b(o, 'baseGetAllKeys'), (t.exports = o);
      }),
      TF = K((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = 0, l = [];
            ++a < i;

          ) {
            var u = n[a];
            o(u, a, n) && (l[s++] = u);
          }
          return l;
        }
        b(r, 'arrayFilter'), (t.exports = r);
      }),
      CF = K((e, t) => {
        function r() {
          return [];
        }
        b(r, 'stubArray'), (t.exports = r);
      }),
      _F = K((e, t) => {
        var r = TF(),
          n = CF(),
          o = Object.prototype,
          a = o.propertyIsEnumerable,
          i = Object.getOwnPropertySymbols,
          s = i
            ? function (l) {
                return l == null
                  ? []
                  : ((l = Object(l)),
                    r(i(l), function (u) {
                      return a.call(l, u);
                    }));
              }
            : n;
        t.exports = s;
      }),
      OF = K((e, t) => {
        var r = AF(),
          n = _F(),
          o = $s();
        function a(i) {
          return r(i, o, n);
        }
        b(a, 'getAllKeys'), (t.exports = a);
      }),
      IF = K((e, t) => {
        var r = OF(),
          n = 1,
          o = Object.prototype,
          a = o.hasOwnProperty;
        function i(s, l, u, c, d, y) {
          var f = u & n,
            h = r(s),
            g = h.length,
            _ = r(l),
            x = _.length;
          if (g != x && !f) return !1;
          for (var v = g; v--; ) {
            var O = h[v];
            if (!(f ? O in l : a.call(l, O))) return !1;
          }
          var C = y.get(s),
            I = y.get(l);
          if (C && I) return C == l && I == s;
          var P = !0;
          y.set(s, l), y.set(l, s);
          for (var F = f; ++v < g; ) {
            O = h[v];
            var D = s[O],
              U = l[O];
            if (c) var G = f ? c(U, D, O, l, s, y) : c(D, U, O, s, l, y);
            if (!(G === void 0 ? D === U || d(D, U, u, c, y) : G)) {
              P = !1;
              break;
            }
            F || (F = O == 'constructor');
          }
          if (P && !F) {
            var X = s.constructor,
              Q = l.constructor;
            X != Q &&
              'constructor' in s &&
              'constructor' in l &&
              !(
                typeof X == 'function' &&
                X instanceof X &&
                typeof Q == 'function' &&
                Q instanceof Q
              ) &&
              (P = !1);
          }
          return y.delete(s), y.delete(l), P;
        }
        b(i, 'equalObjects'), (t.exports = i);
      }),
      PF = K((e, t) => {
        var r = yr(),
          n = kt(),
          o = r(n, 'DataView');
        t.exports = o;
      }),
      kF = K((e, t) => {
        var r = yr(),
          n = kt(),
          o = r(n, 'Promise');
        t.exports = o;
      }),
      RF = K((e, t) => {
        var r = yr(),
          n = kt(),
          o = r(n, 'Set');
        t.exports = o;
      }),
      DF = K((e, t) => {
        var r = yr(),
          n = kt(),
          o = r(n, 'WeakMap');
        t.exports = o;
      }),
      FF = K((e, t) => {
        var r = PF(),
          n = zs(),
          o = kF(),
          a = RF(),
          i = DF(),
          s = Hn(),
          l = hb(),
          u = '[object Map]',
          c = '[object Object]',
          d = '[object Promise]',
          y = '[object Set]',
          f = '[object WeakMap]',
          h = '[object DataView]',
          g = l(r),
          _ = l(n),
          x = l(o),
          v = l(a),
          O = l(i),
          C = s;
        ((r && C(new r(new ArrayBuffer(1))) != h) ||
          (n && C(new n()) != u) ||
          (o && C(o.resolve()) != d) ||
          (a && C(new a()) != y) ||
          (i && C(new i()) != f)) &&
          (C = b(function (I) {
            var P = s(I),
              F = P == c ? I.constructor : void 0,
              D = F ? l(F) : '';
            if (D)
              switch (D) {
                case g:
                  return h;
                case _:
                  return u;
                case x:
                  return d;
                case v:
                  return y;
                case O:
                  return f;
              }
            return P;
          }, 'getTag')),
          (t.exports = C);
      }),
      jF = K((e, t) => {
        var r = Eb(),
          n = wb(),
          o = wF(),
          a = IF(),
          i = FF(),
          s = zt(),
          l = gb(),
          u = vb(),
          c = 1,
          d = '[object Arguments]',
          y = '[object Array]',
          f = '[object Object]',
          h = Object.prototype,
          g = h.hasOwnProperty;
        function _(x, v, O, C, I, P) {
          var F = s(x),
            D = s(v),
            U = F ? y : i(x),
            G = D ? y : i(v);
          (U = U == d ? f : U), (G = G == d ? f : G);
          var X = U == f,
            Q = G == f,
            V = U == G;
          if (V && l(x)) {
            if (!l(v)) return !1;
            (F = !0), (X = !1);
          }
          if (V && !X)
            return (
              P || (P = new r()),
              F || u(x) ? n(x, v, O, C, I, P) : o(x, v, U, O, C, I, P)
            );
          if (!(O & c)) {
            var R = X && g.call(x, '__wrapped__'),
              q = Q && g.call(v, '__wrapped__');
            if (R || q) {
              var M = R ? x.value() : x,
                Y = q ? v.value() : v;
              return P || (P = new r()), I(M, Y, O, C, P);
            }
          }
          return V ? (P || (P = new r()), a(x, v, O, C, I, P)) : !1;
        }
        b(_, 'baseIsEqualDeep'), (t.exports = _);
      }),
      Sb = K((e, t) => {
        var r = jF(),
          n = Gn();
        function o(a, i, s, l, u) {
          return a === i
            ? !0
            : a == null || i == null || (!n(a) && !n(i))
              ? a !== a && i !== i
              : r(a, i, s, l, o, u);
        }
        b(o, 'baseIsEqual'), (t.exports = o);
      }),
      NF = K((e, t) => {
        var r = Eb(),
          n = Sb(),
          o = 1,
          a = 2;
        function i(s, l, u, c) {
          var d = u.length,
            y = d,
            f = !c;
          if (s == null) return !y;
          for (s = Object(s); d--; ) {
            var h = u[d];
            if (f && h[2] ? h[1] !== s[h[0]] : !(h[0] in s)) return !1;
          }
          for (; ++d < y; ) {
            h = u[d];
            var g = h[0],
              _ = s[g],
              x = h[1];
            if (f && h[2]) {
              if (_ === void 0 && !(g in s)) return !1;
            } else {
              var v = new r();
              if (c) var O = c(_, x, g, s, l, v);
              if (!(O === void 0 ? n(x, _, o | a, c, v) : O)) return !1;
            }
          }
          return !0;
        }
        b(i, 'baseIsMatch'), (t.exports = i);
      }),
      Ab = K((e, t) => {
        var r = Us();
        function n(o) {
          return o === o && !r(o);
        }
        b(n, 'isStrictComparable'), (t.exports = n);
      }),
      BF = K((e, t) => {
        var r = Ab(),
          n = $s();
        function o(a) {
          for (var i = n(a), s = i.length; s--; ) {
            var l = i[s],
              u = a[l];
            i[s] = [l, u, r(u)];
          }
          return i;
        }
        b(o, 'getMatchData'), (t.exports = o);
      }),
      Tb = K((e, t) => {
        function r(n, o) {
          return function (a) {
            return a == null
              ? !1
              : a[n] === o && (o !== void 0 || n in Object(a));
          };
        }
        b(r, 'matchesStrictComparable'), (t.exports = r);
      }),
      LF = K((e, t) => {
        var r = NF(),
          n = BF(),
          o = Tb();
        function a(i) {
          var s = n(i);
          return s.length == 1 && s[0][2]
            ? o(s[0][0], s[0][1])
            : function (l) {
                return l === i || r(l, i, s);
              };
        }
        b(a, 'baseMatches'), (t.exports = a);
      }),
      Hs = K((e, t) => {
        var r = Hn(),
          n = Gn(),
          o = '[object Symbol]';
        function a(i) {
          return typeof i == 'symbol' || (n(i) && r(i) == o);
        }
        b(a, 'isSymbol'), (t.exports = a);
      }),
      Gs = K((e, t) => {
        var r = zt(),
          n = Hs(),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        function i(s, l) {
          if (r(s)) return !1;
          var u = typeof s;
          return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            s == null ||
            n(s)
            ? !0
            : a.test(s) || !o.test(s) || (l != null && s in Object(l));
        }
        b(i, 'isKey'), (t.exports = i);
      }),
      qF = K((e, t) => {
        var r = Vs(),
          n = 'Expected a function';
        function o(a, i) {
          if (typeof a != 'function' || (i != null && typeof i != 'function'))
            throw new TypeError(n);
          var s = b(function () {
            var l = arguments,
              u = i ? i.apply(this, l) : l[0],
              c = s.cache;
            if (c.has(u)) return c.get(u);
            var d = a.apply(this, l);
            return (s.cache = c.set(u, d) || c), d;
          }, 'memoized');
          return (s.cache = new (o.Cache || r)()), s;
        }
        b(o, 'memoize'), (o.Cache = r), (t.exports = o);
      }),
      MF = K((e, t) => {
        var r = qF(),
          n = 500;
        function o(a) {
          var i = r(a, function (l) {
              return s.size === n && s.clear(), l;
            }),
            s = i.cache;
          return i;
        }
        b(o, 'memoizeCapped'), (t.exports = o);
      }),
      UF = K((e, t) => {
        var r = MF(),
          n =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = r(function (i) {
            var s = [];
            return (
              i.charCodeAt(0) === 46 && s.push(''),
              i.replace(n, function (l, u, c, d) {
                s.push(c ? d.replace(o, '$1') : u || l);
              }),
              s
            );
          });
        t.exports = a;
      }),
      JF = K((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = Array(i);
            ++a < i;

          )
            s[a] = o(n[a], a, n);
          return s;
        }
        b(r, 'arrayMap'), (t.exports = r);
      }),
      $F = K((e, t) => {
        var r = sa(),
          n = JF(),
          o = zt(),
          a = Hs(),
          i = 1 / 0,
          s = r ? r.prototype : void 0,
          l = s ? s.toString : void 0;
        function u(c) {
          if (typeof c == 'string') return c;
          if (o(c)) return n(c, u) + '';
          if (a(c)) return l ? l.call(c) : '';
          var d = c + '';
          return d == '0' && 1 / c == -i ? '-0' : d;
        }
        b(u, 'baseToString'), (t.exports = u);
      }),
      zF = K((e, t) => {
        var r = $F();
        function n(o) {
          return o == null ? '' : r(o);
        }
        b(n, 'toString'), (t.exports = n);
      }),
      Cb = K((e, t) => {
        var r = zt(),
          n = Gs(),
          o = UF(),
          a = zF();
        function i(s, l) {
          return r(s) ? s : n(s, l) ? [s] : o(a(s));
        }
        b(i, 'castPath'), (t.exports = i);
      }),
      da = K((e, t) => {
        var r = Hs(),
          n = 1 / 0;
        function o(a) {
          if (typeof a == 'string' || r(a)) return a;
          var i = a + '';
          return i == '0' && 1 / a == -n ? '-0' : i;
        }
        b(o, 'toKey'), (t.exports = o);
      }),
      _b = K((e, t) => {
        var r = Cb(),
          n = da();
        function o(a, i) {
          i = r(i, a);
          for (var s = 0, l = i.length; a != null && s < l; ) a = a[n(i[s++])];
          return s && s == l ? a : void 0;
        }
        b(o, 'baseGet'), (t.exports = o);
      }),
      VF = K((e, t) => {
        var r = _b();
        function n(o, a, i) {
          var s = o == null ? void 0 : r(o, a);
          return s === void 0 ? i : s;
        }
        b(n, 'get'), (t.exports = n);
      }),
      HF = K((e, t) => {
        function r(n, o) {
          return n != null && o in Object(n);
        }
        b(r, 'baseHasIn'), (t.exports = r);
      }),
      GF = K((e, t) => {
        var r = Cb(),
          n = mb(),
          o = zt(),
          a = bb(),
          i = Js(),
          s = da();
        function l(u, c, d) {
          c = r(c, u);
          for (var y = -1, f = c.length, h = !1; ++y < f; ) {
            var g = s(c[y]);
            if (!(h = u != null && d(u, g))) break;
            u = u[g];
          }
          return h || ++y != f
            ? h
            : ((f = u == null ? 0 : u.length),
              !!f && i(f) && a(g, f) && (o(u) || n(u)));
        }
        b(l, 'hasPath'), (t.exports = l);
      }),
      WF = K((e, t) => {
        var r = HF(),
          n = GF();
        function o(a, i) {
          return a != null && n(a, i, r);
        }
        b(o, 'hasIn'), (t.exports = o);
      }),
      KF = K((e, t) => {
        var r = Sb(),
          n = VF(),
          o = WF(),
          a = Gs(),
          i = Ab(),
          s = Tb(),
          l = da(),
          u = 1,
          c = 2;
        function d(y, f) {
          return a(y) && i(f)
            ? s(l(y), f)
            : function (h) {
                var g = n(h, y);
                return g === void 0 && g === f ? o(h, y) : r(f, g, u | c);
              };
        }
        b(d, 'baseMatchesProperty'), (t.exports = d);
      }),
      YF = K((e, t) => {
        function r(n) {
          return n;
        }
        b(r, 'identity'), (t.exports = r);
      }),
      XF = K((e, t) => {
        function r(n) {
          return function (o) {
            return o?.[n];
          };
        }
        b(r, 'baseProperty'), (t.exports = r);
      }),
      QF = K((e, t) => {
        var r = _b();
        function n(o) {
          return function (a) {
            return r(a, o);
          };
        }
        b(n, 'basePropertyDeep'), (t.exports = n);
      }),
      ZF = K((e, t) => {
        var r = XF(),
          n = QF(),
          o = Gs(),
          a = da();
        function i(s) {
          return o(s) ? r(a(s)) : n(s);
        }
        b(i, 'property'), (t.exports = i);
      }),
      ej = K((e, t) => {
        var r = LF(),
          n = KF(),
          o = YF(),
          a = zt(),
          i = ZF();
        function s(l) {
          return typeof l == 'function'
            ? l
            : l == null
              ? o
              : typeof l == 'object'
                ? a(l)
                  ? n(l[0], l[1])
                  : r(l)
                : i(l);
        }
        b(s, 'baseIteratee'), (t.exports = s);
      }),
      tj = K((e, t) => {
        var r = PD(),
          n = VD(),
          o = ej();
        function a(i, s) {
          var l = {};
          return (
            (s = o(s, 3)),
            n(i, function (u, c, d) {
              r(l, c, s(u, c, d));
            }),
            l
          );
        }
        b(a, 'mapValues'), (t.exports = a);
      }),
      rj = K((e, t) => {
        (function (r, n) {
          typeof e == 'object' && typeof t < 'u'
            ? n(e)
            : typeof define == 'function' && define.amd
              ? define(['exports'], n)
              : ((r = typeof globalThis < 'u' ? globalThis : r || self),
                n((r.jtpp = {})));
        })(e, function (r) {
          'use strict';
          function n(p) {
            return p.text !== void 0 && p.text !== ''
              ? `'${p.type}' with value '${p.text}'`
              : `'${p.type}'`;
          }
          b(n, 'tokenToString');
          let o = class Ob extends Error {
            constructor(w) {
              super(`No parslet found for token: ${n(w)}`),
                (this.token = w),
                Object.setPrototypeOf(this, Ob.prototype);
            }
            getToken() {
              return this.token;
            }
          };
          b(o, 'NoParsletFoundError');
          let a = o,
            i = class Ib extends Error {
              constructor(w) {
                super(`The parsing ended early. The next token was: ${n(w)}`),
                  (this.token = w),
                  Object.setPrototypeOf(this, Ib.prototype);
              }
              getToken() {
                return this.token;
              }
            };
          b(i, 'EarlyEndOfParseError');
          let s = i,
            l = class Pb extends Error {
              constructor(w, k) {
                let z = `Unexpected type: '${w.type}'.`;
                k !== void 0 && (z += ` Message: ${k}`),
                  super(z),
                  Object.setPrototypeOf(this, Pb.prototype);
              }
            };
          b(l, 'UnexpectedTypeError');
          let u = l;
          function c(p) {
            return (w) => (w.startsWith(p) ? { type: p, text: p } : null);
          }
          b(c, 'makePunctuationRule');
          function d(p) {
            let w = 0,
              k,
              z = p[0],
              ee = !1;
            if (z !== "'" && z !== '"') return null;
            for (; w < p.length; ) {
              if ((w++, (k = p[w]), !ee && k === z)) {
                w++;
                break;
              }
              ee = !ee && k === '\\';
            }
            if (k !== z) throw new Error('Unterminated String');
            return p.slice(0, w);
          }
          b(d, 'getQuoted');
          let y = new RegExp(
              '[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}',
              'u'
            ),
            f = new RegExp(
              '[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}',
              'u'
            );
          function h(p) {
            let w = p[0];
            if (!y.test(w)) return null;
            let k = 1;
            do {
              if (((w = p[k]), !f.test(w))) break;
              k++;
            } while (k < p.length);
            return p.slice(0, k);
          }
          b(h, 'getIdentifier');
          let g = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
          function _(p) {
            var w, k;
            return (k =
              (w = g.exec(p)) === null || w === void 0 ? void 0 : w[0]) !==
              null && k !== void 0
              ? k
              : null;
          }
          b(_, 'getNumber');
          let x = b((p) => {
            let w = h(p);
            return w == null ? null : { type: 'Identifier', text: w };
          }, 'identifierRule');
          function v(p) {
            return (w) => {
              if (!w.startsWith(p)) return null;
              let k = w[p.length];
              return k !== void 0 && f.test(k) ? null : { type: p, text: p };
            };
          }
          b(v, 'makeKeyWordRule');
          let O = b((p) => {
              let w = d(p);
              return w == null ? null : { type: 'StringValue', text: w };
            }, 'stringValueRule'),
            C = b(
              (p) => (p.length > 0 ? null : { type: 'EOF', text: '' }),
              'eofRule'
            ),
            I = b((p) => {
              let w = _(p);
              return w === null ? null : { type: 'Number', text: w };
            }, 'numberRule'),
            P = [
              C,
              c('=>'),
              c('('),
              c(')'),
              c('{'),
              c('}'),
              c('['),
              c(']'),
              c('|'),
              c('&'),
              c('<'),
              c('>'),
              c(','),
              c(';'),
              c('*'),
              c('?'),
              c('!'),
              c('='),
              c(':'),
              c('...'),
              c('.'),
              c('#'),
              c('~'),
              c('/'),
              c('@'),
              v('undefined'),
              v('null'),
              v('function'),
              v('this'),
              v('new'),
              v('module'),
              v('event'),
              v('external'),
              v('typeof'),
              v('keyof'),
              v('readonly'),
              v('import'),
              v('is'),
              v('in'),
              I,
              x,
              O,
            ],
            F = /^\s*\n\s*/,
            D = class ia {
              static create(w) {
                let k = this.read(w);
                w = k.text;
                let z = this.read(w);
                return (w = z.text), new ia(w, void 0, k.token, z.token);
              }
              constructor(w, k, z, ee) {
                (this.text = ''),
                  (this.text = w),
                  (this.previous = k),
                  (this.current = z),
                  (this.next = ee);
              }
              static read(w, k = !1) {
                (k = k || F.test(w)), (w = w.trim());
                for (let z of P) {
                  let ee = z(w);
                  if (ee !== null) {
                    let oe = Object.assign(Object.assign({}, ee), {
                      startOfLine: k,
                    });
                    return (
                      (w = w.slice(oe.text.length)), { text: w, token: oe }
                    );
                  }
                }
                throw new Error('Unexpected Token ' + w);
              }
              advance() {
                let w = ia.read(this.text);
                return new ia(w.text, this.current, this.next, w.token);
              }
            };
          b(D, 'Lexer');
          let U = D;
          function G(p) {
            if (p === void 0) throw new Error('Unexpected undefined');
            if (
              p.type === 'JsdocTypeKeyValue' ||
              p.type === 'JsdocTypeParameterList' ||
              p.type === 'JsdocTypeProperty' ||
              p.type === 'JsdocTypeReadonlyProperty' ||
              p.type === 'JsdocTypeObjectField' ||
              p.type === 'JsdocTypeJsdocObjectField' ||
              p.type === 'JsdocTypeIndexSignature' ||
              p.type === 'JsdocTypeMappedType'
            )
              throw new u(p);
            return p;
          }
          b(G, 'assertRootResult');
          function X(p) {
            return p.type === 'JsdocTypeKeyValue' ? V(p) : G(p);
          }
          b(X, 'assertPlainKeyValueOrRootResult');
          function Q(p) {
            return p.type === 'JsdocTypeName' ? p : V(p);
          }
          b(Q, 'assertPlainKeyValueOrNameResult');
          function V(p) {
            if (p.type !== 'JsdocTypeKeyValue') throw new u(p);
            return p;
          }
          b(V, 'assertPlainKeyValueResult');
          function R(p) {
            var w;
            if (p.type === 'JsdocTypeVariadic') {
              if (
                ((w = p.element) === null || w === void 0 ? void 0 : w.type) ===
                'JsdocTypeName'
              )
                return p;
              throw new u(p);
            }
            if (p.type !== 'JsdocTypeNumber' && p.type !== 'JsdocTypeName')
              throw new u(p);
            return p;
          }
          b(R, 'assertNumberOrVariadicNameResult');
          function q(p) {
            return (
              p.type === 'JsdocTypeIndexSignature' ||
              p.type === 'JsdocTypeMappedType'
            );
          }
          b(q, 'isSquaredProperty');
          var M;
          (function (p) {
            (p[(p.ALL = 0)] = 'ALL'),
              (p[(p.PARAMETER_LIST = 1)] = 'PARAMETER_LIST'),
              (p[(p.OBJECT = 2)] = 'OBJECT'),
              (p[(p.KEY_VALUE = 3)] = 'KEY_VALUE'),
              (p[(p.UNION = 4)] = 'UNION'),
              (p[(p.INTERSECTION = 5)] = 'INTERSECTION'),
              (p[(p.PREFIX = 6)] = 'PREFIX'),
              (p[(p.INFIX = 7)] = 'INFIX'),
              (p[(p.TUPLE = 8)] = 'TUPLE'),
              (p[(p.SYMBOL = 9)] = 'SYMBOL'),
              (p[(p.OPTIONAL = 10)] = 'OPTIONAL'),
              (p[(p.NULLABLE = 11)] = 'NULLABLE'),
              (p[(p.KEY_OF_TYPE_OF = 12)] = 'KEY_OF_TYPE_OF'),
              (p[(p.FUNCTION = 13)] = 'FUNCTION'),
              (p[(p.ARROW = 14)] = 'ARROW'),
              (p[(p.ARRAY_BRACKETS = 15)] = 'ARRAY_BRACKETS'),
              (p[(p.GENERIC = 16)] = 'GENERIC'),
              (p[(p.NAME_PATH = 17)] = 'NAME_PATH'),
              (p[(p.PARENTHESIS = 18)] = 'PARENTHESIS'),
              (p[(p.SPECIAL_TYPES = 19)] = 'SPECIAL_TYPES');
          })(M || (M = {}));
          let Y = class {
            constructor(w, k, z) {
              (this.grammar = w),
                typeof k == 'string'
                  ? (this._lexer = U.create(k))
                  : (this._lexer = k),
                (this.baseParser = z);
            }
            get lexer() {
              return this._lexer;
            }
            parse() {
              let w = this.parseType(M.ALL);
              if (this.lexer.current.type !== 'EOF')
                throw new s(this.lexer.current);
              return w;
            }
            parseType(w) {
              return G(this.parseIntermediateType(w));
            }
            parseIntermediateType(w) {
              let k = this.tryParslets(null, w);
              if (k === null) throw new a(this.lexer.current);
              return this.parseInfixIntermediateType(k, w);
            }
            parseInfixIntermediateType(w, k) {
              let z = this.tryParslets(w, k);
              for (; z !== null; ) (w = z), (z = this.tryParslets(w, k));
              return w;
            }
            tryParslets(w, k) {
              for (let z of this.grammar) {
                let ee = z(this, k, w);
                if (ee !== null) return ee;
              }
              return null;
            }
            consume(w) {
              return (
                Array.isArray(w) || (w = [w]),
                w.includes(this.lexer.current.type)
                  ? ((this._lexer = this.lexer.advance()), !0)
                  : !1
              );
            }
            acceptLexerState(w) {
              this._lexer = w.lexer;
            }
          };
          b(Y, 'Parser');
          let te = Y;
          function ne(p) {
            return (
              p === 'EOF' || p === '|' || p === ',' || p === ')' || p === '>'
            );
          }
          b(ne, 'isQuestionMarkUnknownType');
          let re = b((p, w, k) => {
            let z = p.lexer.current.type,
              ee = p.lexer.next.type;
            return (k == null && z === '?' && !ne(ee)) ||
              (k != null && z === '?')
              ? (p.consume('?'),
                k == null
                  ? {
                      type: 'JsdocTypeNullable',
                      element: p.parseType(M.NULLABLE),
                      meta: { position: 'prefix' },
                    }
                  : {
                      type: 'JsdocTypeNullable',
                      element: G(k),
                      meta: { position: 'suffix' },
                    })
              : null;
          }, 'nullableParslet');
          function Z(p) {
            let w = b((k, z, ee) => {
              let oe = k.lexer.current.type,
                ie = k.lexer.next.type;
              if (ee === null) {
                if ('parsePrefix' in p && p.accept(oe, ie))
                  return p.parsePrefix(k);
              } else if (
                'parseInfix' in p &&
                p.precedence > z &&
                p.accept(oe, ie)
              )
                return p.parseInfix(k, ee);
              return null;
            }, 'parslet');
            return Object.defineProperty(w, 'name', { value: p.name }), w;
          }
          b(Z, 'composeParslet');
          let ae = Z({
              name: 'optionalParslet',
              accept: b((p) => p === '=', 'accept'),
              precedence: M.OPTIONAL,
              parsePrefix: b(
                (p) => (
                  p.consume('='),
                  {
                    type: 'JsdocTypeOptional',
                    element: p.parseType(M.OPTIONAL),
                    meta: { position: 'prefix' },
                  }
                ),
                'parsePrefix'
              ),
              parseInfix: b(
                (p, w) => (
                  p.consume('='),
                  {
                    type: 'JsdocTypeOptional',
                    element: G(w),
                    meta: { position: 'suffix' },
                  }
                ),
                'parseInfix'
              ),
            }),
            le = Z({
              name: 'numberParslet',
              accept: b((p) => p === 'Number', 'accept'),
              parsePrefix: b((p) => {
                let w = parseFloat(p.lexer.current.text);
                return (
                  p.consume('Number'), { type: 'JsdocTypeNumber', value: w }
                );
              }, 'parsePrefix'),
            }),
            Ee = Z({
              name: 'parenthesisParslet',
              accept: b((p) => p === '(', 'accept'),
              parsePrefix: b((p) => {
                if ((p.consume('('), p.consume(')')))
                  return { type: 'JsdocTypeParameterList', elements: [] };
                let w = p.parseIntermediateType(M.ALL);
                if (!p.consume(')'))
                  throw new Error('Unterminated parenthesis');
                return w.type === 'JsdocTypeParameterList'
                  ? w
                  : w.type === 'JsdocTypeKeyValue'
                    ? { type: 'JsdocTypeParameterList', elements: [w] }
                    : { type: 'JsdocTypeParenthesis', element: G(w) };
              }, 'parsePrefix'),
            }),
            pe = Z({
              name: 'specialTypesParslet',
              accept: b(
                (p, w) =>
                  (p === '?' && ne(w)) ||
                  p === 'null' ||
                  p === 'undefined' ||
                  p === '*',
                'accept'
              ),
              parsePrefix: b((p) => {
                if (p.consume('null')) return { type: 'JsdocTypeNull' };
                if (p.consume('undefined'))
                  return { type: 'JsdocTypeUndefined' };
                if (p.consume('*')) return { type: 'JsdocTypeAny' };
                if (p.consume('?')) return { type: 'JsdocTypeUnknown' };
                throw new Error('Unacceptable token: ' + p.lexer.current.text);
              }, 'parsePrefix'),
            }),
            we = Z({
              name: 'notNullableParslet',
              accept: b((p) => p === '!', 'accept'),
              precedence: M.NULLABLE,
              parsePrefix: b(
                (p) => (
                  p.consume('!'),
                  {
                    type: 'JsdocTypeNotNullable',
                    element: p.parseType(M.NULLABLE),
                    meta: { position: 'prefix' },
                  }
                ),
                'parsePrefix'
              ),
              parseInfix: b(
                (p, w) => (
                  p.consume('!'),
                  {
                    type: 'JsdocTypeNotNullable',
                    element: G(w),
                    meta: { position: 'suffix' },
                  }
                ),
                'parseInfix'
              ),
            });
          function Le({ allowTrailingComma: p }) {
            return Z({
              name: 'parameterListParslet',
              accept: b((w) => w === ',', 'accept'),
              precedence: M.PARAMETER_LIST,
              parseInfix: b((w, k) => {
                let z = [X(k)];
                w.consume(',');
                do
                  try {
                    let ee = w.parseIntermediateType(M.PARAMETER_LIST);
                    z.push(X(ee));
                  } catch (ee) {
                    if (p && ee instanceof a) break;
                    throw ee;
                  }
                while (w.consume(','));
                if (
                  z.length > 0 &&
                  z.slice(0, -1).some((ee) => ee.type === 'JsdocTypeVariadic')
                )
                  throw new Error(
                    'Only the last parameter may be a rest parameter'
                  );
                return { type: 'JsdocTypeParameterList', elements: z };
              }, 'parseInfix'),
            });
          }
          b(Le, 'createParameterListParslet');
          let Ve = Z({
              name: 'genericParslet',
              accept: b(
                (p, w) => p === '<' || (p === '.' && w === '<'),
                'accept'
              ),
              precedence: M.GENERIC,
              parseInfix: b((p, w) => {
                let k = p.consume('.');
                p.consume('<');
                let z = [];
                do z.push(p.parseType(M.PARAMETER_LIST));
                while (p.consume(','));
                if (!p.consume('>'))
                  throw new Error('Unterminated generic parameter list');
                return {
                  type: 'JsdocTypeGeneric',
                  left: G(w),
                  elements: z,
                  meta: { brackets: 'angle', dot: k },
                };
              }, 'parseInfix'),
            }),
            Ye = Z({
              name: 'unionParslet',
              accept: b((p) => p === '|', 'accept'),
              precedence: M.UNION,
              parseInfix: b((p, w) => {
                p.consume('|');
                let k = [];
                do k.push(p.parseType(M.UNION));
                while (p.consume('|'));
                return { type: 'JsdocTypeUnion', elements: [G(w), ...k] };
              }, 'parseInfix'),
            }),
            fe = [
              re,
              ae,
              le,
              Ee,
              pe,
              we,
              Le({ allowTrailingComma: !0 }),
              Ve,
              Ye,
              ae,
            ];
          function Ie({
            allowSquareBracketsOnAnyType: p,
            allowJsdocNamePaths: w,
            pathGrammar: k,
          }) {
            return b(function (z, ee, oe) {
              if (oe == null || ee >= M.NAME_PATH) return null;
              let ie = z.lexer.current.type,
                Te = z.lexer.next.type;
              if (
                !(
                  (ie === '.' && Te !== '<') ||
                  (ie === '[' && (p || oe.type === 'JsdocTypeName')) ||
                  (w && (ie === '~' || ie === '#'))
                )
              )
                return null;
              let _e,
                He = !1;
              z.consume('.')
                ? (_e = 'property')
                : z.consume('[')
                  ? ((_e = 'property-brackets'), (He = !0))
                  : z.consume('~')
                    ? (_e = 'inner')
                    : (z.consume('#'), (_e = 'instance'));
              let At = k !== null ? new te(k, z.lexer, z) : z,
                pt = At.parseIntermediateType(M.NAME_PATH);
              z.acceptLexerState(At);
              let hn;
              switch (pt.type) {
                case 'JsdocTypeName':
                  hn = {
                    type: 'JsdocTypeProperty',
                    value: pt.value,
                    meta: { quote: void 0 },
                  };
                  break;
                case 'JsdocTypeNumber':
                  hn = {
                    type: 'JsdocTypeProperty',
                    value: pt.value.toString(10),
                    meta: { quote: void 0 },
                  };
                  break;
                case 'JsdocTypeStringValue':
                  hn = {
                    type: 'JsdocTypeProperty',
                    value: pt.value,
                    meta: { quote: pt.meta.quote },
                  };
                  break;
                case 'JsdocTypeSpecialNamePath':
                  if (pt.specialType === 'event') hn = pt;
                  else
                    throw new u(
                      pt,
                      "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'"
                    );
                  break;
                default:
                  throw new u(
                    pt,
                    "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'"
                  );
              }
              if (He && !z.consume(']')) {
                let Vl = z.lexer.current;
                throw new Error(
                  `Unterminated square brackets. Next token is '${Vl.type}' with text '${Vl.text}'`
                );
              }
              return {
                type: 'JsdocTypeNamePath',
                left: G(oe),
                right: hn,
                pathType: _e,
              };
            }, 'namePathParslet');
          }
          b(Ie, 'createNamePathParslet');
          function ye({ allowedAdditionalTokens: p }) {
            return Z({
              name: 'nameParslet',
              accept: b(
                (w) =>
                  w === 'Identifier' ||
                  w === 'this' ||
                  w === 'new' ||
                  p.includes(w),
                'accept'
              ),
              parsePrefix: b((w) => {
                let { type: k, text: z } = w.lexer.current;
                return w.consume(k), { type: 'JsdocTypeName', value: z };
              }, 'parsePrefix'),
            });
          }
          b(ye, 'createNameParslet');
          let Re = Z({
            name: 'stringValueParslet',
            accept: b((p) => p === 'StringValue', 'accept'),
            parsePrefix: b((p) => {
              let w = p.lexer.current.text;
              return (
                p.consume('StringValue'),
                {
                  type: 'JsdocTypeStringValue',
                  value: w.slice(1, -1),
                  meta: { quote: w[0] === "'" ? 'single' : 'double' },
                }
              );
            }, 'parsePrefix'),
          });
          function Ze({ pathGrammar: p, allowedTypes: w }) {
            return Z({
              name: 'specialNamePathParslet',
              accept: b((k) => w.includes(k), 'accept'),
              parsePrefix: b((k) => {
                let z = k.lexer.current.type;
                if ((k.consume(z), !k.consume(':')))
                  return { type: 'JsdocTypeName', value: z };
                let ee,
                  oe = k.lexer.current;
                if (k.consume('StringValue'))
                  ee = {
                    type: 'JsdocTypeSpecialNamePath',
                    value: oe.text.slice(1, -1),
                    specialType: z,
                    meta: { quote: oe.text[0] === "'" ? 'single' : 'double' },
                  };
                else {
                  let _e = '',
                    He = ['Identifier', '@', '/'];
                  for (; He.some((At) => k.consume(At)); )
                    (_e += oe.text), (oe = k.lexer.current);
                  ee = {
                    type: 'JsdocTypeSpecialNamePath',
                    value: _e,
                    specialType: z,
                    meta: { quote: void 0 },
                  };
                }
                let ie = new te(p, k.lexer, k),
                  Te = ie.parseInfixIntermediateType(ee, M.ALL);
                return k.acceptLexerState(ie), G(Te);
              }, 'parsePrefix'),
            });
          }
          b(Ze, 'createSpecialNamePathParslet');
          let qe = [
              ye({ allowedAdditionalTokens: ['external', 'module'] }),
              Re,
              le,
              Ie({
                allowSquareBracketsOnAnyType: !1,
                allowJsdocNamePaths: !0,
                pathGrammar: null,
              }),
            ],
            ce = [...qe, Ze({ allowedTypes: ['event'], pathGrammar: qe })];
          function Se(p) {
            let w;
            if (p.type === 'JsdocTypeParameterList') w = p.elements;
            else if (p.type === 'JsdocTypeParenthesis') w = [p.element];
            else throw new u(p);
            return w.map((k) => X(k));
          }
          b(Se, 'getParameters');
          function Ft(p) {
            let w = Se(p);
            if (w.some((k) => k.type === 'JsdocTypeKeyValue'))
              throw new Error('No parameter should be named');
            return w;
          }
          b(Ft, 'getUnnamedParameters');
          function ft({
            allowNamedParameters: p,
            allowNoReturnType: w,
            allowWithoutParenthesis: k,
            allowNewAsFunctionKeyword: z,
          }) {
            return Z({
              name: 'functionParslet',
              accept: b(
                (ee, oe) =>
                  ee === 'function' || (z && ee === 'new' && oe === '('),
                'accept'
              ),
              parsePrefix: b((ee) => {
                let oe = ee.consume('new');
                ee.consume('function');
                let ie = ee.lexer.current.type === '(';
                if (!ie) {
                  if (!k) throw new Error('function is missing parameter list');
                  return { type: 'JsdocTypeName', value: 'function' };
                }
                let Te = {
                    type: 'JsdocTypeFunction',
                    parameters: [],
                    arrow: !1,
                    constructor: oe,
                    parenthesis: ie,
                  },
                  _e = ee.parseIntermediateType(M.FUNCTION);
                if (p === void 0) Te.parameters = Ft(_e);
                else {
                  if (oe && _e.type === 'JsdocTypeFunction' && _e.arrow)
                    return (Te = _e), (Te.constructor = !0), Te;
                  Te.parameters = Se(_e);
                  for (let He of Te.parameters)
                    if (He.type === 'JsdocTypeKeyValue' && !p.includes(He.key))
                      throw new Error(
                        `only allowed named parameters are ${p.join(', ')} but got ${He.type}`
                      );
                }
                if (ee.consume(':')) Te.returnType = ee.parseType(M.PREFIX);
                else if (!w) throw new Error('function is missing return type');
                return Te;
              }, 'parsePrefix'),
            });
          }
          b(ft, 'createFunctionParslet');
          function wt({ allowPostfix: p, allowEnclosingBrackets: w }) {
            return Z({
              name: 'variadicParslet',
              accept: b((k) => k === '...', 'accept'),
              precedence: M.PREFIX,
              parsePrefix: b((k) => {
                k.consume('...');
                let z = w && k.consume('[');
                try {
                  let ee = k.parseType(M.PREFIX);
                  if (z && !k.consume(']'))
                    throw new Error("Unterminated variadic type. Missing ']'");
                  return {
                    type: 'JsdocTypeVariadic',
                    element: G(ee),
                    meta: { position: 'prefix', squareBrackets: z },
                  };
                } catch (ee) {
                  if (ee instanceof a) {
                    if (z)
                      throw new Error(
                        'Empty square brackets for variadic are not allowed.'
                      );
                    return {
                      type: 'JsdocTypeVariadic',
                      meta: { position: void 0, squareBrackets: !1 },
                    };
                  } else throw ee;
                }
              }, 'parsePrefix'),
              parseInfix: p
                ? (k, z) => (
                    k.consume('...'),
                    {
                      type: 'JsdocTypeVariadic',
                      element: G(z),
                      meta: { position: 'suffix', squareBrackets: !1 },
                    }
                  )
                : void 0,
            });
          }
          b(wt, 'createVariadicParslet');
          let an = Z({
              name: 'symbolParslet',
              accept: b((p) => p === '(', 'accept'),
              precedence: M.SYMBOL,
              parseInfix: b((p, w) => {
                if (w.type !== 'JsdocTypeName')
                  throw new Error(
                    "Symbol expects a name on the left side. (Reacting on '(')"
                  );
                p.consume('(');
                let k = { type: 'JsdocTypeSymbol', value: w.value };
                if (!p.consume(')')) {
                  let z = p.parseIntermediateType(M.SYMBOL);
                  if (((k.element = R(z)), !p.consume(')')))
                    throw new Error('Symbol does not end after value');
                }
                return k;
              }, 'parseInfix'),
            }),
            sn = Z({
              name: 'arrayBracketsParslet',
              precedence: M.ARRAY_BRACKETS,
              accept: b((p, w) => p === '[' && w === ']', 'accept'),
              parseInfix: b(
                (p, w) => (
                  p.consume('['),
                  p.consume(']'),
                  {
                    type: 'JsdocTypeGeneric',
                    left: { type: 'JsdocTypeName', value: 'Array' },
                    elements: [G(w)],
                    meta: { brackets: 'square', dot: !1 },
                  }
                ),
                'parseInfix'
              ),
            });
          function Kt({ objectFieldGrammar: p, allowKeyTypes: w }) {
            return Z({
              name: 'objectParslet',
              accept: b((k) => k === '{', 'accept'),
              parsePrefix: b((k) => {
                k.consume('{');
                let z = {
                  type: 'JsdocTypeObject',
                  meta: { separator: 'comma' },
                  elements: [],
                };
                if (!k.consume('}')) {
                  let ee,
                    oe = new te(p, k.lexer, k);
                  for (;;) {
                    oe.acceptLexerState(k);
                    let ie = oe.parseIntermediateType(M.OBJECT);
                    k.acceptLexerState(oe),
                      ie === void 0 &&
                        w &&
                        (ie = k.parseIntermediateType(M.OBJECT));
                    let Te = !1;
                    if (
                      (ie.type === 'JsdocTypeNullable' &&
                        ((Te = !0), (ie = ie.element)),
                      ie.type === 'JsdocTypeNumber' ||
                        ie.type === 'JsdocTypeName' ||
                        ie.type === 'JsdocTypeStringValue')
                    ) {
                      let _e;
                      ie.type === 'JsdocTypeStringValue' &&
                        (_e = ie.meta.quote),
                        z.elements.push({
                          type: 'JsdocTypeObjectField',
                          key: ie.value.toString(),
                          right: void 0,
                          optional: Te,
                          readonly: !1,
                          meta: { quote: _e },
                        });
                    } else if (
                      ie.type === 'JsdocTypeObjectField' ||
                      ie.type === 'JsdocTypeJsdocObjectField'
                    )
                      z.elements.push(ie);
                    else throw new u(ie);
                    if (k.lexer.current.startOfLine) ee = 'linebreak';
                    else if (k.consume(',')) ee = 'comma';
                    else if (k.consume(';')) ee = 'semicolon';
                    else break;
                    if (k.lexer.current.type === '}') break;
                  }
                  if (((z.meta.separator = ee ?? 'comma'), !k.consume('}')))
                    throw new Error("Unterminated record type. Missing '}'");
                }
                return z;
              }, 'parsePrefix'),
            });
          }
          b(Kt, 'createObjectParslet');
          function Yt({
            allowSquaredProperties: p,
            allowKeyTypes: w,
            allowReadonly: k,
            allowOptional: z,
          }) {
            return Z({
              name: 'objectFieldParslet',
              precedence: M.KEY_VALUE,
              accept: b((ee) => ee === ':', 'accept'),
              parseInfix: b((ee, oe) => {
                var ie;
                let Te = !1,
                  _e = !1;
                z &&
                  oe.type === 'JsdocTypeNullable' &&
                  ((Te = !0), (oe = oe.element)),
                  k &&
                    oe.type === 'JsdocTypeReadonlyProperty' &&
                    ((_e = !0), (oe = oe.element));
                let He =
                  (ie = ee.baseParser) !== null && ie !== void 0 ? ie : ee;
                if (
                  (He.acceptLexerState(ee),
                  oe.type === 'JsdocTypeNumber' ||
                    oe.type === 'JsdocTypeName' ||
                    oe.type === 'JsdocTypeStringValue' ||
                    q(oe))
                ) {
                  if (q(oe) && !p) throw new u(oe);
                  He.consume(':');
                  let At;
                  oe.type === 'JsdocTypeStringValue' && (At = oe.meta.quote);
                  let pt = He.parseType(M.KEY_VALUE);
                  return (
                    ee.acceptLexerState(He),
                    {
                      type: 'JsdocTypeObjectField',
                      key: q(oe) ? oe : oe.value.toString(),
                      right: pt,
                      optional: Te,
                      readonly: _e,
                      meta: { quote: At },
                    }
                  );
                } else {
                  if (!w) throw new u(oe);
                  He.consume(':');
                  let At = He.parseType(M.KEY_VALUE);
                  return (
                    ee.acceptLexerState(He),
                    {
                      type: 'JsdocTypeJsdocObjectField',
                      left: G(oe),
                      right: At,
                    }
                  );
                }
              }, 'parseInfix'),
            });
          }
          b(Yt, 'createObjectFieldParslet');
          function Xt({ allowOptional: p, allowVariadic: w }) {
            return Z({
              name: 'keyValueParslet',
              precedence: M.KEY_VALUE,
              accept: b((k) => k === ':', 'accept'),
              parseInfix: b((k, z) => {
                let ee = !1,
                  oe = !1;
                if (
                  (p &&
                    z.type === 'JsdocTypeNullable' &&
                    ((ee = !0), (z = z.element)),
                  w &&
                    z.type === 'JsdocTypeVariadic' &&
                    z.element !== void 0 &&
                    ((oe = !0), (z = z.element)),
                  z.type !== 'JsdocTypeName')
                )
                  throw new u(z);
                k.consume(':');
                let ie = k.parseType(M.KEY_VALUE);
                return {
                  type: 'JsdocTypeKeyValue',
                  key: z.value,
                  right: ie,
                  optional: ee,
                  variadic: oe,
                };
              }, 'parseInfix'),
            });
          }
          b(Xt, 'createKeyValueParslet');
          let xr = [
              ...fe,
              ft({
                allowWithoutParenthesis: !0,
                allowNamedParameters: ['this', 'new'],
                allowNoReturnType: !0,
                allowNewAsFunctionKeyword: !1,
              }),
              Re,
              Ze({
                allowedTypes: ['module', 'external', 'event'],
                pathGrammar: ce,
              }),
              wt({ allowEnclosingBrackets: !0, allowPostfix: !0 }),
              ye({ allowedAdditionalTokens: ['keyof'] }),
              an,
              sn,
              Ie({
                allowSquareBracketsOnAnyType: !1,
                allowJsdocNamePaths: !0,
                pathGrammar: ce,
              }),
            ],
            ro = [
              ...xr,
              Kt({
                objectFieldGrammar: [
                  ye({ allowedAdditionalTokens: ['module', 'in'] }),
                  Yt({
                    allowSquaredProperties: !1,
                    allowKeyTypes: !0,
                    allowOptional: !1,
                    allowReadonly: !1,
                  }),
                  ...xr,
                ],
                allowKeyTypes: !0,
              }),
              Xt({ allowOptional: !0, allowVariadic: !0 }),
            ],
            St = Z({
              name: 'typeOfParslet',
              accept: b((p) => p === 'typeof', 'accept'),
              parsePrefix: b(
                (p) => (
                  p.consume('typeof'),
                  {
                    type: 'JsdocTypeTypeof',
                    element: G(p.parseType(M.KEY_OF_TYPE_OF)),
                  }
                ),
                'parsePrefix'
              ),
            }),
            Er = [
              ye({
                allowedAdditionalTokens: [
                  'module',
                  'keyof',
                  'event',
                  'external',
                  'in',
                ],
              }),
              re,
              ae,
              Re,
              le,
              Yt({
                allowSquaredProperties: !1,
                allowKeyTypes: !1,
                allowOptional: !1,
                allowReadonly: !1,
              }),
            ],
            ln = [
              ...fe,
              Kt({ allowKeyTypes: !1, objectFieldGrammar: Er }),
              ye({ allowedAdditionalTokens: ['event', 'external', 'in'] }),
              St,
              ft({
                allowWithoutParenthesis: !1,
                allowNamedParameters: ['this', 'new'],
                allowNoReturnType: !0,
                allowNewAsFunctionKeyword: !1,
              }),
              wt({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
              ye({ allowedAdditionalTokens: ['keyof'] }),
              Ze({ allowedTypes: ['module'], pathGrammar: ce }),
              Ie({
                allowSquareBracketsOnAnyType: !1,
                allowJsdocNamePaths: !0,
                pathGrammar: ce,
              }),
              Xt({ allowOptional: !1, allowVariadic: !1 }),
              an,
            ];
          function un({ allowQuestionMark: p }) {
            return Z({
              name: 'tupleParslet',
              accept: b((w) => w === '[', 'accept'),
              parsePrefix: b((w) => {
                w.consume('[');
                let k = { type: 'JsdocTypeTuple', elements: [] };
                if (w.consume(']')) return k;
                let z = w.parseIntermediateType(M.ALL);
                if (
                  (z.type === 'JsdocTypeParameterList'
                    ? z.elements[0].type === 'JsdocTypeKeyValue'
                      ? (k.elements = z.elements.map(V))
                      : (k.elements = z.elements.map(G))
                    : z.type === 'JsdocTypeKeyValue'
                      ? (k.elements = [V(z)])
                      : (k.elements = [G(z)]),
                  !w.consume(']'))
                )
                  throw new Error("Unterminated '['");
                if (
                  !p &&
                  k.elements.some((ee) => ee.type === 'JsdocTypeUnknown')
                )
                  throw new Error('Question mark in tuple not allowed');
                return k;
              }, 'parsePrefix'),
            });
          }
          b(un, 'createTupleParslet');
          let no = Z({
              name: 'keyOfParslet',
              accept: b((p) => p === 'keyof', 'accept'),
              parsePrefix: b(
                (p) => (
                  p.consume('keyof'),
                  {
                    type: 'JsdocTypeKeyof',
                    element: G(p.parseType(M.KEY_OF_TYPE_OF)),
                  }
                ),
                'parsePrefix'
              ),
            }),
            wr = Z({
              name: 'importParslet',
              accept: b((p) => p === 'import', 'accept'),
              parsePrefix: b((p) => {
                if ((p.consume('import'), !p.consume('(')))
                  throw new Error('Missing parenthesis after import keyword');
                let w = p.parseType(M.PREFIX);
                if (w.type !== 'JsdocTypeStringValue')
                  throw new Error(
                    'Only string values are allowed as paths for imports'
                  );
                if (!p.consume(')'))
                  throw new Error(
                    'Missing closing parenthesis after import keyword'
                  );
                return { type: 'JsdocTypeImport', element: w };
              }, 'parsePrefix'),
            }),
            Qt = Z({
              name: 'readonlyPropertyParslet',
              accept: b((p) => p === 'readonly', 'accept'),
              parsePrefix: b(
                (p) => (
                  p.consume('readonly'),
                  {
                    type: 'JsdocTypeReadonlyProperty',
                    element: p.parseType(M.KEY_VALUE),
                  }
                ),
                'parsePrefix'
              ),
            }),
            $ = Z({
              name: 'arrowFunctionParslet',
              precedence: M.ARROW,
              accept: b((p) => p === '=>', 'accept'),
              parseInfix: b(
                (p, w) => (
                  p.consume('=>'),
                  {
                    type: 'JsdocTypeFunction',
                    parameters: Se(w).map(Q),
                    arrow: !0,
                    constructor: !1,
                    parenthesis: !0,
                    returnType: p.parseType(M.OBJECT),
                  }
                ),
                'parseInfix'
              ),
            }),
            H = Z({
              name: 'intersectionParslet',
              accept: b((p) => p === '&', 'accept'),
              precedence: M.INTERSECTION,
              parseInfix: b((p, w) => {
                p.consume('&');
                let k = [];
                do k.push(p.parseType(M.INTERSECTION));
                while (p.consume('&'));
                return {
                  type: 'JsdocTypeIntersection',
                  elements: [G(w), ...k],
                };
              }, 'parseInfix'),
            }),
            ue = Z({
              name: 'predicateParslet',
              precedence: M.INFIX,
              accept: b((p) => p === 'is', 'accept'),
              parseInfix: b((p, w) => {
                if (w.type !== 'JsdocTypeName')
                  throw new u(
                    w,
                    'A typescript predicate always has to have a name on the left side.'
                  );
                return (
                  p.consume('is'),
                  {
                    type: 'JsdocTypePredicate',
                    left: w,
                    right: G(p.parseIntermediateType(M.INFIX)),
                  }
                );
              }, 'parseInfix'),
            }),
            de = Z({
              name: 'objectSquareBracketPropertyParslet',
              accept: b((p) => p === '[', 'accept'),
              parsePrefix: b((p) => {
                if (p.baseParser === void 0)
                  throw new Error('Only allowed inside object grammar');
                p.consume('[');
                let w = p.lexer.current.text;
                p.consume('Identifier');
                let k;
                if (p.consume(':')) {
                  let z = p.baseParser;
                  z.acceptLexerState(p),
                    (k = {
                      type: 'JsdocTypeIndexSignature',
                      key: w,
                      right: z.parseType(M.ARRAY_BRACKETS),
                    }),
                    p.acceptLexerState(z);
                } else if (p.consume('in')) {
                  let z = p.baseParser;
                  z.acceptLexerState(p),
                    (k = {
                      type: 'JsdocTypeMappedType',
                      key: w,
                      right: z.parseType(M.ARRAY_BRACKETS),
                    }),
                    p.acceptLexerState(z);
                } else
                  throw new Error(
                    "Missing ':' or 'in' inside square bracketed property."
                  );
                if (!p.consume(']'))
                  throw new Error('Unterminated square brackets');
                return k;
              }, 'parsePrefix'),
            }),
            Ae = [
              Qt,
              ye({
                allowedAdditionalTokens: [
                  'module',
                  'event',
                  'keyof',
                  'event',
                  'external',
                  'in',
                ],
              }),
              re,
              ae,
              Re,
              le,
              Yt({
                allowSquaredProperties: !0,
                allowKeyTypes: !1,
                allowOptional: !0,
                allowReadonly: !0,
              }),
              de,
            ],
            se = [
              ...fe,
              Kt({ allowKeyTypes: !1, objectFieldGrammar: Ae }),
              St,
              no,
              wr,
              Re,
              ft({
                allowWithoutParenthesis: !0,
                allowNoReturnType: !1,
                allowNamedParameters: ['this', 'new', 'args'],
                allowNewAsFunctionKeyword: !0,
              }),
              un({ allowQuestionMark: !1 }),
              wt({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
              ye({ allowedAdditionalTokens: ['event', 'external', 'in'] }),
              Ze({ allowedTypes: ['module'], pathGrammar: ce }),
              sn,
              $,
              Ie({
                allowSquareBracketsOnAnyType: !0,
                allowJsdocNamePaths: !1,
                pathGrammar: ce,
              }),
              H,
              ue,
              Xt({ allowVariadic: !0, allowOptional: !0 }),
            ];
          function ot(p, w) {
            switch (w) {
              case 'closure':
                return new te(ln, p).parse();
              case 'jsdoc':
                return new te(ro, p).parse();
              case 'typescript':
                return new te(se, p).parse();
            }
          }
          b(ot, 'parse');
          function yt(p, w = ['typescript', 'closure', 'jsdoc']) {
            let k;
            for (let z of w)
              try {
                return ot(p, z);
              } catch (ee) {
                k = ee;
              }
            throw k;
          }
          b(yt, 'tryParse');
          function ke(p, w) {
            let k = p[w.type];
            if (k === void 0)
              throw new Error(
                `In this set of transform rules exists no rule for type ${w.type}.`
              );
            return k(w, (z) => ke(p, z));
          }
          b(ke, 'transform');
          function xe(p) {
            throw new Error(
              'This transform is not available. Are you trying the correct parsing mode?'
            );
          }
          b(xe, 'notAvailableTransform');
          function Zt(p) {
            let w = { params: [] };
            for (let k of p.parameters)
              k.type === 'JsdocTypeKeyValue'
                ? k.key === 'this'
                  ? (w.this = k.right)
                  : k.key === 'new'
                    ? (w.new = k.right)
                    : w.params.push(k)
                : w.params.push(k);
            return w;
          }
          b(Zt, 'extractSpecialParams');
          function at(p, w, k) {
            return p === 'prefix' ? k + w : w + k;
          }
          b(at, 'applyPosition');
          function Ce(p, w) {
            switch (w) {
              case 'double':
                return `"${p}"`;
              case 'single':
                return `'${p}'`;
              case void 0:
                return p;
            }
          }
          b(Ce, 'quote');
          function Sr() {
            return {
              JsdocTypeParenthesis: b(
                (p, w) => `(${p.element !== void 0 ? w(p.element) : ''})`,
                'JsdocTypeParenthesis'
              ),
              JsdocTypeKeyof: b(
                (p, w) => `keyof ${w(p.element)}`,
                'JsdocTypeKeyof'
              ),
              JsdocTypeFunction: b((p, w) => {
                if (p.arrow) {
                  if (p.returnType === void 0)
                    throw new Error('Arrow function needs a return type.');
                  let k = `(${p.parameters.map(w).join(', ')}) => ${w(p.returnType)}`;
                  return p.constructor && (k = 'new ' + k), k;
                } else {
                  let k = p.constructor ? 'new' : 'function';
                  return (
                    p.parenthesis &&
                      ((k += `(${p.parameters.map(w).join(', ')})`),
                      p.returnType !== void 0 && (k += `: ${w(p.returnType)}`)),
                    k
                  );
                }
              }, 'JsdocTypeFunction'),
              JsdocTypeName: b((p) => p.value, 'JsdocTypeName'),
              JsdocTypeTuple: b(
                (p, w) => `[${p.elements.map(w).join(', ')}]`,
                'JsdocTypeTuple'
              ),
              JsdocTypeVariadic: b(
                (p, w) =>
                  p.meta.position === void 0
                    ? '...'
                    : at(p.meta.position, w(p.element), '...'),
                'JsdocTypeVariadic'
              ),
              JsdocTypeNamePath: b((p, w) => {
                let k = w(p.left),
                  z = w(p.right);
                switch (p.pathType) {
                  case 'inner':
                    return `${k}~${z}`;
                  case 'instance':
                    return `${k}#${z}`;
                  case 'property':
                    return `${k}.${z}`;
                  case 'property-brackets':
                    return `${k}[${z}]`;
                }
              }, 'JsdocTypeNamePath'),
              JsdocTypeStringValue: b(
                (p) => Ce(p.value, p.meta.quote),
                'JsdocTypeStringValue'
              ),
              JsdocTypeAny: b(() => '*', 'JsdocTypeAny'),
              JsdocTypeGeneric: b((p, w) => {
                if (p.meta.brackets === 'square') {
                  let k = p.elements[0],
                    z = w(k);
                  return k.type === 'JsdocTypeUnion' ||
                    k.type === 'JsdocTypeIntersection'
                    ? `(${z})[]`
                    : `${z}[]`;
                } else
                  return `${w(p.left)}${p.meta.dot ? '.' : ''}<${p.elements.map(w).join(', ')}>`;
              }, 'JsdocTypeGeneric'),
              JsdocTypeImport: b(
                (p, w) => `import(${w(p.element)})`,
                'JsdocTypeImport'
              ),
              JsdocTypeObjectField: b((p, w) => {
                let k = '';
                return (
                  p.readonly && (k += 'readonly '),
                  typeof p.key == 'string'
                    ? (k += Ce(p.key, p.meta.quote))
                    : (k += w(p.key)),
                  p.optional && (k += '?'),
                  p.right === void 0 ? k : k + `: ${w(p.right)}`
                );
              }, 'JsdocTypeObjectField'),
              JsdocTypeJsdocObjectField: b(
                (p, w) => `${w(p.left)}: ${w(p.right)}`,
                'JsdocTypeJsdocObjectField'
              ),
              JsdocTypeKeyValue: b((p, w) => {
                let k = p.key;
                return (
                  p.optional && (k += '?'),
                  p.variadic && (k = '...' + k),
                  p.right === void 0 ? k : k + `: ${w(p.right)}`
                );
              }, 'JsdocTypeKeyValue'),
              JsdocTypeSpecialNamePath: b(
                (p) => `${p.specialType}:${Ce(p.value, p.meta.quote)}`,
                'JsdocTypeSpecialNamePath'
              ),
              JsdocTypeNotNullable: b(
                (p, w) => at(p.meta.position, w(p.element), '!'),
                'JsdocTypeNotNullable'
              ),
              JsdocTypeNull: b(() => 'null', 'JsdocTypeNull'),
              JsdocTypeNullable: b(
                (p, w) => at(p.meta.position, w(p.element), '?'),
                'JsdocTypeNullable'
              ),
              JsdocTypeNumber: b((p) => p.value.toString(), 'JsdocTypeNumber'),
              JsdocTypeObject: b(
                (p, w) =>
                  `{${p.elements.map(w).join((p.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,
                'JsdocTypeObject'
              ),
              JsdocTypeOptional: b(
                (p, w) => at(p.meta.position, w(p.element), '='),
                'JsdocTypeOptional'
              ),
              JsdocTypeSymbol: b(
                (p, w) =>
                  `${p.value}(${p.element !== void 0 ? w(p.element) : ''})`,
                'JsdocTypeSymbol'
              ),
              JsdocTypeTypeof: b(
                (p, w) => `typeof ${w(p.element)}`,
                'JsdocTypeTypeof'
              ),
              JsdocTypeUndefined: b(() => 'undefined', 'JsdocTypeUndefined'),
              JsdocTypeUnion: b(
                (p, w) => p.elements.map(w).join(' | '),
                'JsdocTypeUnion'
              ),
              JsdocTypeUnknown: b(() => '?', 'JsdocTypeUnknown'),
              JsdocTypeIntersection: b(
                (p, w) => p.elements.map(w).join(' & '),
                'JsdocTypeIntersection'
              ),
              JsdocTypeProperty: b(
                (p) => Ce(p.value, p.meta.quote),
                'JsdocTypeProperty'
              ),
              JsdocTypePredicate: b(
                (p, w) => `${w(p.left)} is ${w(p.right)}`,
                'JsdocTypePredicate'
              ),
              JsdocTypeIndexSignature: b(
                (p, w) => `[${p.key}: ${w(p.right)}]`,
                'JsdocTypeIndexSignature'
              ),
              JsdocTypeMappedType: b(
                (p, w) => `[${p.key} in ${w(p.right)}]`,
                'JsdocTypeMappedType'
              ),
            };
          }
          b(Sr, 'stringifyRules');
          let oo = Sr();
          function cn(p) {
            return ke(oo, p);
          }
          b(cn, 'stringify');
          let er = [
            'null',
            'true',
            'false',
            'break',
            'case',
            'catch',
            'class',
            'const',
            'continue',
            'debugger',
            'default',
            'delete',
            'do',
            'else',
            'export',
            'extends',
            'finally',
            'for',
            'function',
            'if',
            'import',
            'in',
            'instanceof',
            'new',
            'return',
            'super',
            'switch',
            'this',
            'throw',
            'try',
            'typeof',
            'var',
            'void',
            'while',
            'with',
            'yield',
          ];
          function nt(p) {
            let w = { type: 'NameExpression', name: p };
            return er.includes(p) && (w.reservedWord = !0), w;
          }
          b(nt, 'makeName');
          let Ar = {
            JsdocTypeOptional: b((p, w) => {
              let k = w(p.element);
              return (k.optional = !0), k;
            }, 'JsdocTypeOptional'),
            JsdocTypeNullable: b((p, w) => {
              let k = w(p.element);
              return (k.nullable = !0), k;
            }, 'JsdocTypeNullable'),
            JsdocTypeNotNullable: b((p, w) => {
              let k = w(p.element);
              return (k.nullable = !1), k;
            }, 'JsdocTypeNotNullable'),
            JsdocTypeVariadic: b((p, w) => {
              if (p.element === void 0)
                throw new Error(
                  'dots without value are not allowed in catharsis mode'
                );
              let k = w(p.element);
              return (k.repeatable = !0), k;
            }, 'JsdocTypeVariadic'),
            JsdocTypeAny: b(() => ({ type: 'AllLiteral' }), 'JsdocTypeAny'),
            JsdocTypeNull: b(() => ({ type: 'NullLiteral' }), 'JsdocTypeNull'),
            JsdocTypeStringValue: b(
              (p) => nt(Ce(p.value, p.meta.quote)),
              'JsdocTypeStringValue'
            ),
            JsdocTypeUndefined: b(
              () => ({ type: 'UndefinedLiteral' }),
              'JsdocTypeUndefined'
            ),
            JsdocTypeUnknown: b(
              () => ({ type: 'UnknownLiteral' }),
              'JsdocTypeUnknown'
            ),
            JsdocTypeFunction: b((p, w) => {
              let k = Zt(p),
                z = { type: 'FunctionType', params: k.params.map(w) };
              return (
                k.this !== void 0 && (z.this = w(k.this)),
                k.new !== void 0 && (z.new = w(k.new)),
                p.returnType !== void 0 && (z.result = w(p.returnType)),
                z
              );
            }, 'JsdocTypeFunction'),
            JsdocTypeGeneric: b(
              (p, w) => ({
                type: 'TypeApplication',
                applications: p.elements.map((k) => w(k)),
                expression: w(p.left),
              }),
              'JsdocTypeGeneric'
            ),
            JsdocTypeSpecialNamePath: b(
              (p) => nt(p.specialType + ':' + Ce(p.value, p.meta.quote)),
              'JsdocTypeSpecialNamePath'
            ),
            JsdocTypeName: b(
              (p) =>
                p.value !== 'function'
                  ? nt(p.value)
                  : { type: 'FunctionType', params: [] },
              'JsdocTypeName'
            ),
            JsdocTypeNumber: b(
              (p) => nt(p.value.toString()),
              'JsdocTypeNumber'
            ),
            JsdocTypeObject: b((p, w) => {
              let k = { type: 'RecordType', fields: [] };
              for (let z of p.elements)
                z.type !== 'JsdocTypeObjectField' &&
                z.type !== 'JsdocTypeJsdocObjectField'
                  ? k.fields.push({
                      type: 'FieldType',
                      key: w(z),
                      value: void 0,
                    })
                  : k.fields.push(w(z));
              return k;
            }, 'JsdocTypeObject'),
            JsdocTypeObjectField: b((p, w) => {
              if (typeof p.key != 'string')
                throw new Error(
                  'Index signatures and mapped types are not supported'
                );
              return {
                type: 'FieldType',
                key: nt(Ce(p.key, p.meta.quote)),
                value: p.right === void 0 ? void 0 : w(p.right),
              };
            }, 'JsdocTypeObjectField'),
            JsdocTypeJsdocObjectField: b(
              (p, w) => ({
                type: 'FieldType',
                key: w(p.left),
                value: w(p.right),
              }),
              'JsdocTypeJsdocObjectField'
            ),
            JsdocTypeUnion: b(
              (p, w) => ({
                type: 'TypeUnion',
                elements: p.elements.map((k) => w(k)),
              }),
              'JsdocTypeUnion'
            ),
            JsdocTypeKeyValue: b(
              (p, w) => ({
                type: 'FieldType',
                key: nt(p.key),
                value: p.right === void 0 ? void 0 : w(p.right),
              }),
              'JsdocTypeKeyValue'
            ),
            JsdocTypeNamePath: b((p, w) => {
              let k = w(p.left),
                z;
              p.right.type === 'JsdocTypeSpecialNamePath'
                ? (z = w(p.right).name)
                : (z = Ce(p.right.value, p.right.meta.quote));
              let ee =
                p.pathType === 'inner'
                  ? '~'
                  : p.pathType === 'instance'
                    ? '#'
                    : '.';
              return nt(`${k.name}${ee}${z}`);
            }, 'JsdocTypeNamePath'),
            JsdocTypeSymbol: b((p) => {
              let w = '',
                k = p.element,
                z = !1;
              return (
                k?.type === 'JsdocTypeVariadic' &&
                  (k.meta.position === 'prefix' ? (w = '...') : (z = !0),
                  (k = k.element)),
                k?.type === 'JsdocTypeName'
                  ? (w += k.value)
                  : k?.type === 'JsdocTypeNumber' && (w += k.value.toString()),
                z && (w += '...'),
                nt(`${p.value}(${w})`)
              );
            }, 'JsdocTypeSymbol'),
            JsdocTypeParenthesis: b(
              (p, w) => w(G(p.element)),
              'JsdocTypeParenthesis'
            ),
            JsdocTypeMappedType: xe,
            JsdocTypeIndexSignature: xe,
            JsdocTypeImport: xe,
            JsdocTypeKeyof: xe,
            JsdocTypeTuple: xe,
            JsdocTypeTypeof: xe,
            JsdocTypeIntersection: xe,
            JsdocTypeProperty: xe,
            JsdocTypePredicate: xe,
          };
          function Tr(p) {
            return ke(Ar, p);
          }
          b(Tr, 'catharsisTransform');
          function it(p) {
            switch (p) {
              case void 0:
                return 'none';
              case 'single':
                return 'single';
              case 'double':
                return 'double';
            }
          }
          b(it, 'getQuoteStyle');
          function pn(p) {
            switch (p) {
              case 'inner':
                return 'INNER_MEMBER';
              case 'instance':
                return 'INSTANCE_MEMBER';
              case 'property':
                return 'MEMBER';
              case 'property-brackets':
                return 'MEMBER';
            }
          }
          b(pn, 'getMemberType');
          function tr(p, w) {
            return w.length === 2
              ? { type: p, left: w[0], right: w[1] }
              : { type: p, left: w[0], right: tr(p, w.slice(1)) };
          }
          b(tr, 'nestResults');
          let dn = {
            JsdocTypeOptional: b(
              (p, w) => ({
                type: 'OPTIONAL',
                value: w(p.element),
                meta: {
                  syntax:
                    p.meta.position === 'prefix'
                      ? 'PREFIX_EQUAL_SIGN'
                      : 'SUFFIX_EQUALS_SIGN',
                },
              }),
              'JsdocTypeOptional'
            ),
            JsdocTypeNullable: b(
              (p, w) => ({
                type: 'NULLABLE',
                value: w(p.element),
                meta: {
                  syntax:
                    p.meta.position === 'prefix'
                      ? 'PREFIX_QUESTION_MARK'
                      : 'SUFFIX_QUESTION_MARK',
                },
              }),
              'JsdocTypeNullable'
            ),
            JsdocTypeNotNullable: b(
              (p, w) => ({
                type: 'NOT_NULLABLE',
                value: w(p.element),
                meta: {
                  syntax:
                    p.meta.position === 'prefix'
                      ? 'PREFIX_BANG'
                      : 'SUFFIX_BANG',
                },
              }),
              'JsdocTypeNotNullable'
            ),
            JsdocTypeVariadic: b((p, w) => {
              let k = {
                type: 'VARIADIC',
                meta: {
                  syntax:
                    p.meta.position === 'prefix'
                      ? 'PREFIX_DOTS'
                      : p.meta.position === 'suffix'
                        ? 'SUFFIX_DOTS'
                        : 'ONLY_DOTS',
                },
              };
              return p.element !== void 0 && (k.value = w(p.element)), k;
            }, 'JsdocTypeVariadic'),
            JsdocTypeName: b(
              (p) => ({ type: 'NAME', name: p.value }),
              'JsdocTypeName'
            ),
            JsdocTypeTypeof: b(
              (p, w) => ({ type: 'TYPE_QUERY', name: w(p.element) }),
              'JsdocTypeTypeof'
            ),
            JsdocTypeTuple: b(
              (p, w) => ({ type: 'TUPLE', entries: p.elements.map(w) }),
              'JsdocTypeTuple'
            ),
            JsdocTypeKeyof: b(
              (p, w) => ({ type: 'KEY_QUERY', value: w(p.element) }),
              'JsdocTypeKeyof'
            ),
            JsdocTypeImport: b(
              (p) => ({
                type: 'IMPORT',
                path: {
                  type: 'STRING_VALUE',
                  quoteStyle: it(p.element.meta.quote),
                  string: p.element.value,
                },
              }),
              'JsdocTypeImport'
            ),
            JsdocTypeUndefined: b(
              () => ({ type: 'NAME', name: 'undefined' }),
              'JsdocTypeUndefined'
            ),
            JsdocTypeAny: b(() => ({ type: 'ANY' }), 'JsdocTypeAny'),
            JsdocTypeFunction: b((p, w) => {
              let k = Zt(p),
                z = {
                  type: p.arrow ? 'ARROW' : 'FUNCTION',
                  params: k.params.map((ee) => {
                    if (ee.type === 'JsdocTypeKeyValue') {
                      if (ee.right === void 0)
                        throw new Error(
                          "Function parameter without ':' is not expected to be 'KEY_VALUE'"
                        );
                      return {
                        type: 'NAMED_PARAMETER',
                        name: ee.key,
                        typeName: w(ee.right),
                      };
                    } else return w(ee);
                  }),
                  new: null,
                  returns: null,
                };
              return (
                k.this !== void 0
                  ? (z.this = w(k.this))
                  : p.arrow || (z.this = null),
                k.new !== void 0 && (z.new = w(k.new)),
                p.returnType !== void 0 && (z.returns = w(p.returnType)),
                z
              );
            }, 'JsdocTypeFunction'),
            JsdocTypeGeneric: b((p, w) => {
              let k = {
                type: 'GENERIC',
                subject: w(p.left),
                objects: p.elements.map(w),
                meta: {
                  syntax:
                    p.meta.brackets === 'square'
                      ? 'SQUARE_BRACKET'
                      : p.meta.dot
                        ? 'ANGLE_BRACKET_WITH_DOT'
                        : 'ANGLE_BRACKET',
                },
              };
              return (
                p.meta.brackets === 'square' &&
                  p.elements[0].type === 'JsdocTypeFunction' &&
                  !p.elements[0].parenthesis &&
                  (k.objects[0] = { type: 'NAME', name: 'function' }),
                k
              );
            }, 'JsdocTypeGeneric'),
            JsdocTypeObjectField: b((p, w) => {
              if (typeof p.key != 'string')
                throw new Error(
                  'Index signatures and mapped types are not supported'
                );
              if (p.right === void 0)
                return {
                  type: 'RECORD_ENTRY',
                  key: p.key,
                  quoteStyle: it(p.meta.quote),
                  value: null,
                  readonly: !1,
                };
              let k = w(p.right);
              return (
                p.optional &&
                  (k = {
                    type: 'OPTIONAL',
                    value: k,
                    meta: { syntax: 'SUFFIX_KEY_QUESTION_MARK' },
                  }),
                {
                  type: 'RECORD_ENTRY',
                  key: p.key.toString(),
                  quoteStyle: it(p.meta.quote),
                  value: k,
                  readonly: !1,
                }
              );
            }, 'JsdocTypeObjectField'),
            JsdocTypeJsdocObjectField: b(() => {
              throw new Error('Keys may not be typed in jsdoctypeparser.');
            }, 'JsdocTypeJsdocObjectField'),
            JsdocTypeKeyValue: b((p, w) => {
              if (p.right === void 0)
                return {
                  type: 'RECORD_ENTRY',
                  key: p.key,
                  quoteStyle: 'none',
                  value: null,
                  readonly: !1,
                };
              let k = w(p.right);
              return (
                p.optional &&
                  (k = {
                    type: 'OPTIONAL',
                    value: k,
                    meta: { syntax: 'SUFFIX_KEY_QUESTION_MARK' },
                  }),
                {
                  type: 'RECORD_ENTRY',
                  key: p.key,
                  quoteStyle: 'none',
                  value: k,
                  readonly: !1,
                }
              );
            }, 'JsdocTypeKeyValue'),
            JsdocTypeObject: b((p, w) => {
              let k = [];
              for (let z of p.elements)
                (z.type === 'JsdocTypeObjectField' ||
                  z.type === 'JsdocTypeJsdocObjectField') &&
                  k.push(w(z));
              return { type: 'RECORD', entries: k };
            }, 'JsdocTypeObject'),
            JsdocTypeSpecialNamePath: b((p) => {
              if (p.specialType !== 'module')
                throw new Error(
                  `jsdoctypeparser does not support type ${p.specialType} at this point.`
                );
              return {
                type: 'MODULE',
                value: {
                  type: 'FILE_PATH',
                  quoteStyle: it(p.meta.quote),
                  path: p.value,
                },
              };
            }, 'JsdocTypeSpecialNamePath'),
            JsdocTypeNamePath: b((p, w) => {
              let k = !1,
                z,
                ee;
              p.right.type === 'JsdocTypeSpecialNamePath' &&
              p.right.specialType === 'event'
                ? ((k = !0), (z = p.right.value), (ee = it(p.right.meta.quote)))
                : ((z = p.right.value), (ee = it(p.right.meta.quote)));
              let oe = {
                type: pn(p.pathType),
                owner: w(p.left),
                name: z,
                quoteStyle: ee,
                hasEventPrefix: k,
              };
              if (oe.owner.type === 'MODULE') {
                let ie = oe.owner;
                return (oe.owner = oe.owner.value), (ie.value = oe), ie;
              } else return oe;
            }, 'JsdocTypeNamePath'),
            JsdocTypeUnion: b(
              (p, w) => tr('UNION', p.elements.map(w)),
              'JsdocTypeUnion'
            ),
            JsdocTypeParenthesis: b(
              (p, w) => ({ type: 'PARENTHESIS', value: w(G(p.element)) }),
              'JsdocTypeParenthesis'
            ),
            JsdocTypeNull: b(
              () => ({ type: 'NAME', name: 'null' }),
              'JsdocTypeNull'
            ),
            JsdocTypeUnknown: b(
              () => ({ type: 'UNKNOWN' }),
              'JsdocTypeUnknown'
            ),
            JsdocTypeStringValue: b(
              (p) => ({
                type: 'STRING_VALUE',
                quoteStyle: it(p.meta.quote),
                string: p.value,
              }),
              'JsdocTypeStringValue'
            ),
            JsdocTypeIntersection: b(
              (p, w) => tr('INTERSECTION', p.elements.map(w)),
              'JsdocTypeIntersection'
            ),
            JsdocTypeNumber: b(
              (p) => ({ type: 'NUMBER_VALUE', number: p.value.toString() }),
              'JsdocTypeNumber'
            ),
            JsdocTypeSymbol: xe,
            JsdocTypeProperty: xe,
            JsdocTypePredicate: xe,
            JsdocTypeMappedType: xe,
            JsdocTypeIndexSignature: xe,
          };
          function fn(p) {
            return ke(dn, p);
          }
          b(fn, 'jtpTransform');
          function Cr() {
            return {
              JsdocTypeIntersection: b(
                (p, w) => ({
                  type: 'JsdocTypeIntersection',
                  elements: p.elements.map(w),
                }),
                'JsdocTypeIntersection'
              ),
              JsdocTypeGeneric: b(
                (p, w) => ({
                  type: 'JsdocTypeGeneric',
                  left: w(p.left),
                  elements: p.elements.map(w),
                  meta: { dot: p.meta.dot, brackets: p.meta.brackets },
                }),
                'JsdocTypeGeneric'
              ),
              JsdocTypeNullable: b((p) => p, 'JsdocTypeNullable'),
              JsdocTypeUnion: b(
                (p, w) => ({
                  type: 'JsdocTypeUnion',
                  elements: p.elements.map(w),
                }),
                'JsdocTypeUnion'
              ),
              JsdocTypeUnknown: b((p) => p, 'JsdocTypeUnknown'),
              JsdocTypeUndefined: b((p) => p, 'JsdocTypeUndefined'),
              JsdocTypeTypeof: b(
                (p, w) => ({ type: 'JsdocTypeTypeof', element: w(p.element) }),
                'JsdocTypeTypeof'
              ),
              JsdocTypeSymbol: b((p, w) => {
                let k = { type: 'JsdocTypeSymbol', value: p.value };
                return p.element !== void 0 && (k.element = w(p.element)), k;
              }, 'JsdocTypeSymbol'),
              JsdocTypeOptional: b(
                (p, w) => ({
                  type: 'JsdocTypeOptional',
                  element: w(p.element),
                  meta: { position: p.meta.position },
                }),
                'JsdocTypeOptional'
              ),
              JsdocTypeObject: b(
                (p, w) => ({
                  type: 'JsdocTypeObject',
                  meta: { separator: 'comma' },
                  elements: p.elements.map(w),
                }),
                'JsdocTypeObject'
              ),
              JsdocTypeNumber: b((p) => p, 'JsdocTypeNumber'),
              JsdocTypeNull: b((p) => p, 'JsdocTypeNull'),
              JsdocTypeNotNullable: b(
                (p, w) => ({
                  type: 'JsdocTypeNotNullable',
                  element: w(p.element),
                  meta: { position: p.meta.position },
                }),
                'JsdocTypeNotNullable'
              ),
              JsdocTypeSpecialNamePath: b((p) => p, 'JsdocTypeSpecialNamePath'),
              JsdocTypeObjectField: b(
                (p, w) => ({
                  type: 'JsdocTypeObjectField',
                  key: p.key,
                  right: p.right === void 0 ? void 0 : w(p.right),
                  optional: p.optional,
                  readonly: p.readonly,
                  meta: p.meta,
                }),
                'JsdocTypeObjectField'
              ),
              JsdocTypeJsdocObjectField: b(
                (p, w) => ({
                  type: 'JsdocTypeJsdocObjectField',
                  left: w(p.left),
                  right: w(p.right),
                }),
                'JsdocTypeJsdocObjectField'
              ),
              JsdocTypeKeyValue: b(
                (p, w) => ({
                  type: 'JsdocTypeKeyValue',
                  key: p.key,
                  right: p.right === void 0 ? void 0 : w(p.right),
                  optional: p.optional,
                  variadic: p.variadic,
                }),
                'JsdocTypeKeyValue'
              ),
              JsdocTypeImport: b(
                (p, w) => ({ type: 'JsdocTypeImport', element: w(p.element) }),
                'JsdocTypeImport'
              ),
              JsdocTypeAny: b((p) => p, 'JsdocTypeAny'),
              JsdocTypeStringValue: b((p) => p, 'JsdocTypeStringValue'),
              JsdocTypeNamePath: b((p) => p, 'JsdocTypeNamePath'),
              JsdocTypeVariadic: b((p, w) => {
                let k = {
                  type: 'JsdocTypeVariadic',
                  meta: {
                    position: p.meta.position,
                    squareBrackets: p.meta.squareBrackets,
                  },
                };
                return p.element !== void 0 && (k.element = w(p.element)), k;
              }, 'JsdocTypeVariadic'),
              JsdocTypeTuple: b(
                (p, w) => ({
                  type: 'JsdocTypeTuple',
                  elements: p.elements.map(w),
                }),
                'JsdocTypeTuple'
              ),
              JsdocTypeName: b((p) => p, 'JsdocTypeName'),
              JsdocTypeFunction: b((p, w) => {
                let k = {
                  type: 'JsdocTypeFunction',
                  arrow: p.arrow,
                  parameters: p.parameters.map(w),
                  constructor: p.constructor,
                  parenthesis: p.parenthesis,
                };
                return (
                  p.returnType !== void 0 && (k.returnType = w(p.returnType)), k
                );
              }, 'JsdocTypeFunction'),
              JsdocTypeKeyof: b(
                (p, w) => ({ type: 'JsdocTypeKeyof', element: w(p.element) }),
                'JsdocTypeKeyof'
              ),
              JsdocTypeParenthesis: b(
                (p, w) => ({
                  type: 'JsdocTypeParenthesis',
                  element: w(p.element),
                }),
                'JsdocTypeParenthesis'
              ),
              JsdocTypeProperty: b((p) => p, 'JsdocTypeProperty'),
              JsdocTypePredicate: b(
                (p, w) => ({
                  type: 'JsdocTypePredicate',
                  left: w(p.left),
                  right: w(p.right),
                }),
                'JsdocTypePredicate'
              ),
              JsdocTypeIndexSignature: b(
                (p, w) => ({
                  type: 'JsdocTypeIndexSignature',
                  key: p.key,
                  right: w(p.right),
                }),
                'JsdocTypeIndexSignature'
              ),
              JsdocTypeMappedType: b(
                (p, w) => ({
                  type: 'JsdocTypeMappedType',
                  key: p.key,
                  right: w(p.right),
                }),
                'JsdocTypeMappedType'
              ),
            };
          }
          b(Cr, 'identityTransformRules');
          let yn = {
            JsdocTypeAny: [],
            JsdocTypeFunction: ['parameters', 'returnType'],
            JsdocTypeGeneric: ['left', 'elements'],
            JsdocTypeImport: [],
            JsdocTypeIndexSignature: ['right'],
            JsdocTypeIntersection: ['elements'],
            JsdocTypeKeyof: ['element'],
            JsdocTypeKeyValue: ['right'],
            JsdocTypeMappedType: ['right'],
            JsdocTypeName: [],
            JsdocTypeNamePath: ['left', 'right'],
            JsdocTypeNotNullable: ['element'],
            JsdocTypeNull: [],
            JsdocTypeNullable: ['element'],
            JsdocTypeNumber: [],
            JsdocTypeObject: ['elements'],
            JsdocTypeObjectField: ['right'],
            JsdocTypeJsdocObjectField: ['left', 'right'],
            JsdocTypeOptional: ['element'],
            JsdocTypeParenthesis: ['element'],
            JsdocTypeSpecialNamePath: [],
            JsdocTypeStringValue: [],
            JsdocTypeSymbol: ['element'],
            JsdocTypeTuple: ['elements'],
            JsdocTypeTypeof: ['element'],
            JsdocTypeUndefined: [],
            JsdocTypeUnion: ['elements'],
            JsdocTypeUnknown: [],
            JsdocTypeVariadic: ['element'],
            JsdocTypeProperty: [],
            JsdocTypePredicate: ['left', 'right'],
          };
          function _r(p, w, k, z, ee) {
            z?.(p, w, k);
            let oe = yn[p.type];
            for (let ie of oe) {
              let Te = p[ie];
              if (Te !== void 0)
                if (Array.isArray(Te)) for (let _e of Te) _r(_e, p, ie, z, ee);
                else _r(Te, p, ie, z, ee);
            }
            ee?.(p, w, k);
          }
          b(_r, '_traverse');
          function Or(p, w, k) {
            _r(p, void 0, void 0, w, k);
          }
          b(Or, 'traverse'),
            (r.catharsisTransform = Tr),
            (r.identityTransformRules = Cr),
            (r.jtpTransform = fn),
            (r.parse = ot),
            (r.stringify = cn),
            (r.stringifyRules = Sr),
            (r.transform = ke),
            (r.traverse = Or),
            (r.tryParse = yt),
            (r.visitorKeys = yn);
        });
      }),
      kb = /^['"]|['"]$/g,
      nj = b((e) => e.replace(kb, ''), 'trimQuotes'),
      oj = b((e) => kb.test(e), 'includesQuotes'),
      Rb = b((e) => {
        let t = nj(e);
        return oj(e) || Number.isNaN(Number(t)) ? t : Number(t);
      }, 'parseLiteral'),
      aj = b((e) => {
        switch (e.type) {
          case 'function':
            return { name: 'function' };
          case 'object':
            let t = {};
            return (
              e.signature.properties.forEach((r) => {
                t[r.key] = zn(r.value);
              }),
              { name: 'object', value: t }
            );
          default:
            throw new Uo({ type: e, language: 'Typescript' });
        }
      }, 'convertSig'),
      zn = b((e) => {
        let { name: t, raw: r } = e,
          n = {};
        switch ((typeof r < 'u' && (n.raw = r), e.name)) {
          case 'string':
          case 'number':
          case 'symbol':
          case 'boolean':
            return { ...n, name: t };
          case 'Array':
            return { ...n, name: 'array', value: e.elements.map(zn) };
          case 'signature':
            return { ...n, ...aj(e) };
          case 'union':
            let o;
            return (
              e.elements?.every((a) => a.name === 'literal')
                ? (o = {
                    ...n,
                    name: 'enum',
                    value: e.elements?.map((a) => Rb(a.value)),
                  })
                : (o = { ...n, name: t, value: e.elements?.map(zn) }),
              o
            );
          case 'intersection':
            return { ...n, name: t, value: e.elements?.map(zn) };
          default:
            return { ...n, name: 'other', value: t };
        }
      }, 'convert'),
      ij = b((e) => e.name === 'literal', 'isLiteral'),
      sj = b((e) => e.value.replace(/['|"]/g, ''), 'toEnumOption'),
      lj = b((e) => {
        switch (e.type) {
          case 'function':
            return { name: 'function' };
          case 'object':
            let t = {};
            return (
              e.signature.properties.forEach((r) => {
                t[r.key] = Vn(r.value);
              }),
              { name: 'object', value: t }
            );
          default:
            throw new Uo({ type: e, language: 'Flow' });
        }
      }, 'convertSig'),
      Vn = b((e) => {
        let { name: t, raw: r } = e,
          n = {};
        switch ((typeof r < 'u' && (n.raw = r), e.name)) {
          case 'literal':
            return { ...n, name: 'other', value: e.value };
          case 'string':
          case 'number':
          case 'symbol':
          case 'boolean':
            return { ...n, name: t };
          case 'Array':
            return { ...n, name: 'array', value: e.elements.map(Vn) };
          case 'signature':
            return { ...n, ...lj(e) };
          case 'union':
            return e.elements?.every(ij)
              ? { ...n, name: 'enum', value: e.elements?.map(sj) }
              : { ...n, name: t, value: e.elements?.map(Vn) };
          case 'intersection':
            return { ...n, name: t, value: e.elements?.map(Vn) };
          default:
            return { ...n, name: 'other', value: t };
        }
      }, 'convert'),
      uj = db(tj(), 1),
      cj = /^\(.*\) => /,
      $n = b((e) => {
        let { name: t, raw: r, computed: n, value: o } = e,
          a = {};
        switch ((typeof r < 'u' && (a.raw = r), t)) {
          case 'enum': {
            let s = n ? o : o.map((l) => Rb(l.value));
            return { ...a, name: t, value: s };
          }
          case 'string':
          case 'number':
          case 'symbol':
            return { ...a, name: t };
          case 'func':
            return { ...a, name: 'function' };
          case 'bool':
          case 'boolean':
            return { ...a, name: 'boolean' };
          case 'arrayOf':
          case 'array':
            return { ...a, name: 'array', value: o && $n(o) };
          case 'object':
            return { ...a, name: t };
          case 'objectOf':
            return { ...a, name: t, value: $n(o) };
          case 'shape':
          case 'exact':
            let i = (0, uj.default)(o, (s) => $n(s));
            return { ...a, name: 'object', value: i };
          case 'union':
            return { ...a, name: 'union', value: o.map((s) => $n(s)) };
          case 'instanceOf':
          case 'element':
          case 'elementType':
          default: {
            if (t?.indexOf('|') > 0)
              try {
                let u = t.split('|').map((c) => JSON.parse(c));
                return { ...a, name: 'enum', value: u };
              } catch {}
            let s = o ? `${t}(${o})` : t,
              l = cj.test(t) ? 'function' : 'other';
            return { ...a, name: l, value: s };
          }
        }
      }, 'convert'),
      Ws = b((e) => {
        let { type: t, tsType: r, flowType: n } = e;
        try {
          if (t != null) return $n(t);
          if (r != null) return zn(r);
          if (n != null) return Vn(n);
        } catch (o) {
          console.error(o);
        }
        return null;
      }, 'convert'),
      pj = ((e) => (
        (e.JAVASCRIPT = 'JavaScript'),
        (e.FLOW = 'Flow'),
        (e.TYPESCRIPT = 'TypeScript'),
        (e.UNKNOWN = 'Unknown'),
        e
      ))(pj || {}),
      dj = ['null', 'undefined'];
    function fa(e) {
      return dj.some((t) => t === e);
    }
    b(fa, 'isDefaultValueBlacklisted');
    var fj = b((e) => {
      if (!e) return '';
      if (typeof e == 'string') return e;
      throw new Error(
        `Description: expected string, got: ${JSON.stringify(e)}`
      );
    }, 'str');
    function Ks(e) {
      return !!e.__docgenInfo;
    }
    b(Ks, 'hasDocgen');
    function Db(e) {
      return e != null && Object.keys(e).length > 0;
    }
    b(Db, 'isValidDocgenSection');
    function Fb(e, t) {
      return Ks(e) ? e.__docgenInfo[t] : null;
    }
    b(Fb, 'getDocgenSection');
    function jb(e) {
      return Ks(e) ? fj(e.__docgenInfo.description) : '';
    }
    b(jb, 'getDocgenDescription');
    var $t;
    (function (e) {
      (e.start = '/**'), (e.nostart = '/***'), (e.delim = '*'), (e.end = '*/');
    })(($t = $t || ($t = {})));
    function Nb(e) {
      return /^\s+$/.test(e);
    }
    b(Nb, 'isSpace');
    function Bb(e) {
      let t = e.match(/\r+$/);
      return t == null
        ? ['', e]
        : [e.slice(-t[0].length), e.slice(0, -t[0].length)];
    }
    b(Bb, 'splitCR');
    function fr(e) {
      let t = e.match(/^\s+/);
      return t == null
        ? ['', e]
        : [e.slice(0, t[0].length), e.slice(t[0].length)];
    }
    b(fr, 'splitSpace');
    function Lb(e) {
      return e.split(/\n/);
    }
    b(Lb, 'splitLines');
    function qb(e = {}) {
      return Object.assign(
        {
          tag: '',
          name: '',
          type: '',
          optional: !1,
          description: '',
          problems: [],
          source: [],
        },
        e
      );
    }
    b(qb, 'seedSpec');
    function Mb(e = {}) {
      return Object.assign(
        {
          start: '',
          delimiter: '',
          postDelimiter: '',
          tag: '',
          postTag: '',
          name: '',
          postName: '',
          type: '',
          postType: '',
          description: '',
          end: '',
          lineEnd: '',
        },
        e
      );
    }
    b(Mb, 'seedTokens');
    var yj = /^@\S+/;
    function Ub({ fence: e = '```' } = {}) {
      let t = Jb(e),
        r = b((n, o) => (t(n) ? !o : o), 'toggleFence');
      return b(function (n) {
        let o = [[]],
          a = !1;
        for (let i of n)
          yj.test(i.tokens.description) && !a
            ? o.push([i])
            : o[o.length - 1].push(i),
            (a = r(i.tokens.description, a));
        return o;
      }, 'parseBlock');
    }
    b(Ub, 'getParser');
    function Jb(e) {
      return typeof e == 'string' ? (t) => t.split(e).length % 2 === 0 : e;
    }
    b(Jb, 'getFencer');
    function $b({ startLine: e = 0, markers: t = $t } = {}) {
      let r = null,
        n = e;
      return b(function (o) {
        let a = o,
          i = Mb();
        if (
          (([i.lineEnd, a] = Bb(a)),
          ([i.start, a] = fr(a)),
          r === null &&
            a.startsWith(t.start) &&
            !a.startsWith(t.nostart) &&
            ((r = []),
            (i.delimiter = a.slice(0, t.start.length)),
            (a = a.slice(t.start.length)),
            ([i.postDelimiter, a] = fr(a))),
          r === null)
        )
          return n++, null;
        let s = a.trimRight().endsWith(t.end);
        if (
          (i.delimiter === '' &&
            a.startsWith(t.delim) &&
            !a.startsWith(t.end) &&
            ((i.delimiter = t.delim),
            (a = a.slice(t.delim.length)),
            ([i.postDelimiter, a] = fr(a))),
          s)
        ) {
          let l = a.trimRight();
          (i.end = a.slice(l.length - t.end.length)),
            (a = l.slice(0, -t.end.length));
        }
        if (
          ((i.description = a),
          r.push({ number: n, source: o, tokens: i }),
          n++,
          s)
        ) {
          let l = r.slice();
          return (r = null), l;
        }
        return null;
      }, 'parseSource');
    }
    b($b, 'getParser');
    function zb({ tokenizers: e }) {
      return b(function (t) {
        var r;
        let n = qb({ source: t });
        for (let o of e)
          if (
            ((n = o(n)),
            !(
              (r = n.problems[n.problems.length - 1]) === null || r === void 0
            ) && r.critical)
          )
            break;
        return n;
      }, 'parseSpec');
    }
    b(zb, 'getParser');
    function Vb() {
      return (e) => {
        let { tokens: t } = e.source[0],
          r = t.description.match(/\s*(@(\S+))(\s*)/);
        return r === null
          ? (e.problems.push({
              code: 'spec:tag:prefix',
              message: 'tag should start with "@" symbol',
              line: e.source[0].number,
              critical: !0,
            }),
            e)
          : ((t.tag = r[1]),
            (t.postTag = r[3]),
            (t.description = t.description.slice(r[0].length)),
            (e.tag = r[2]),
            e);
      };
    }
    b(Vb, 'tagTokenizer');
    function Hb(e = 'compact') {
      let t = Gb(e);
      return (r) => {
        let n = 0,
          o = [];
        for (let [s, { tokens: l }] of r.source.entries()) {
          let u = '';
          if (s === 0 && l.description[0] !== '{') return r;
          for (let c of l.description)
            if ((c === '{' && n++, c === '}' && n--, (u += c), n === 0)) break;
          if ((o.push([l, u]), n === 0)) break;
        }
        if (n !== 0)
          return (
            r.problems.push({
              code: 'spec:type:unpaired-curlies',
              message: 'unpaired curlies',
              line: r.source[0].number,
              critical: !0,
            }),
            r
          );
        let a = [],
          i = o[0][0].postDelimiter.length;
        for (let [s, [l, u]] of o.entries())
          (l.type = u),
            s > 0 &&
              ((l.type = l.postDelimiter.slice(i) + u),
              (l.postDelimiter = l.postDelimiter.slice(0, i))),
            ([l.postType, l.description] = fr(l.description.slice(u.length))),
            a.push(l.type);
        return (
          (a[0] = a[0].slice(1)),
          (a[a.length - 1] = a[a.length - 1].slice(0, -1)),
          (r.type = t(a)),
          r
        );
      };
    }
    b(Hb, 'typeTokenizer');
    var hj = b((e) => e.trim(), 'trim');
    function Gb(e) {
      return e === 'compact'
        ? (t) => t.map(hj).join('')
        : e === 'preserve'
          ? (t) =>
              t.join(`
`)
          : e;
    }
    b(Gb, 'getJoiner');
    var mj = b((e) => e && e.startsWith('"') && e.endsWith('"'), 'isQuoted');
    function Wb() {
      let e = b((t, { tokens: r }, n) => (r.type === '' ? t : n), 'typeEnd');
      return (t) => {
        let { tokens: r } = t.source[t.source.reduce(e, 0)],
          n = r.description.trimLeft(),
          o = n.split('"');
        if (o.length > 1 && o[0] === '' && o.length % 2 === 1)
          return (
            (t.name = o[1]),
            (r.name = `"${o[1]}"`),
            ([r.postName, r.description] = fr(n.slice(r.name.length))),
            t
          );
        let a = 0,
          i = '',
          s = !1,
          l;
        for (let c of n) {
          if (a === 0 && Nb(c)) break;
          c === '[' && a++, c === ']' && a--, (i += c);
        }
        if (a !== 0)
          return (
            t.problems.push({
              code: 'spec:name:unpaired-brackets',
              message: 'unpaired brackets',
              line: t.source[0].number,
              critical: !0,
            }),
            t
          );
        let u = i;
        if (i[0] === '[' && i[i.length - 1] === ']') {
          (s = !0), (i = i.slice(1, -1));
          let c = i.split('=');
          if (
            ((i = c[0].trim()),
            c[1] !== void 0 && (l = c.slice(1).join('=').trim()),
            i === '')
          )
            return (
              t.problems.push({
                code: 'spec:name:empty-name',
                message: 'empty name',
                line: t.source[0].number,
                critical: !0,
              }),
              t
            );
          if (l === '')
            return (
              t.problems.push({
                code: 'spec:name:empty-default',
                message: 'empty default value',
                line: t.source[0].number,
                critical: !0,
              }),
              t
            );
          if (!mj(l) && /=(?!>)/.test(l))
            return (
              t.problems.push({
                code: 'spec:name:invalid-default',
                message: 'invalid default value syntax',
                line: t.source[0].number,
                critical: !0,
              }),
              t
            );
        }
        return (
          (t.optional = s),
          (t.name = i),
          (r.name = u),
          l !== void 0 && (t.default = l),
          ([r.postName, r.description] = fr(n.slice(r.name.length))),
          t
        );
      };
    }
    b(Wb, 'nameTokenizer');
    function Kb(e = 'compact', t = $t) {
      let r = Ys(e);
      return (n) => ((n.description = r(n.source, t)), n);
    }
    b(Kb, 'descriptionTokenizer');
    function Ys(e) {
      return e === 'compact' ? Yb : e === 'preserve' ? Xb : e;
    }
    b(Ys, 'getJoiner');
    function Yb(e, t = $t) {
      return e
        .map(({ tokens: { description: r } }) => r.trim())
        .filter((r) => r !== '')
        .join(' ');
    }
    b(Yb, 'compactJoiner');
    var gj = b((e, { tokens: t }, r) => (t.type === '' ? e : r), 'lineNo'),
      bj = b(
        ({ tokens: e }) =>
          (e.delimiter === '' ? e.start : e.postDelimiter.slice(1)) +
          e.description,
        'getDescription'
      );
    function Xb(e, t = $t) {
      if (e.length === 0) return '';
      e[0].tokens.description === '' &&
        e[0].tokens.delimiter === t.start &&
        (e = e.slice(1));
      let r = e[e.length - 1];
      return (
        r !== void 0 &&
          r.tokens.description === '' &&
          r.tokens.end.endsWith(t.end) &&
          (e = e.slice(0, -1)),
        (e = e.slice(e.reduce(gj, 0))),
        e.map(bj).join(`
`)
      );
    }
    b(Xb, 'preserveJoiner');
    function Qb({
      startLine: e = 0,
      fence: t = '```',
      spacing: r = 'compact',
      markers: n = $t,
      tokenizers: o = [Vb(), Hb(r), Wb(), Kb(r)],
    } = {}) {
      if (e < 0 || e % 1 > 0) throw new Error('Invalid startLine');
      let a = $b({ startLine: e, markers: n }),
        i = Ub({ fence: t }),
        s = zb({ tokenizers: o }),
        l = Ys(r);
      return function (u) {
        let c = [];
        for (let d of Lb(u)) {
          let y = a(d);
          if (y === null) continue;
          let f = i(y),
            h = f.slice(1).map(s);
          c.push({
            description: l(f[0], n),
            tags: h,
            source: y,
            problems: h.reduce((g, _) => g.concat(_.problems), []),
          });
        }
        return c;
      };
    }
    b(Qb, 'getParser');
    function Zb(e) {
      return (
        e.start +
        e.delimiter +
        e.postDelimiter +
        e.tag +
        e.postTag +
        e.type +
        e.postType +
        e.name +
        e.postName +
        e.description +
        e.end +
        e.lineEnd
      );
    }
    b(Zb, 'join');
    function e0() {
      return (e) =>
        e.source.map(({ tokens: t }) => Zb(t)).join(`
`);
    }
    b(e0, 'getStringifier');
    var vj = {
        line: 0,
        start: 0,
        delimiter: 0,
        postDelimiter: 0,
        tag: 0,
        postTag: 0,
        name: 0,
        postName: 0,
        type: 0,
        postType: 0,
        description: 0,
        end: 0,
        lineEnd: 0,
      },
      Cne = Object.keys(vj);
    function t0(e, t = {}) {
      return Qb(t)(e);
    }
    b(t0, 'parse');
    var _ne = e0(),
      Xs = db(rj(), 1);
    function r0(e) {
      return e != null && e.includes('@');
    }
    b(r0, 'containsJsDoc');
    function n0(e) {
      let t =
          `/**
` +
          (e ?? '')
            .split(
              `
`
            )
            .map((n) => ` * ${n}`).join(`
`) +
          `
*/`,
        r = t0(t, { spacing: 'preserve' });
      if (!r || r.length === 0) throw new Error('Cannot parse JSDoc tags.');
      return r[0];
    }
    b(n0, 'parse');
    var xj = {
        tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'],
      },
      Ej = b((e, t = xj) => {
        if (!r0(e)) return { includesJsDoc: !1, ignore: !1 };
        let r = n0(e),
          n = o0(r, t.tags);
        return n.ignore
          ? { includesJsDoc: !0, ignore: !0 }
          : {
              includesJsDoc: !0,
              ignore: !1,
              description: r.description.trim(),
              extractedTags: n,
            };
      }, 'parseJsDoc');
    function o0(e, t) {
      let r = { params: null, deprecated: null, returns: null, ignore: !1 };
      for (let n of e.tags)
        if (!(t !== void 0 && !t.includes(n.tag)))
          if (n.tag === 'ignore') {
            r.ignore = !0;
            break;
          } else
            switch (n.tag) {
              case 'param':
              case 'arg':
              case 'argument': {
                let o = i0(n);
                o != null &&
                  (r.params == null && (r.params = []), r.params.push(o));
                break;
              }
              case 'deprecated': {
                let o = s0(n);
                o != null && (r.deprecated = o);
                break;
              }
              case 'returns': {
                let o = l0(n);
                o != null && (r.returns = o);
                break;
              }
              default:
                break;
            }
      return r;
    }
    b(o0, 'extractJsDocTags');
    function a0(e) {
      return e.replace(/[\.-]$/, '');
    }
    b(a0, 'normaliseParamName');
    function i0(e) {
      if (!e.name || e.name === '-') return null;
      let t = el(e.type);
      return {
        name: e.name,
        type: t,
        description: Zs(e.description),
        getPrettyName: b(() => a0(e.name), 'getPrettyName'),
        getTypeName: b(() => (t ? tl(t) : null), 'getTypeName'),
      };
    }
    b(i0, 'extractParam');
    function s0(e) {
      return e.name ? Qs(e.name, e.description) : null;
    }
    b(s0, 'extractDeprecated');
    function Qs(e, t) {
      let r = e === '' ? t : `${e} ${t}`;
      return Zs(r);
    }
    b(Qs, 'joinNameAndDescription');
    function Zs(e) {
      let t = e.replace(/^- /g, '').trim();
      return t === '' ? null : t;
    }
    b(Zs, 'normaliseDescription');
    function l0(e) {
      let t = el(e.type);
      return t
        ? {
            type: t,
            description: Qs(e.name, e.description),
            getTypeName: b(() => tl(t), 'getTypeName'),
          }
        : null;
    }
    b(l0, 'extractReturns');
    var Vt = (0, Xs.stringifyRules)(),
      wj = Vt.JsdocTypeObject;
    Vt.JsdocTypeAny = () => 'any';
    Vt.JsdocTypeObject = (e, t) => `(${wj(e, t)})`;
    Vt.JsdocTypeOptional = (e, t) => t(e.element);
    Vt.JsdocTypeNullable = (e, t) => t(e.element);
    Vt.JsdocTypeNotNullable = (e, t) => t(e.element);
    Vt.JsdocTypeUnion = (e, t) => e.elements.map(t).join('|');
    function el(e) {
      try {
        return (0, Xs.parse)(e, 'typescript');
      } catch {
        return null;
      }
    }
    b(el, 'extractType');
    function tl(e) {
      return (0, Xs.transform)(Vt, e);
    }
    b(tl, 'extractTypeName');
    function rl(e) {
      return e.length > 90;
    }
    b(rl, 'isTooLongForTypeSummary');
    function u0(e) {
      return e.length > 50;
    }
    b(u0, 'isTooLongForDefaultValueSummary');
    function je(e, t) {
      return e === t ? { summary: e } : { summary: e, detail: t };
    }
    b(je, 'createSummaryValue');
    var One = b((e) => e.replace(/\\r\\n/g, '\\n'), 'normalizeNewlines');
    function nl({ name: e, value: t, elements: r, raw: n }) {
      return t ?? (r != null ? r.map(nl).join(' | ') : (n ?? e));
    }
    b(nl, 'generateUnionElement');
    function c0({ name: e, raw: t, elements: r }) {
      return r != null
        ? je(r.map(nl).join(' | '))
        : t != null
          ? je(t.replace(/^\|\s*/, ''))
          : je(e);
    }
    b(c0, 'generateUnion');
    function p0({ type: e, raw: t }) {
      return t != null ? je(t) : je(e);
    }
    b(p0, 'generateFuncSignature');
    function d0({ type: e, raw: t }) {
      return t != null ? (rl(t) ? je(e, t) : je(t)) : je(e);
    }
    b(d0, 'generateObjectSignature');
    function f0(e) {
      let { type: t } = e;
      return t === 'object' ? d0(e) : p0(e);
    }
    b(f0, 'generateSignature');
    function y0({ name: e, raw: t }) {
      return t != null ? (rl(t) ? je(e, t) : je(t)) : je(e);
    }
    b(y0, 'generateDefault');
    function h0(e) {
      if (e == null) return null;
      switch (e.name) {
        case 'union':
          return c0(e);
        case 'signature':
          return f0(e);
        default:
          return y0(e);
      }
    }
    b(h0, 'createType');
    function m0(e, t) {
      if (e != null) {
        let { value: r } = e;
        if (!fa(r)) return u0(r) ? je(t?.name, r) : je(r);
      }
      return null;
    }
    b(m0, 'createDefaultValue');
    var Sj = b((e, t) => {
      let { flowType: r, description: n, required: o, defaultValue: a } = t;
      return {
        name: e,
        type: h0(r),
        required: o,
        description: n,
        defaultValue: m0(a ?? null, r ?? null),
      };
    }, 'createFlowPropDef');
    function g0({ tsType: e, required: t }) {
      if (e == null) return null;
      let r = e.name;
      return (
        t || (r = r.replace(' | undefined', '')),
        je(['Array', 'Record', 'signature'].includes(e.name) ? e.raw : r)
      );
    }
    b(g0, 'createType');
    function b0({ defaultValue: e }) {
      if (e != null) {
        let { value: t } = e;
        if (!fa(t)) return je(t);
      }
      return null;
    }
    b(b0, 'createDefaultValue');
    var Aj = b((e, t) => {
      let { description: r, required: n } = t;
      return {
        name: e,
        type: g0(t),
        required: n,
        description: r,
        defaultValue: b0(t),
      };
    }, 'createTsPropDef');
    function v0(e) {
      return e != null ? je(e.name) : null;
    }
    b(v0, 'createType');
    function x0(e) {
      let { computed: t, func: r } = e;
      return typeof t > 'u' && typeof r > 'u';
    }
    b(x0, 'isReactDocgenTypescript');
    function E0(e) {
      return e
        ? e.name === 'string'
          ? !0
          : e.name === 'enum'
            ? Array.isArray(e.value) &&
              e.value.every(
                ({ value: t }) =>
                  typeof t == 'string' &&
                  t[0] === '"' &&
                  t[t.length - 1] === '"'
              )
            : !1
        : !1;
    }
    b(E0, 'isStringValued');
    function w0(e, t) {
      if (e != null) {
        let { value: r } = e;
        if (!fa(r)) return x0(e) && E0(t) ? je(JSON.stringify(r)) : je(r);
      }
      return null;
    }
    b(w0, 'createDefaultValue');
    function ol(e, t, r) {
      let { description: n, required: o, defaultValue: a } = r;
      return {
        name: e,
        type: v0(t),
        required: o,
        description: n,
        defaultValue: w0(a, t),
      };
    }
    b(ol, 'createBasicPropDef');
    function Wn(e, t) {
      if (t?.includesJsDoc) {
        let { description: r, extractedTags: n } = t;
        r != null && (e.description = t.description);
        let o = {
          ...n,
          params: n?.params?.map((a) => ({
            name: a.getPrettyName(),
            description: a.description,
          })),
        };
        Object.values(o).filter(Boolean).length > 0 && (e.jsDocTags = o);
      }
      return e;
    }
    b(Wn, 'applyJsDocResult');
    var Tj = b((e, t, r) => {
        let n = ol(e, t.type, t);
        return (n.sbType = Ws(t)), Wn(n, r);
      }, 'javaScriptFactory'),
      Cj = b((e, t, r) => {
        let n = Aj(e, t);
        return (n.sbType = Ws(t)), Wn(n, r);
      }, 'tsFactory'),
      _j = b((e, t, r) => {
        let n = Sj(e, t);
        return (n.sbType = Ws(t)), Wn(n, r);
      }, 'flowFactory'),
      Oj = b((e, t, r) => {
        let n = ol(e, { name: 'unknown' }, t);
        return Wn(n, r);
      }, 'unknownFactory'),
      S0 = b((e) => {
        switch (e) {
          case 'JavaScript':
            return Tj;
          case 'TypeScript':
            return Cj;
          case 'Flow':
            return _j;
          default:
            return Oj;
        }
      }, 'getPropDefFactory'),
      A0 = b(
        (e) =>
          e.type != null
            ? 'JavaScript'
            : e.flowType != null
              ? 'Flow'
              : e.tsType != null
                ? 'TypeScript'
                : 'Unknown',
        'getTypeSystem'
      ),
      Ij = b((e) => {
        let t = A0(e[0]),
          r = S0(t);
        return e.map((n) => {
          let o = n;
          return (
            n.type?.elements &&
              (o = { ...n, type: { ...n.type, value: n.type.elements } }),
            al(o.name, o, t, r)
          );
        });
      }, 'extractComponentSectionArray'),
      Pj = b((e) => {
        let t = Object.keys(e),
          r = A0(e[t[0]]),
          n = S0(r);
        return t
          .map((o) => {
            let a = e[o];
            return a != null ? al(o, a, r, n) : null;
          })
          .filter(Boolean);
      }, 'extractComponentSectionObject'),
      Ine = b((e, t) => {
        let r = Fb(e, t);
        return Db(r) ? (Array.isArray(r) ? Ij(r) : Pj(r)) : [];
      }, 'extractComponentProps');
    function al(e, t, r, n) {
      let o = Ej(t.description);
      return o.includesJsDoc && o.ignore
        ? null
        : {
            propDef: n(e, t, o),
            jsDocTags: o.extractedTags,
            docgenInfo: t,
            typeSystem: r,
          };
    }
    b(al, 'extractProp');
    function kj(e) {
      return e != null ? jb(e) : '';
    }
    b(kj, 'extractComponentDescription');
    var kne = b((e) => {
        let {
            component: t,
            argTypes: r,
            parameters: { docs: n = {} },
          } = e,
          { extractArgTypes: o } = n,
          a = o && t ? o(t) : {};
        return a ? Ot(a, r) : r;
      }, 'enhanceArgTypes'),
      T0 = 'storybook/docs',
      Rne = `${T0}/panel`;
    var Dne = `${T0}/snippet-rendered`,
      Rj = ((e) => (
        (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
      ))(Rj || {}),
      Dj = /(addons\/|addon-|addon-essentials\/)(docs|controls)/,
      Fne = b(
        (e) => e.presetsList?.some((t) => Dj.test(t.name)),
        'hasDocsOrControls'
      );
    S();
    A();
    T();
    S();
    A();
    T();
    var Wne = __STORYBOOK_CHANNELS__,
      {
        Channel: Kne,
        PostMessageTransport: Yne,
        WebsocketTransport: Xne,
        createBrowserChannel: Qne,
      } = __STORYBOOK_CHANNELS__;
    var qv = rr({
        '../../node_modules/memoizerific/memoizerific.js'(e, t) {
          (function (r) {
            if (typeof e == 'object' && typeof t < 'u') t.exports = r();
            else if (typeof define == 'function' && define.amd) define([], r);
            else {
              var n;
              typeof window < 'u' || typeof window < 'u'
                ? (n = window)
                : typeof self < 'u'
                  ? (n = self)
                  : (n = this),
                (n.memoizerific = r());
            }
          })(function () {
            return (function r(n, o, a) {
              function i(u, c) {
                if (!o[u]) {
                  if (!n[u]) {
                    var d = typeof mn == 'function' && mn;
                    if (!c && d) return d(u, !0);
                    if (s) return s(u, !0);
                    var y = new Error("Cannot find module '" + u + "'");
                    throw ((y.code = 'MODULE_NOT_FOUND'), y);
                  }
                  var f = (o[u] = { exports: {} });
                  n[u][0].call(
                    f.exports,
                    function (h) {
                      var g = n[u][1][h];
                      return i(g || h);
                    },
                    f,
                    f.exports,
                    r,
                    n,
                    o,
                    a
                  );
                }
                return o[u].exports;
              }
              for (
                var s = typeof mn == 'function' && mn, l = 0;
                l < a.length;
                l++
              )
                i(a[l]);
              return i;
            })(
              {
                1: [
                  function (r, n, o) {
                    n.exports = function (a) {
                      if (typeof Map != 'function' || a) {
                        var i = r('./similar');
                        return new i();
                      } else return new Map();
                    };
                  },
                  { './similar': 2 },
                ],
                2: [
                  function (r, n, o) {
                    function a() {
                      return (
                        (this.list = []),
                        (this.lastItem = void 0),
                        (this.size = 0),
                        this
                      );
                    }
                    (a.prototype.get = function (i) {
                      var s;
                      if (this.lastItem && this.isEqual(this.lastItem.key, i))
                        return this.lastItem.val;
                      if (((s = this.indexOf(i)), s >= 0))
                        return (this.lastItem = this.list[s]), this.list[s].val;
                    }),
                      (a.prototype.set = function (i, s) {
                        var l;
                        return this.lastItem &&
                          this.isEqual(this.lastItem.key, i)
                          ? ((this.lastItem.val = s), this)
                          : ((l = this.indexOf(i)),
                            l >= 0
                              ? ((this.lastItem = this.list[l]),
                                (this.list[l].val = s),
                                this)
                              : ((this.lastItem = { key: i, val: s }),
                                this.list.push(this.lastItem),
                                this.size++,
                                this));
                      }),
                      (a.prototype.delete = function (i) {
                        var s;
                        if (
                          (this.lastItem &&
                            this.isEqual(this.lastItem.key, i) &&
                            (this.lastItem = void 0),
                          (s = this.indexOf(i)),
                          s >= 0)
                        )
                          return this.size--, this.list.splice(s, 1)[0];
                      }),
                      (a.prototype.has = function (i) {
                        var s;
                        return this.lastItem &&
                          this.isEqual(this.lastItem.key, i)
                          ? !0
                          : ((s = this.indexOf(i)),
                            s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                      }),
                      (a.prototype.forEach = function (i, s) {
                        var l;
                        for (l = 0; l < this.size; l++)
                          i.call(
                            s || this,
                            this.list[l].val,
                            this.list[l].key,
                            this
                          );
                      }),
                      (a.prototype.indexOf = function (i) {
                        var s;
                        for (s = 0; s < this.size; s++)
                          if (this.isEqual(this.list[s].key, i)) return s;
                        return -1;
                      }),
                      (a.prototype.isEqual = function (i, s) {
                        return i === s || (i !== i && s !== s);
                      }),
                      (n.exports = a);
                  },
                  {},
                ],
                3: [
                  function (r, n, o) {
                    var a = r('map-or-similar');
                    n.exports = function (u) {
                      var c = new a(!1),
                        d = [];
                      return function (y) {
                        var f = function () {
                          var h = c,
                            g,
                            _,
                            x = arguments.length - 1,
                            v = Array(x + 1),
                            O = !0,
                            C;
                          if (
                            (f.numArgs || f.numArgs === 0) &&
                            f.numArgs !== x + 1
                          )
                            throw new Error(
                              'Memoizerific functions should always be called with the same number of arguments'
                            );
                          for (C = 0; C < x; C++) {
                            if (
                              ((v[C] = { cacheItem: h, arg: arguments[C] }),
                              h.has(arguments[C]))
                            ) {
                              h = h.get(arguments[C]);
                              continue;
                            }
                            (O = !1),
                              (g = new a(!1)),
                              h.set(arguments[C], g),
                              (h = g);
                          }
                          return (
                            O &&
                              (h.has(arguments[x])
                                ? (_ = h.get(arguments[x]))
                                : (O = !1)),
                            O ||
                              ((_ = y.apply(null, arguments)),
                              h.set(arguments[x], _)),
                            u > 0 &&
                              ((v[x] = { cacheItem: h, arg: arguments[x] }),
                              O ? i(d, v) : d.push(v),
                              d.length > u && s(d.shift())),
                            (f.wasMemoized = O),
                            (f.numArgs = x + 1),
                            _
                          );
                        };
                        return (
                          (f.limit = u),
                          (f.wasMemoized = !1),
                          (f.cache = c),
                          (f.lru = d),
                          f
                        );
                      };
                    };
                    function i(u, c) {
                      var d = u.length,
                        y = c.length,
                        f,
                        h,
                        g;
                      for (h = 0; h < d; h++) {
                        for (f = !0, g = 0; g < y; g++)
                          if (!l(u[h][g].arg, c[g].arg)) {
                            f = !1;
                            break;
                          }
                        if (f) break;
                      }
                      u.push(u.splice(h, 1)[0]);
                    }
                    function s(u) {
                      var c = u.length,
                        d = u[c - 1],
                        y,
                        f;
                      for (
                        d.cacheItem.delete(d.arg), f = c - 2;
                        f >= 0 &&
                        ((d = u[f]),
                        (y = d.cacheItem.get(d.arg)),
                        !y || !y.size);
                        f--
                      )
                        d.cacheItem.delete(d.arg);
                    }
                    function l(u, c) {
                      return u === c || (u !== u && c !== c);
                    }
                  },
                  { 'map-or-similar': 1 },
                ],
              },
              {},
              [3]
            )(3);
          });
        },
      }),
      xt = (() => {
        let e;
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        );
      })();
    function en() {
      return (
        (en = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        en.apply(this, arguments)
      );
    }
    function qN(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Zn(e, t) {
      return (
        (Zn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return (r.__proto__ = n), r;
            }),
        Zn(e, t)
      );
    }
    function MN(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Zn(e, t);
    }
    function _l(e) {
      return (
        (_l = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        _l(e)
      );
    }
    function UN(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1;
      } catch {
        return typeof e == 'function';
      }
    }
    function Mv() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch {}
      return (Mv = function () {
        return !!e;
      })();
    }
    function JN(e, t, r) {
      if (Mv()) return Reflect.construct.apply(null, arguments);
      var n = [null];
      n.push.apply(n, t);
      var o = new (e.bind.apply(e, n))();
      return r && Zn(o, r.prototype), o;
    }
    function Ol(e) {
      var t = typeof Map == 'function' ? new Map() : void 0;
      return (
        (Ol = function (r) {
          if (r === null || !UN(r)) return r;
          if (typeof r != 'function')
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (typeof t < 'u') {
            if (t.has(r)) return t.get(r);
            t.set(r, n);
          }
          function n() {
            return JN(r, arguments, _l(this).constructor);
          }
          return (
            (n.prototype = Object.create(r.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Zn(n, r)
          );
        }),
        Ol(e)
      );
    }
    var $N = {
      1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
      2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
      3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
      4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
      5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
      6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
      7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
      8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
      9: `Please provide a number of steps to the modularScale helper.

`,
      10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
      11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
      12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
      13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
      14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
      15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
      16: `You must provide a template to this method.

`,
      17: `You passed an unsupported selector state to this method.

`,
      18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
      19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
      20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
      21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
      22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
      23: `fontFace expects a name of a font-family.

`,
      24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
      25: `fontFace expects localFonts to be an array.

`,
      26: `fontFace expects fileFormats to be an array.

`,
      27: `radialGradient requries at least 2 color-stops to properly render.

`,
      28: `Please supply a filename to retinaImage() as the first argument.

`,
      29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
      30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
      31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
      32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
      33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
      34: `borderRadius expects a radius value as a string or number as the second argument.

`,
      35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
      36: `Property must be a string value.

`,
      37: `Syntax Error at %s.

`,
      38: `Formula contains a function that needs parentheses at %s.

`,
      39: `Formula is missing closing parenthesis at %s.

`,
      40: `Formula has too many closing parentheses at %s.

`,
      41: `All values in a formula must have the same unit or be unitless.

`,
      42: `Please provide a number of steps to the modularScale helper.

`,
      43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
      44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
      45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
      46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
      47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
      48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
      49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
      50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
      51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
      52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
      53: `fontFace expects localFonts to be an array.

`,
      54: `fontFace expects fileFormats to be an array.

`,
      55: `fontFace expects a name of a font-family.

`,
      56: `linearGradient requries at least 2 color-stops to properly render.

`,
      57: `radialGradient requries at least 2 color-stops to properly render.

`,
      58: `Please supply a filename to retinaImage() as the first argument.

`,
      59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
      60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
      61: `Property must be a string value.

`,
      62: `borderRadius expects a radius value as a string or number as the second argument.

`,
      63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
      64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
      65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
      66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
      67: `You must provide a template to this method.

`,
      68: `You passed an unsupported selector state to this method.

`,
      69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
      70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
      71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
      72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
      73: `Please provide a valid CSS variable.

`,
      74: `CSS variable not found and no default was provided.

`,
      75: `important requires a valid style object, got a %s instead.

`,
      76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
      77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
      78: `base must be set in "px" or "%" but you set it in "%s".
`,
    };
    function zN() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      var n = t[0],
        o = [],
        a;
      for (a = 1; a < t.length; a += 1) o.push(t[a]);
      return (
        o.forEach(function (i) {
          n = n.replace(/%[a-z]/, i);
        }),
        n
      );
    }
    var Et = (function (e) {
      MN(t, e);
      function t(r) {
        for (
          var n, o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
          i < o;
          i++
        )
          a[i - 1] = arguments[i];
        return (
          (n = e.call(this, zN.apply(void 0, [$N[r]].concat(a))) || this), qN(n)
        );
      }
      return t;
    })(Ol(Error));
    function hl(e) {
      return Math.round(e * 255);
    }
    function VN(e, t, r) {
      return hl(e) + ',' + hl(t) + ',' + hl(r);
    }
    function eo(e, t, r, n) {
      if ((n === void 0 && (n = VN), t === 0)) return n(r, r, r);
      var o = (((e % 360) + 360) % 360) / 60,
        a = (1 - Math.abs(2 * r - 1)) * t,
        i = a * (1 - Math.abs((o % 2) - 1)),
        s = 0,
        l = 0,
        u = 0;
      o >= 0 && o < 1
        ? ((s = a), (l = i))
        : o >= 1 && o < 2
          ? ((s = i), (l = a))
          : o >= 2 && o < 3
            ? ((l = a), (u = i))
            : o >= 3 && o < 4
              ? ((l = i), (u = a))
              : o >= 4 && o < 5
                ? ((s = i), (u = a))
                : o >= 5 && o < 6 && ((s = a), (u = i));
      var c = r - a / 2,
        d = s + c,
        y = l + c,
        f = u + c;
      return n(d, y, f);
    }
    var iv = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    };
    function HN(e) {
      if (typeof e != 'string') return e;
      var t = e.toLowerCase();
      return iv[t] ? '#' + iv[t] : e;
    }
    var GN = /^#[a-fA-F0-9]{6}$/,
      WN = /^#[a-fA-F0-9]{8}$/,
      KN = /^#[a-fA-F0-9]{3}$/,
      YN = /^#[a-fA-F0-9]{4}$/,
      ml =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      XN =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      QN =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      ZN =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function Ta(e) {
      if (typeof e != 'string') throw new Et(3);
      var t = HN(e);
      if (t.match(GN))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
        };
      if (t.match(WN)) {
        var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
          alpha: r,
        };
      }
      if (t.match(KN))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
        };
      if (t.match(YN)) {
        var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
          alpha: n,
        };
      }
      var o = ml.exec(t);
      if (o)
        return {
          red: parseInt('' + o[1], 10),
          green: parseInt('' + o[2], 10),
          blue: parseInt('' + o[3], 10),
        };
      var a = XN.exec(t.substring(0, 50));
      if (a)
        return {
          red: parseInt('' + a[1], 10),
          green: parseInt('' + a[2], 10),
          blue: parseInt('' + a[3], 10),
          alpha:
            parseFloat('' + a[4]) > 1
              ? parseFloat('' + a[4]) / 100
              : parseFloat('' + a[4]),
        };
      var i = QN.exec(t);
      if (i) {
        var s = parseInt('' + i[1], 10),
          l = parseInt('' + i[2], 10) / 100,
          u = parseInt('' + i[3], 10) / 100,
          c = 'rgb(' + eo(s, l, u) + ')',
          d = ml.exec(c);
        if (!d) throw new Et(4, t, c);
        return {
          red: parseInt('' + d[1], 10),
          green: parseInt('' + d[2], 10),
          blue: parseInt('' + d[3], 10),
        };
      }
      var y = ZN.exec(t.substring(0, 50));
      if (y) {
        var f = parseInt('' + y[1], 10),
          h = parseInt('' + y[2], 10) / 100,
          g = parseInt('' + y[3], 10) / 100,
          _ = 'rgb(' + eo(f, h, g) + ')',
          x = ml.exec(_);
        if (!x) throw new Et(4, t, _);
        return {
          red: parseInt('' + x[1], 10),
          green: parseInt('' + x[2], 10),
          blue: parseInt('' + x[3], 10),
          alpha:
            parseFloat('' + y[4]) > 1
              ? parseFloat('' + y[4]) / 100
              : parseFloat('' + y[4]),
        };
      }
      throw new Et(5);
    }
    function e3(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        o = Math.max(t, r, n),
        a = Math.min(t, r, n),
        i = (o + a) / 2;
      if (o === a)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: i };
      var s,
        l = o - a,
        u = i > 0.5 ? l / (2 - o - a) : l / (o + a);
      switch (o) {
        case t:
          s = (r - n) / l + (r < n ? 6 : 0);
          break;
        case r:
          s = (n - t) / l + 2;
          break;
        default:
          s = (t - r) / l + 4;
          break;
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: u, lightness: i, alpha: e.alpha }
          : { hue: s, saturation: u, lightness: i }
      );
    }
    function Uv(e) {
      return e3(Ta(e));
    }
    var t3 = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? '#' + e[1] + e[3] + e[5]
          : e;
      },
      Il = t3;
    function mr(e) {
      var t = e.toString(16);
      return t.length === 1 ? '0' + t : t;
    }
    function gl(e) {
      return mr(Math.round(e * 255));
    }
    function r3(e, t, r) {
      return Il('#' + gl(e) + gl(t) + gl(r));
    }
    function Aa(e, t, r) {
      return eo(e, t, r, r3);
    }
    function n3(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return Aa(e, t, r);
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return Aa(e.hue, e.saturation, e.lightness);
      throw new Et(1);
    }
    function o3(e, t, r, n) {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1 ? Aa(e, t, r) : 'rgba(' + eo(e, t, r) + ',' + n + ')';
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Aa(e.hue, e.saturation, e.lightness)
          : 'rgba(' +
              eo(e.hue, e.saturation, e.lightness) +
              ',' +
              e.alpha +
              ')';
      throw new Et(2);
    }
    function Pl(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return Il('#' + mr(e) + mr(t) + mr(r));
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return Il('#' + mr(e.red) + mr(e.green) + mr(e.blue));
      throw new Et(6);
    }
    function Dt(e, t, r, n) {
      if (typeof e == 'string' && typeof t == 'number') {
        var o = Ta(e);
        return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')';
      } else {
        if (
          typeof e == 'number' &&
          typeof t == 'number' &&
          typeof r == 'number' &&
          typeof n == 'number'
        )
          return n >= 1
            ? Pl(e, t, r)
            : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
        if (
          typeof e == 'object' &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? Pl(e.red, e.green, e.blue)
            : 'rgba(' +
                e.red +
                ',' +
                e.green +
                ',' +
                e.blue +
                ',' +
                e.alpha +
                ')';
      }
      throw new Et(7);
    }
    var a3 = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        );
      },
      i3 = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          typeof e.alpha == 'number'
        );
      },
      s3 = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        );
      },
      l3 = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          typeof e.alpha == 'number'
        );
      };
    function Jv(e) {
      if (typeof e != 'object') throw new Et(8);
      if (i3(e)) return Dt(e);
      if (a3(e)) return Pl(e);
      if (l3(e)) return o3(e);
      if (s3(e)) return n3(e);
      throw new Et(8);
    }
    function $v(e, t, r) {
      return function () {
        var n = r.concat(Array.prototype.slice.call(arguments));
        return n.length >= t ? e.apply(this, n) : $v(e, t, n);
      };
    }
    function Ca(e) {
      return $v(e, e.length, []);
    }
    function _a(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    function u3(e, t) {
      if (t === 'transparent') return t;
      var r = Uv(t);
      return Jv(
        en({}, r, { lightness: _a(0, 1, r.lightness - parseFloat(e)) })
      );
    }
    var c3 = Ca(u3),
      vt = c3;
    function p3(e, t) {
      if (t === 'transparent') return t;
      var r = Uv(t);
      return Jv(
        en({}, r, { lightness: _a(0, 1, r.lightness + parseFloat(e)) })
      );
    }
    var d3 = Ca(p3),
      gr = d3;
    function f3(e, t) {
      if (t === 'transparent') return t;
      var r = Ta(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        o = en({}, r, {
          alpha: _a(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        });
      return Dt(o);
    }
    var y3 = Ca(f3),
      va = y3;
    function h3(e, t) {
      if (t === 'transparent') return t;
      var r = Ta(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        o = en({}, r, {
          alpha: _a(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        });
      return Dt(o);
    }
    var m3 = Ca(h3),
      ve = m3,
      g3 = Object.create,
      zv = Object.defineProperty,
      b3 = Object.getOwnPropertyDescriptor,
      v3 = Object.getOwnPropertyNames,
      x3 = Object.getPrototypeOf,
      E3 = Object.prototype.hasOwnProperty,
      w3 = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      S3 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of v3(t))
            !E3.call(e, o) &&
              o !== r &&
              zv(e, o, {
                get: () => t[o],
                enumerable: !(n = b3(t, o)) || n.enumerable,
              });
        return e;
      },
      A3 = (e, t, r) => (
        (r = e != null ? g3(x3(e)) : {}),
        S3(
          t || !e || !e.__esModule
            ? zv(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      T3 = w3((e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(
                      Object.getOwnPropertySymbols(o)
                    );
                  }
                : Object.keys;
            return function (o, a) {
              return (function i(s, l, u) {
                var c,
                  d,
                  y,
                  f = t.call(s),
                  h = t.call(l);
                if (s === l) return !0;
                if (s == null || l == null) return !1;
                if (u.indexOf(s) > -1 && u.indexOf(l) > -1) return !0;
                if (
                  (u.push(s, l),
                  f != h ||
                    ((c = n(s)),
                    (d = n(l)),
                    c.length != d.length ||
                      c.some(function (g) {
                        return !i(s[g], l[g], u);
                      })))
                )
                  return !1;
                switch (f.slice(8, -1)) {
                  case 'Symbol':
                    return s.valueOf() == l.valueOf();
                  case 'Date':
                  case 'Number':
                    return +s == +l || (+s != +s && +l != +l);
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return '' + s == '' + l;
                  case 'Set':
                  case 'Map':
                    (c = s.entries()), (d = l.entries());
                    do
                      if (!i((y = c.next()).value, d.next().value, u))
                        return !1;
                    while (!y.done);
                    return !0;
                  case 'ArrayBuffer':
                    (s = new Uint8Array(s)), (l = new Uint8Array(l));
                  case 'DataView':
                    (s = new Uint8Array(s.buffer)),
                      (l = new Uint8Array(l.buffer));
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (s.length != l.length) return !1;
                    for (y = 0; y < s.length; y++)
                      if (
                        (y in s || y in l) &&
                        (y in s != y in l || !i(s[y], l[y], u))
                      )
                        return !1;
                    return !0;
                  case 'Object':
                    return i(r(s), r(l), u);
                  default:
                    return !1;
                }
              })(o, a, []);
            };
          })());
      }),
      sv = A3(T3()),
      Vv = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
      C3 = (e, t) => {
        let { exists: r, eq: n, neq: o, truthy: a } = e;
        if (Vv([r, n, o, a]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`
          );
        if (typeof n < 'u') return (0, sv.isEqual)(t, n);
        if (typeof o < 'u') return !(0, sv.isEqual)(t, o);
        if (typeof r < 'u') {
          let i = typeof t < 'u';
          return r ? i : !i;
        }
        return typeof a > 'u' || a ? !!t : !t;
      },
      _3 = (e, t, r) => {
        if (!e.if) return !0;
        let { arg: n, global: o } = e.if;
        if (Vv([n, o]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`
          );
        let a = n ? t[n] : r[o];
        return C3(e.if, a);
      };
    function br() {
      return (
        (br = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        br.apply(this, arguments)
      );
    }
    var O3 = ['children', 'options'],
      lv,
      uv;
    (function (e) {
      (e.blockQuote = '0'),
        (e.breakLine = '1'),
        (e.breakThematic = '2'),
        (e.codeBlock = '3'),
        (e.codeFenced = '4'),
        (e.codeInline = '5'),
        (e.footnote = '6'),
        (e.footnoteReference = '7'),
        (e.gfmTask = '8'),
        (e.heading = '9'),
        (e.headingSetext = '10'),
        (e.htmlBlock = '11'),
        (e.htmlComment = '12'),
        (e.htmlSelfClosing = '13'),
        (e.image = '14'),
        (e.link = '15'),
        (e.linkAngleBraceStyleDetector = '16'),
        (e.linkBareUrlDetector = '17'),
        (e.linkMailtoDetector = '18'),
        (e.newlineCoalescer = '19'),
        (e.orderedList = '20'),
        (e.paragraph = '21'),
        (e.ref = '22'),
        (e.refImage = '23'),
        (e.refLink = '24'),
        (e.table = '25'),
        (e.tableSeparator = '26'),
        (e.text = '27'),
        (e.textBolded = '28'),
        (e.textEmphasized = '29'),
        (e.textEscaped = '30'),
        (e.textMarked = '31'),
        (e.textStrikethroughed = '32'),
        (e.unorderedList = '33');
    })(lv || (lv = {})),
      (function (e) {
        (e[(e.MAX = 0)] = 'MAX'),
          (e[(e.HIGH = 1)] = 'HIGH'),
          (e[(e.MED = 2)] = 'MED'),
          (e[(e.LOW = 3)] = 'LOW'),
          (e[(e.MIN = 4)] = 'MIN');
      })(uv || (uv = {}));
    var cv = [
        'allowFullScreen',
        'allowTransparency',
        'autoComplete',
        'autoFocus',
        'autoPlay',
        'cellPadding',
        'cellSpacing',
        'charSet',
        'className',
        'classId',
        'colSpan',
        'contentEditable',
        'contextMenu',
        'crossOrigin',
        'encType',
        'formAction',
        'formEncType',
        'formMethod',
        'formNoValidate',
        'formTarget',
        'frameBorder',
        'hrefLang',
        'inputMode',
        'keyParams',
        'keyType',
        'marginHeight',
        'marginWidth',
        'maxLength',
        'mediaGroup',
        'minLength',
        'noValidate',
        'radioGroup',
        'readOnly',
        'rowSpan',
        'spellCheck',
        'srcDoc',
        'srcLang',
        'srcSet',
        'tabIndex',
        'useMap',
      ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
      pv = {
        amp: '&',
        apos: "'",
        gt: '>',
        lt: '<',
        nbsp: '\xA0',
        quot: '\u201C',
      },
      I3 = ['style', 'script'],
      P3 =
        /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
      k3 = /mailto:/i,
      R3 = /\n{2,}$/,
      Hv = /^(\s*>[\s\S]*?)(?=\n{2,})/,
      D3 = /^ *> ?/gm,
      F3 = /^ {2,}\n/,
      j3 = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
      Gv = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
      Wv = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
      N3 = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
      B3 = /^(?:\n *)*\n/,
      L3 = /\r\n?/g,
      q3 = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
      M3 = /^\[\^([^\]]+)]/,
      U3 = /\f/g,
      J3 = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
      $3 = /^\s*?\[(x|\s)\]/,
      Kv = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      Yv = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      Xv = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
      kl =
        /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
      z3 = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
      Qv = /^<!--[\s\S]*?(?:-->)/,
      V3 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
      Rl =
        /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
      H3 = /^\{.*\}$/,
      G3 = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
      W3 = /^<([^ >]+@[^ >]+)>/,
      K3 = /^<([^ >]+:\/[^ >]+)>/,
      Y3 = /-([a-z])?/gi,
      Zv = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
      X3 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
      Q3 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
      Z3 = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
      eB = /(\[|\])/g,
      tB = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
      rB = /\t/g,
      nB = /^ *\| */,
      oB = /(^ *\||\| *$)/g,
      aB = / *$/,
      iB = /^ *:-+: *$/,
      sB = /^ *:-+ *$/,
      lB = /^ *-+: *$/,
      Oa =
        '((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)',
      uB = new RegExp(`^([*_])\\1${Oa}\\1\\1(?!\\1)`),
      cB = new RegExp(`^([*_])${Oa}\\1(?!\\1|\\w)`),
      pB = new RegExp(`^==${Oa}==`),
      dB = new RegExp(`^~~${Oa}~~`),
      fB = /^\\([^0-9A-Za-z\s])/,
      yB =
        /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
      hB = /^\n+/,
      mB = /^([ \t]*)/,
      gB = /\\([^\\])/g,
      dv = / *\n+$/,
      bB = /(?:^|\n)( *)$/,
      Nl = '(?:\\d+\\.)',
      Bl = '(?:[*+-])';
    function e2(e) {
      return '( *)(' + (e === 1 ? Nl : Bl) + ') +';
    }
    var t2 = e2(1),
      r2 = e2(2);
    function n2(e) {
      return new RegExp('^' + (e === 1 ? t2 : r2));
    }
    var vB = n2(1),
      xB = n2(2);
    function o2(e) {
      return new RegExp(
        '^' +
          (e === 1 ? t2 : r2) +
          '[^\\n]*(?:\\n(?!\\1' +
          (e === 1 ? Nl : Bl) +
          ' )[^\\n]*)*(\\n|$)',
        'gm'
      );
    }
    var a2 = o2(1),
      i2 = o2(2);
    function s2(e) {
      let t = e === 1 ? Nl : Bl;
      return new RegExp(
        '^( *)(' +
          t +
          ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
          t +
          ' (?!' +
          t +
          ' ))\\n*|\\s*\\n*$)'
      );
    }
    var l2 = s2(1),
      u2 = s2(2);
    function fv(e, t) {
      let r = t === 1,
        n = r ? l2 : u2,
        o = r ? a2 : i2,
        a = r ? vB : xB;
      return {
        match(i, s, l) {
          let u = bB.exec(l);
          return u && (s.list || (!s.inline && !s.simple))
            ? n.exec((i = u[1] + i))
            : null;
        },
        order: 1,
        parse(i, s, l) {
          let u = r ? +i[2] : void 0,
            c = i[0]
              .replace(
                R3,
                `
`
              )
              .match(o),
            d = !1;
          return {
            items: c.map(function (y, f) {
              let h = a.exec(y)[0].length,
                g = new RegExp('^ {1,' + h + '}', 'gm'),
                _ = y.replace(g, '').replace(a, ''),
                x = f === c.length - 1,
                v =
                  _.indexOf(`

`) !== -1 ||
                  (x && d);
              d = v;
              let O = l.inline,
                C = l.list,
                I;
              (l.list = !0),
                v
                  ? ((l.inline = !1),
                    (I = _.replace(
                      dv,
                      `

`
                    )))
                  : ((l.inline = !0), (I = _.replace(dv, '')));
              let P = s(I, l);
              return (l.inline = O), (l.list = C), P;
            }),
            ordered: r,
            start: u,
          };
        },
        render: (i, s, l) =>
          e(
            i.ordered ? 'ol' : 'ul',
            { key: l.key, start: i.type === '20' ? i.start : void 0 },
            i.items.map(function (u, c) {
              return e('li', { key: c }, s(u, l));
            })
          ),
      };
    }
    var EB = new RegExp(
        `^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`
      ),
      wB = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
      c2 = [Hv, Gv, Wv, Kv, Xv, Yv, Qv, Zv, a2, l2, i2, u2],
      SB = [...c2, /^[^\n]+(?:  \n|\n{2,})/, kl, Rl];
    function AB(e) {
      return e
        .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
        .replace(/[çÇ]/g, 'c')
        .replace(/[ðÐ]/g, 'd')
        .replace(/[ÈÉÊËéèêë]/g, 'e')
        .replace(/[ÏïÎîÍíÌì]/g, 'i')
        .replace(/[Ññ]/g, 'n')
        .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
        .replace(/[ÜüÛûÚúÙù]/g, 'u')
        .replace(/[ŸÿÝý]/g, 'y')
        .replace(/[^a-z0-9- ]/gi, '')
        .replace(/ /gi, '-')
        .toLowerCase();
    }
    function TB(e) {
      return lB.test(e)
        ? 'right'
        : iB.test(e)
          ? 'center'
          : sB.test(e)
            ? 'left'
            : null;
    }
    function yv(e, t, r) {
      let n = r.inTable;
      r.inTable = !0;
      let o = t(e.trim(), r);
      r.inTable = n;
      let a = [[]];
      return (
        o.forEach(function (i, s) {
          i.type === '26'
            ? s !== 0 && s !== o.length - 1 && a.push([])
            : (i.type !== '27' ||
                (o[s + 1] != null && o[s + 1].type !== '26') ||
                (i.text = i.text.replace(aB, '')),
              a[a.length - 1].push(i));
        }),
        a
      );
    }
    function CB(e, t, r) {
      r.inline = !0;
      let n = yv(e[1], t, r),
        o = e[2].replace(oB, '').split('|').map(TB),
        a = (function (i, s, l) {
          return i
            .trim()
            .split(
              `
`
            )
            .map(function (u) {
              return yv(u, s, l);
            });
        })(e[3], t, r);
      return (r.inline = !1), { align: o, cells: a, header: n, type: '25' };
    }
    function hv(e, t) {
      return e.align[t] == null ? {} : { textAlign: e.align[t] };
    }
    function Ht(e) {
      return function (t, r) {
        return r.inline ? e.exec(t) : null;
      };
    }
    function Gt(e) {
      return function (t, r) {
        return r.inline || r.simple ? e.exec(t) : null;
      };
    }
    function Rt(e) {
      return function (t, r) {
        return r.inline || r.simple ? null : e.exec(t);
      };
    }
    function Xn(e) {
      return function (t) {
        return e.exec(t);
      };
    }
    function _B(e, t, r) {
      if (
        t.inline ||
        t.simple ||
        (r &&
          !r.endsWith(`
`))
      )
        return null;
      let n = '';
      e.split(
        `
`
      ).every(
        (a) =>
          !c2.some((i) => i.test(a)) &&
          ((n +=
            a +
            `
`),
          a.trim())
      );
      let o = n.trimEnd();
      return o == '' ? null : [n, o];
    }
    function Qr(e) {
      try {
        if (
          decodeURIComponent(e)
            .replace(/[^A-Za-z0-9/:]/g, '')
            .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
        )
          return;
      } catch {
        return null;
      }
      return e;
    }
    function mv(e) {
      return e.replace(gB, '$1');
    }
    function Sa(e, t, r) {
      let n = r.inline || !1,
        o = r.simple || !1;
      (r.inline = !0), (r.simple = !0);
      let a = e(t, r);
      return (r.inline = n), (r.simple = o), a;
    }
    function OB(e, t, r) {
      let n = r.inline || !1,
        o = r.simple || !1;
      (r.inline = !1), (r.simple = !0);
      let a = e(t, r);
      return (r.inline = n), (r.simple = o), a;
    }
    function IB(e, t, r) {
      return (r.inline = !1), e(t, r);
    }
    var bl = (e, t, r) => ({ children: Sa(t, e[1], r) });
    function vl() {
      return {};
    }
    function xl() {
      return null;
    }
    function PB(...e) {
      return e.filter(Boolean).join(' ');
    }
    function El(e, t, r) {
      let n = e,
        o = t.split('.');
      for (; o.length && ((n = n[o[0]]), n !== void 0); ) o.shift();
      return n || r;
    }
    function kB(e = '', t = {}) {
      (t.overrides = t.overrides || {}),
        (t.slugify = t.slugify || AB),
        (t.namedCodesToUnicode = t.namedCodesToUnicode
          ? br({}, pv, t.namedCodesToUnicode)
          : pv);
      let r = t.createElement || ja;
      function n(f, h, ...g) {
        let _ = El(t.overrides, `${f}.props`, {});
        return r(
          (function (x, v) {
            let O = El(v, x);
            return O
              ? typeof O == 'function' ||
                (typeof O == 'object' && 'render' in O)
                ? O
                : El(v, `${x}.component`, x)
              : x;
          })(f, t.overrides),
          br({}, h, _, { className: PB(h?.className, _.className) || void 0 }),
          ...g
        );
      }
      function o(f) {
        f = f.replace(J3, '');
        let h = !1;
        t.forceInline ? (h = !0) : t.forceBlock || (h = tB.test(f) === !1);
        let g = c(
          u(
            h
              ? f
              : `${f.trimEnd().replace(hB, '')}

`,
            { inline: h }
          )
        );
        for (; typeof g[g.length - 1] == 'string' && !g[g.length - 1].trim(); )
          g.pop();
        if (t.wrapper === null) return g;
        let _ = t.wrapper || (h ? 'span' : 'div'),
          x;
        if (g.length > 1 || t.forceWrapper) x = g;
        else {
          if (g.length === 1)
            return (
              (x = g[0]),
              typeof x == 'string' ? n('span', { key: 'outer' }, x) : x
            );
          x = null;
        }
        return ja(_, { key: 'outer' }, x);
      }
      function a(f) {
        let h = f.match(P3);
        return h
          ? h.reduce(function (g, _, x) {
              let v = _.indexOf('=');
              if (v !== -1) {
                let O = (function (F) {
                    return (
                      F.indexOf('-') !== -1 &&
                        F.match(V3) === null &&
                        (F = F.replace(Y3, function (D, U) {
                          return U.toUpperCase();
                        })),
                      F
                    );
                  })(_.slice(0, v)).trim(),
                  C = (function (F) {
                    let D = F[0];
                    return (D === '"' || D === "'") &&
                      F.length >= 2 &&
                      F[F.length - 1] === D
                      ? F.slice(1, -1)
                      : F;
                  })(_.slice(v + 1).trim()),
                  I = cv[O] || O,
                  P = (g[I] = (function (F, D) {
                    return F === 'style'
                      ? D.split(/;\s?/).reduce(function (U, G) {
                          let X = G.slice(0, G.indexOf(':'));
                          return (
                            (U[
                              X.trim().replace(/(-[a-z])/g, (Q) =>
                                Q[1].toUpperCase()
                              )
                            ] = G.slice(X.length + 1).trim()),
                            U
                          );
                        }, {})
                      : F === 'href' || F === 'src'
                        ? Qr(D)
                        : (D.match(H3) && (D = D.slice(1, D.length - 1)),
                          D === 'true' || (D !== 'false' && D));
                  })(O, C));
                typeof P == 'string' &&
                  (kl.test(P) || Rl.test(P)) &&
                  (g[I] = Oe(o(P.trim()), { key: x }));
              } else _ !== 'style' && (g[cv[_] || _] = !0);
              return g;
            }, {})
          : null;
      }
      let i = [],
        s = {},
        l = {
          0: {
            match: Rt(Hv),
            order: 1,
            parse: (f, h, g) => ({ children: h(f[0].replace(D3, ''), g) }),
            render: (f, h, g) =>
              n('blockquote', { key: g.key }, h(f.children, g)),
          },
          1: {
            match: Xn(F3),
            order: 1,
            parse: vl,
            render: (f, h, g) => n('br', { key: g.key }),
          },
          2: {
            match: Rt(j3),
            order: 1,
            parse: vl,
            render: (f, h, g) => n('hr', { key: g.key }),
          },
          3: {
            match: Rt(Wv),
            order: 0,
            parse: (f) => ({
              lang: void 0,
              text: f[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            }),
            render: (f, h, g) =>
              n(
                'pre',
                { key: g.key },
                n(
                  'code',
                  br({}, f.attrs, {
                    className: f.lang ? `lang-${f.lang}` : '',
                  }),
                  f.text
                )
              ),
          },
          4: {
            match: Rt(Gv),
            order: 0,
            parse: (f) => ({
              attrs: a(f[3] || ''),
              lang: f[2] || void 0,
              text: f[4],
              type: '3',
            }),
          },
          5: {
            match: Gt(N3),
            order: 3,
            parse: (f) => ({ text: f[2] }),
            render: (f, h, g) => n('code', { key: g.key }, f.text),
          },
          6: {
            match: Rt(q3),
            order: 0,
            parse: (f) => (i.push({ footnote: f[2], identifier: f[1] }), {}),
            render: xl,
          },
          7: {
            match: Ht(M3),
            order: 1,
            parse: (f) => ({ target: `#${t.slugify(f[1])}`, text: f[1] }),
            render: (f, h, g) =>
              n(
                'a',
                { key: g.key, href: Qr(f.target) },
                n('sup', { key: g.key }, f.text)
              ),
          },
          8: {
            match: Ht($3),
            order: 1,
            parse: (f) => ({ completed: f[1].toLowerCase() === 'x' }),
            render: (f, h, g) =>
              n('input', {
                checked: f.completed,
                key: g.key,
                readOnly: !0,
                type: 'checkbox',
              }),
          },
          9: {
            match: Rt(t.enforceAtxHeadings ? Yv : Kv),
            order: 1,
            parse: (f, h, g) => ({
              children: Sa(h, f[2], g),
              id: t.slugify(f[2]),
              level: f[1].length,
            }),
            render: (f, h, g) =>
              n(`h${f.level}`, { id: f.id, key: g.key }, h(f.children, g)),
          },
          10: {
            match: Rt(Xv),
            order: 0,
            parse: (f, h, g) => ({
              children: Sa(h, f[1], g),
              level: f[2] === '=' ? 1 : 2,
              type: '9',
            }),
          },
          11: {
            match: Xn(kl),
            order: 1,
            parse(f, h, g) {
              let [, _] = f[3].match(mB),
                x = new RegExp(`^${_}`, 'gm'),
                v = f[3].replace(x, ''),
                O = ((C = v), SB.some((D) => D.test(C)) ? IB : Sa);
              var C;
              let I = f[1].toLowerCase(),
                P = I3.indexOf(I) !== -1,
                F = {
                  attrs: a(f[2]),
                  noInnerParse: P,
                  tag: (P ? I : f[1]).trim(),
                };
              return (
                (g.inAnchor = g.inAnchor || I === 'a'),
                P ? (F.text = f[3]) : (F.children = O(h, v, g)),
                (g.inAnchor = !1),
                F
              );
            },
            render: (f, h, g) =>
              n(f.tag, br({ key: g.key }, f.attrs), f.text || h(f.children, g)),
          },
          13: {
            match: Xn(Rl),
            order: 1,
            parse: (f) => ({ attrs: a(f[2] || ''), tag: f[1].trim() }),
            render: (f, h, g) => n(f.tag, br({}, f.attrs, { key: g.key })),
          },
          12: { match: Xn(Qv), order: 1, parse: () => ({}), render: xl },
          14: {
            match: Gt(wB),
            order: 1,
            parse: (f) => ({ alt: f[1], target: mv(f[2]), title: f[3] }),
            render: (f, h, g) =>
              n('img', {
                key: g.key,
                alt: f.alt || void 0,
                title: f.title || void 0,
                src: Qr(f.target),
              }),
          },
          15: {
            match: Ht(EB),
            order: 3,
            parse: (f, h, g) => ({
              children: OB(h, f[1], g),
              target: mv(f[2]),
              title: f[3],
            }),
            render: (f, h, g) =>
              n(
                'a',
                { key: g.key, href: Qr(f.target), title: f.title },
                h(f.children, g)
              ),
          },
          16: {
            match: Ht(K3),
            order: 0,
            parse: (f) => ({
              children: [{ text: f[1], type: '27' }],
              target: f[1],
              type: '15',
            }),
          },
          17: {
            match: (f, h) => (h.inAnchor ? null : Ht(G3)(f, h)),
            order: 0,
            parse: (f) => ({
              children: [{ text: f[1], type: '27' }],
              target: f[1],
              title: void 0,
              type: '15',
            }),
          },
          18: {
            match: Ht(W3),
            order: 0,
            parse(f) {
              let h = f[1],
                g = f[1];
              return (
                k3.test(g) || (g = 'mailto:' + g),
                {
                  children: [{ text: h.replace('mailto:', ''), type: '27' }],
                  target: g,
                  type: '15',
                }
              );
            },
          },
          20: fv(n, 1),
          33: fv(n, 2),
          19: {
            match: Rt(B3),
            order: 3,
            parse: vl,
            render: () => `
`,
          },
          21: {
            match: _B,
            order: 3,
            parse: bl,
            render: (f, h, g) => n('p', { key: g.key }, h(f.children, g)),
          },
          22: {
            match: Ht(X3),
            order: 0,
            parse: (f) => ((s[f[1]] = { target: f[2], title: f[4] }), {}),
            render: xl,
          },
          23: {
            match: Gt(Q3),
            order: 0,
            parse: (f) => ({ alt: f[1] || void 0, ref: f[2] }),
            render: (f, h, g) =>
              s[f.ref]
                ? n('img', {
                    key: g.key,
                    alt: f.alt,
                    src: Qr(s[f.ref].target),
                    title: s[f.ref].title,
                  })
                : null,
          },
          24: {
            match: Ht(Z3),
            order: 0,
            parse: (f, h, g) => ({
              children: h(f[1], g),
              fallbackChildren: h(f[0].replace(eB, '\\$1'), g),
              ref: f[2],
            }),
            render: (f, h, g) =>
              s[f.ref]
                ? n(
                    'a',
                    {
                      key: g.key,
                      href: Qr(s[f.ref].target),
                      title: s[f.ref].title,
                    },
                    h(f.children, g)
                  )
                : n('span', { key: g.key }, h(f.fallbackChildren, g)),
          },
          25: {
            match: Rt(Zv),
            order: 1,
            parse: CB,
            render: (f, h, g) =>
              n(
                'table',
                { key: g.key },
                n(
                  'thead',
                  null,
                  n(
                    'tr',
                    null,
                    f.header.map(function (_, x) {
                      return n('th', { key: x, style: hv(f, x) }, h(_, g));
                    })
                  )
                ),
                n(
                  'tbody',
                  null,
                  f.cells.map(function (_, x) {
                    return n(
                      'tr',
                      { key: x },
                      _.map(function (v, O) {
                        return n('td', { key: O, style: hv(f, O) }, h(v, g));
                      })
                    );
                  })
                )
              ),
          },
          26: {
            match: function (f, h) {
              return h.inTable ? ((h.inline = !0), nB.exec(f)) : null;
            },
            order: 1,
            parse: function () {
              return { type: '26' };
            },
            render: () => ' | ',
          },
          27: {
            match: Xn(yB),
            order: 4,
            parse: (f) => ({
              text: f[0].replace(z3, (h, g) =>
                t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : h
              ),
            }),
            render: (f) => f.text,
          },
          28: {
            match: Gt(uB),
            order: 2,
            parse: (f, h, g) => ({ children: h(f[2], g) }),
            render: (f, h, g) => n('strong', { key: g.key }, h(f.children, g)),
          },
          29: {
            match: Gt(cB),
            order: 3,
            parse: (f, h, g) => ({ children: h(f[2], g) }),
            render: (f, h, g) => n('em', { key: g.key }, h(f.children, g)),
          },
          30: {
            match: Gt(fB),
            order: 1,
            parse: (f) => ({ text: f[1], type: '27' }),
          },
          31: {
            match: Gt(pB),
            order: 3,
            parse: bl,
            render: (f, h, g) => n('mark', { key: g.key }, h(f.children, g)),
          },
          32: {
            match: Gt(dB),
            order: 3,
            parse: bl,
            render: (f, h, g) => n('del', { key: g.key }, h(f.children, g)),
          },
        };
      t.disableParsingRawHTML === !0 && (delete l[11], delete l[13]);
      let u = (function (f) {
          let h = Object.keys(f);
          function g(_, x) {
            let v = [],
              O = '';
            for (; _; ) {
              let C = 0;
              for (; C < h.length; ) {
                let I = h[C],
                  P = f[I],
                  F = P.match(_, x, O);
                if (F) {
                  let D = F[0];
                  _ = _.substring(D.length);
                  let U = P.parse(F, g, x);
                  U.type == null && (U.type = I), v.push(U), (O = D);
                  break;
                }
                C++;
              }
            }
            return v;
          }
          return (
            h.sort(function (_, x) {
              let v = f[_].order,
                O = f[x].order;
              return v !== O ? v - O : _ < x ? -1 : 1;
            }),
            function (_, x) {
              return g(
                (function (v) {
                  return v
                    .replace(
                      L3,
                      `
`
                    )
                    .replace(U3, '')
                    .replace(rB, '    ');
                })(_),
                x
              );
            }
          );
        })(l),
        c =
          ((d = (function (f, h) {
            return function (g, _, x) {
              let v = f[g.type].render;
              return h ? h(() => v(g, _, x), g, _, x) : v(g, _, x);
            };
          })(l, t.renderRule)),
          function f(h, g = {}) {
            if (Array.isArray(h)) {
              let _ = g.key,
                x = [],
                v = !1;
              for (let O = 0; O < h.length; O++) {
                g.key = O;
                let C = f(h[O], g),
                  I = typeof C == 'string';
                I && v ? (x[x.length - 1] += C) : C !== null && x.push(C),
                  (v = I);
              }
              return (g.key = _), x;
            }
            return d(h, f, g);
          });
      var d;
      let y = o(e);
      return i.length
        ? n(
            'div',
            null,
            y,
            n(
              'footer',
              { key: 'footer' },
              i.map(function (f) {
                return n(
                  'div',
                  { id: t.slugify(f.identifier), key: f.identifier },
                  f.identifier,
                  c(u(f.footnote, { inline: !0 }))
                );
              })
            )
          )
        : y;
    }
    var RB = (e) => {
        let { children: t = '', options: r } = e,
          n = (function (o, a) {
            if (o == null) return {};
            var i,
              s,
              l = {},
              u = Object.keys(o);
            for (s = 0; s < u.length; s++)
              a.indexOf((i = u[s])) >= 0 || (l[i] = o[i]);
            return l;
          })(e, O3);
        return Oe(kB(t, r), n);
      },
      DB = gn(qv(), 1),
      FB = Object.create,
      p2 = Object.defineProperty,
      jB = Object.getOwnPropertyDescriptor,
      d2 = Object.getOwnPropertyNames,
      NB = Object.getPrototypeOf,
      BB = Object.prototype.hasOwnProperty,
      ct = (e, t) =>
        function () {
          return (
            t || (0, e[d2(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        },
      LB = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of d2(t))
            !BB.call(e, o) &&
              o !== r &&
              p2(e, o, {
                get: () => t[o],
                enumerable: !(n = jB(t, o)) || n.enumerable,
              });
        return e;
      },
      Ll = (e, t, r) => (
        (r = e != null ? FB(NB(e)) : {}),
        LB(
          t || !e || !e.__esModule
            ? p2(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      qB = gn(qv(), 1),
      f2 = ct({
        'node_modules/has-symbols/shams.js'(e, t) {
          t.exports = function () {
            if (
              typeof Symbol != 'function' ||
              typeof Object.getOwnPropertySymbols != 'function'
            )
              return !1;
            if (typeof Symbol.iterator == 'symbol') return !0;
            var r = {},
              n = Symbol('test'),
              o = Object(n);
            if (
              typeof n == 'string' ||
              Object.prototype.toString.call(n) !== '[object Symbol]' ||
              Object.prototype.toString.call(o) !== '[object Symbol]'
            )
              return !1;
            var a = 42;
            r[n] = a;
            for (n in r) return !1;
            if (
              (typeof Object.keys == 'function' &&
                Object.keys(r).length !== 0) ||
              (typeof Object.getOwnPropertyNames == 'function' &&
                Object.getOwnPropertyNames(r).length !== 0)
            )
              return !1;
            var i = Object.getOwnPropertySymbols(r);
            if (
              i.length !== 1 ||
              i[0] !== n ||
              !Object.prototype.propertyIsEnumerable.call(r, n)
            )
              return !1;
            if (typeof Object.getOwnPropertyDescriptor == 'function') {
              var s = Object.getOwnPropertyDescriptor(r, n);
              if (s.value !== a || s.enumerable !== !0) return !1;
            }
            return !0;
          };
        },
      }),
      y2 = ct({
        'node_modules/has-symbols/index.js'(e, t) {
          var r = typeof Symbol < 'u' && Symbol,
            n = f2();
          t.exports = function () {
            return typeof r != 'function' ||
              typeof Symbol != 'function' ||
              typeof r('foo') != 'symbol' ||
              typeof Symbol('bar') != 'symbol'
              ? !1
              : n();
          };
        },
      }),
      MB = ct({
        'node_modules/function-bind/implementation.js'(e, t) {
          var r = 'Function.prototype.bind called on incompatible ',
            n = Array.prototype.slice,
            o = Object.prototype.toString,
            a = '[object Function]';
          t.exports = function (i) {
            var s = this;
            if (typeof s != 'function' || o.call(s) !== a)
              throw new TypeError(r + s);
            for (
              var l = n.call(arguments, 1),
                u,
                c = function () {
                  if (this instanceof u) {
                    var g = s.apply(this, l.concat(n.call(arguments)));
                    return Object(g) === g ? g : this;
                  } else return s.apply(i, l.concat(n.call(arguments)));
                },
                d = Math.max(0, s.length - l.length),
                y = [],
                f = 0;
              f < d;
              f++
            )
              y.push('$' + f);
            if (
              ((u = Function(
                'binder',
                'return function (' +
                  y.join(',') +
                  '){ return binder.apply(this,arguments); }'
              )(c)),
              s.prototype)
            ) {
              var h = function () {};
              (h.prototype = s.prototype),
                (u.prototype = new h()),
                (h.prototype = null);
            }
            return u;
          };
        },
      }),
      ql = ct({
        'node_modules/function-bind/index.js'(e, t) {
          var r = MB();
          t.exports = Function.prototype.bind || r;
        },
      }),
      UB = ct({
        'node_modules/has/src/index.js'(e, t) {
          var r = ql();
          t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
        },
      }),
      h2 = ct({
        'node_modules/get-intrinsic/index.js'(e, t) {
          var r,
            n = SyntaxError,
            o = Function,
            a = TypeError,
            i = function (Q) {
              try {
                return o('"use strict"; return (' + Q + ').constructor;')();
              } catch {}
            },
            s = Object.getOwnPropertyDescriptor;
          if (s)
            try {
              s({}, '');
            } catch {
              s = null;
            }
          var l = function () {
              throw new a();
            },
            u = s
              ? (function () {
                  try {
                    return arguments.callee, l;
                  } catch {
                    try {
                      return s(arguments, 'callee').get;
                    } catch {
                      return l;
                    }
                  }
                })()
              : l,
            c = y2()(),
            d =
              Object.getPrototypeOf ||
              function (Q) {
                return Q.__proto__;
              },
            y = {},
            f = typeof Uint8Array > 'u' ? r : d(Uint8Array),
            h = {
              '%AggregateError%':
                typeof AggregateError > 'u' ? r : AggregateError,
              '%Array%': Array,
              '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
              '%ArrayIteratorPrototype%': c ? d([][Symbol.iterator]()) : r,
              '%AsyncFromSyncIteratorPrototype%': r,
              '%AsyncFunction%': y,
              '%AsyncGenerator%': y,
              '%AsyncGeneratorFunction%': y,
              '%AsyncIteratorPrototype%': y,
              '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
              '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
              '%Boolean%': Boolean,
              '%DataView%': typeof DataView > 'u' ? r : DataView,
              '%Date%': Date,
              '%decodeURI%': decodeURI,
              '%decodeURIComponent%': decodeURIComponent,
              '%encodeURI%': encodeURI,
              '%encodeURIComponent%': encodeURIComponent,
              '%Error%': Error,
              '%eval%': eval,
              '%EvalError%': EvalError,
              '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
              '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
              '%FinalizationRegistry%':
                typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
              '%Function%': o,
              '%GeneratorFunction%': y,
              '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
              '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
              '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
              '%isFinite%': isFinite,
              '%isNaN%': isNaN,
              '%IteratorPrototype%': c ? d(d([][Symbol.iterator]())) : r,
              '%JSON%': typeof JSON == 'object' ? JSON : r,
              '%Map%': typeof Map > 'u' ? r : Map,
              '%MapIteratorPrototype%':
                typeof Map > 'u' || !c ? r : d(new Map()[Symbol.iterator]()),
              '%Math%': Math,
              '%Number%': Number,
              '%Object%': Object,
              '%parseFloat%': parseFloat,
              '%parseInt%': parseInt,
              '%Promise%': typeof Promise > 'u' ? r : Promise,
              '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
              '%RangeError%': RangeError,
              '%ReferenceError%': ReferenceError,
              '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
              '%RegExp%': RegExp,
              '%Set%': typeof Set > 'u' ? r : Set,
              '%SetIteratorPrototype%':
                typeof Set > 'u' || !c ? r : d(new Set()[Symbol.iterator]()),
              '%SharedArrayBuffer%':
                typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
              '%String%': String,
              '%StringIteratorPrototype%': c ? d(''[Symbol.iterator]()) : r,
              '%Symbol%': c ? Symbol : r,
              '%SyntaxError%': n,
              '%ThrowTypeError%': u,
              '%TypedArray%': f,
              '%TypeError%': a,
              '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
              '%Uint8ClampedArray%':
                typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
              '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
              '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
              '%URIError%': URIError,
              '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
              '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
              '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
            },
            g = function Q(V) {
              var R;
              if (V === '%AsyncFunction%') R = i('async function () {}');
              else if (V === '%GeneratorFunction%') R = i('function* () {}');
              else if (V === '%AsyncGeneratorFunction%')
                R = i('async function* () {}');
              else if (V === '%AsyncGenerator%') {
                var q = Q('%AsyncGeneratorFunction%');
                q && (R = q.prototype);
              } else if (V === '%AsyncIteratorPrototype%') {
                var M = Q('%AsyncGenerator%');
                M && (R = d(M.prototype));
              }
              return (h[V] = R), R;
            },
            _ = {
              '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
              '%ArrayPrototype%': ['Array', 'prototype'],
              '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
              '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
              '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
              '%ArrayProto_values%': ['Array', 'prototype', 'values'],
              '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
              '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
              '%AsyncGeneratorPrototype%': [
                'AsyncGeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%BooleanPrototype%': ['Boolean', 'prototype'],
              '%DataViewPrototype%': ['DataView', 'prototype'],
              '%DatePrototype%': ['Date', 'prototype'],
              '%ErrorPrototype%': ['Error', 'prototype'],
              '%EvalErrorPrototype%': ['EvalError', 'prototype'],
              '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
              '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
              '%FunctionPrototype%': ['Function', 'prototype'],
              '%Generator%': ['GeneratorFunction', 'prototype'],
              '%GeneratorPrototype%': [
                'GeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
              '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
              '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
              '%JSONParse%': ['JSON', 'parse'],
              '%JSONStringify%': ['JSON', 'stringify'],
              '%MapPrototype%': ['Map', 'prototype'],
              '%NumberPrototype%': ['Number', 'prototype'],
              '%ObjectPrototype%': ['Object', 'prototype'],
              '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
              '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
              '%PromisePrototype%': ['Promise', 'prototype'],
              '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
              '%Promise_all%': ['Promise', 'all'],
              '%Promise_reject%': ['Promise', 'reject'],
              '%Promise_resolve%': ['Promise', 'resolve'],
              '%RangeErrorPrototype%': ['RangeError', 'prototype'],
              '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
              '%RegExpPrototype%': ['RegExp', 'prototype'],
              '%SetPrototype%': ['Set', 'prototype'],
              '%SharedArrayBufferPrototype%': [
                'SharedArrayBuffer',
                'prototype',
              ],
              '%StringPrototype%': ['String', 'prototype'],
              '%SymbolPrototype%': ['Symbol', 'prototype'],
              '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
              '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
              '%TypeErrorPrototype%': ['TypeError', 'prototype'],
              '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
              '%Uint8ClampedArrayPrototype%': [
                'Uint8ClampedArray',
                'prototype',
              ],
              '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
              '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
              '%URIErrorPrototype%': ['URIError', 'prototype'],
              '%WeakMapPrototype%': ['WeakMap', 'prototype'],
              '%WeakSetPrototype%': ['WeakSet', 'prototype'],
            },
            x = ql(),
            v = UB(),
            O = x.call(Function.call, Array.prototype.concat),
            C = x.call(Function.apply, Array.prototype.splice),
            I = x.call(Function.call, String.prototype.replace),
            P = x.call(Function.call, String.prototype.slice),
            F = x.call(Function.call, RegExp.prototype.exec),
            D =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            U = /\\(\\)?/g,
            G = function (Q) {
              var V = P(Q, 0, 1),
                R = P(Q, -1);
              if (V === '%' && R !== '%')
                throw new n('invalid intrinsic syntax, expected closing `%`');
              if (R === '%' && V !== '%')
                throw new n('invalid intrinsic syntax, expected opening `%`');
              var q = [];
              return (
                I(Q, D, function (M, Y, te, ne) {
                  q[q.length] = te ? I(ne, U, '$1') : Y || M;
                }),
                q
              );
            },
            X = function (Q, V) {
              var R = Q,
                q;
              if ((v(_, R) && ((q = _[R]), (R = '%' + q[0] + '%')), v(h, R))) {
                var M = h[R];
                if ((M === y && (M = g(R)), typeof M > 'u' && !V))
                  throw new a(
                    'intrinsic ' +
                      Q +
                      ' exists, but is not available. Please file an issue!'
                  );
                return { alias: q, name: R, value: M };
              }
              throw new n('intrinsic ' + Q + ' does not exist!');
            };
          t.exports = function (Q, V) {
            if (typeof Q != 'string' || Q.length === 0)
              throw new a('intrinsic name must be a non-empty string');
            if (arguments.length > 1 && typeof V != 'boolean')
              throw new a('"allowMissing" argument must be a boolean');
            if (F(/^%?[^%]*%?$/, Q) === null)
              throw new n(
                '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
              );
            var R = G(Q),
              q = R.length > 0 ? R[0] : '',
              M = X('%' + q + '%', V),
              Y = M.name,
              te = M.value,
              ne = !1,
              re = M.alias;
            re && ((q = re[0]), C(R, O([0, 1], re)));
            for (var Z = 1, ae = !0; Z < R.length; Z += 1) {
              var le = R[Z],
                Ee = P(le, 0, 1),
                pe = P(le, -1);
              if (
                (Ee === '"' ||
                  Ee === "'" ||
                  Ee === '`' ||
                  pe === '"' ||
                  pe === "'" ||
                  pe === '`') &&
                Ee !== pe
              )
                throw new n(
                  'property names with quotes must have matching quotes'
                );
              if (
                ((le === 'constructor' || !ae) && (ne = !0),
                (q += '.' + le),
                (Y = '%' + q + '%'),
                v(h, Y))
              )
                te = h[Y];
              else if (te != null) {
                if (!(le in te)) {
                  if (!V)
                    throw new a(
                      'base intrinsic for ' +
                        Q +
                        ' exists, but the property is not available.'
                    );
                  return;
                }
                if (s && Z + 1 >= R.length) {
                  var we = s(te, le);
                  (ae = !!we),
                    ae && 'get' in we && !('originalValue' in we.get)
                      ? (te = we.get)
                      : (te = te[le]);
                } else (ae = v(te, le)), (te = te[le]);
                ae && !ne && (h[Y] = te);
              }
            }
            return te;
          };
        },
      }),
      JB = ct({
        'node_modules/call-bind/index.js'(e, t) {
          var r = ql(),
            n = h2(),
            o = n('%Function.prototype.apply%'),
            a = n('%Function.prototype.call%'),
            i = n('%Reflect.apply%', !0) || r.call(a, o),
            s = n('%Object.getOwnPropertyDescriptor%', !0),
            l = n('%Object.defineProperty%', !0),
            u = n('%Math.max%');
          if (l)
            try {
              l({}, 'a', { value: 1 });
            } catch {
              l = null;
            }
          t.exports = function (d) {
            var y = i(r, a, arguments);
            if (s && l) {
              var f = s(y, 'length');
              f.configurable &&
                l(y, 'length', {
                  value: 1 + u(0, d.length - (arguments.length - 1)),
                });
            }
            return y;
          };
          var c = function () {
            return i(r, o, arguments);
          };
          l ? l(t.exports, 'apply', { value: c }) : (t.exports.apply = c);
        },
      }),
      $B = ct({
        'node_modules/call-bind/callBound.js'(e, t) {
          var r = h2(),
            n = JB(),
            o = n(r('String.prototype.indexOf'));
          t.exports = function (a, i) {
            var s = r(a, !!i);
            return typeof s == 'function' && o(a, '.prototype.') > -1
              ? n(s)
              : s;
          };
        },
      }),
      zB = ct({
        'node_modules/has-tostringtag/shams.js'(e, t) {
          var r = f2();
          t.exports = function () {
            return r() && !!Symbol.toStringTag;
          };
        },
      }),
      VB = ct({
        'node_modules/is-regex/index.js'(e, t) {
          var r = $B(),
            n = zB()(),
            o,
            a,
            i,
            s;
          n &&
            ((o = r('Object.prototype.hasOwnProperty')),
            (a = r('RegExp.prototype.exec')),
            (i = {}),
            (l = function () {
              throw i;
            }),
            (s = { toString: l, valueOf: l }),
            typeof Symbol.toPrimitive == 'symbol' &&
              (s[Symbol.toPrimitive] = l));
          var l,
            u = r('Object.prototype.toString'),
            c = Object.getOwnPropertyDescriptor,
            d = '[object RegExp]';
          t.exports = n
            ? function (y) {
                if (!y || typeof y != 'object') return !1;
                var f = c(y, 'lastIndex'),
                  h = f && o(f, 'value');
                if (!h) return !1;
                try {
                  a(y, s);
                } catch (g) {
                  return g === i;
                }
              }
            : function (y) {
                return !y || (typeof y != 'object' && typeof y != 'function')
                  ? !1
                  : u(y) === d;
              };
        },
      }),
      HB = ct({
        'node_modules/is-function/index.js'(e, t) {
          t.exports = n;
          var r = Object.prototype.toString;
          function n(o) {
            if (!o) return !1;
            var a = r.call(o);
            return (
              a === '[object Function]' ||
              (typeof o == 'function' && a !== '[object RegExp]') ||
              (typeof window < 'u' &&
                (o === window.setTimeout ||
                  o === window.alert ||
                  o === window.confirm ||
                  o === window.prompt))
            );
          }
        },
      }),
      GB = ct({
        'node_modules/is-symbol/index.js'(e, t) {
          var r = Object.prototype.toString,
            n = y2()();
          n
            ? ((o = Symbol.prototype.toString),
              (a = /^Symbol\(.*\)$/),
              (i = function (s) {
                return typeof s.valueOf() != 'symbol' ? !1 : a.test(o.call(s));
              }),
              (t.exports = function (s) {
                if (typeof s == 'symbol') return !0;
                if (r.call(s) !== '[object Symbol]') return !1;
                try {
                  return i(s);
                } catch {
                  return !1;
                }
              }))
            : (t.exports = function (s) {
                return !1;
              });
          var o, a, i;
        },
      });
    Ll(VB());
    Ll(HB());
    Ll(GB());
    var WB =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window,
      KB = WB,
      YB = typeof self == 'object' && self && self.Object === Object && self,
      XB = KB || YB || Function('return this')(),
      Ml = XB,
      QB = Ml.Symbol,
      tn = QB,
      m2 = Object.prototype,
      ZB = m2.hasOwnProperty,
      eL = m2.toString,
      Qn = tn ? tn.toStringTag : void 0;
    function tL(e) {
      var t = ZB.call(e, Qn),
        r = e[Qn];
      try {
        e[Qn] = void 0;
        var n = !0;
      } catch {}
      var o = eL.call(e);
      return n && (t ? (e[Qn] = r) : delete e[Qn]), o;
    }
    var rL = tL,
      nL = Object.prototype,
      oL = nL.toString;
    function aL(e) {
      return oL.call(e);
    }
    var iL = aL,
      sL = '[object Null]',
      lL = '[object Undefined]',
      gv = tn ? tn.toStringTag : void 0;
    function uL(e) {
      return e == null
        ? e === void 0
          ? lL
          : sL
        : gv && gv in Object(e)
          ? rL(e)
          : iL(e);
    }
    var cL = uL,
      bv = tn ? tn.prototype : void 0;
    bv && bv.toString;
    function pL(e) {
      var t = typeof e;
      return e != null && (t == 'object' || t == 'function');
    }
    var g2 = pL,
      dL = '[object AsyncFunction]',
      fL = '[object Function]',
      yL = '[object GeneratorFunction]',
      hL = '[object Proxy]';
    function mL(e) {
      if (!g2(e)) return !1;
      var t = cL(e);
      return t == fL || t == yL || t == dL || t == hL;
    }
    var gL = mL,
      bL = Ml['__core-js_shared__'],
      wl = bL,
      vv = (function () {
        var e = /[^.]+$/.exec((wl && wl.keys && wl.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    function vL(e) {
      return !!vv && vv in e;
    }
    var xL = vL,
      EL = Function.prototype,
      wL = EL.toString;
    function SL(e) {
      if (e != null) {
        try {
          return wL.call(e);
        } catch {}
        try {
          return e + '';
        } catch {}
      }
      return '';
    }
    var AL = SL,
      TL = /[\\^$.*+?()[\]{}|]/g,
      CL = /^\[object .+?Constructor\]$/,
      _L = Function.prototype,
      OL = Object.prototype,
      IL = _L.toString,
      PL = OL.hasOwnProperty,
      kL = RegExp(
        '^' +
          IL.call(PL)
            .replace(TL, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    function RL(e) {
      if (!g2(e) || xL(e)) return !1;
      var t = gL(e) ? kL : CL;
      return t.test(AL(e));
    }
    var DL = RL;
    function FL(e, t) {
      return e?.[t];
    }
    var jL = FL;
    function NL(e, t) {
      var r = jL(e, t);
      return DL(r) ? r : void 0;
    }
    var b2 = NL;
    function BL(e, t) {
      return e === t || (e !== e && t !== t);
    }
    var LL = BL,
      qL = b2(Object, 'create'),
      to = qL;
    function ML() {
      (this.__data__ = to ? to(null) : {}), (this.size = 0);
    }
    var UL = ML;
    function JL(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    var $L = JL,
      zL = '__lodash_hash_undefined__',
      VL = Object.prototype,
      HL = VL.hasOwnProperty;
    function GL(e) {
      var t = this.__data__;
      if (to) {
        var r = t[e];
        return r === zL ? void 0 : r;
      }
      return HL.call(t, e) ? t[e] : void 0;
    }
    var WL = GL,
      KL = Object.prototype,
      YL = KL.hasOwnProperty;
    function XL(e) {
      var t = this.__data__;
      return to ? t[e] !== void 0 : YL.call(t, e);
    }
    var QL = XL,
      ZL = '__lodash_hash_undefined__';
    function eq(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = to && t === void 0 ? ZL : t),
        this
      );
    }
    var tq = eq;
    function rn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    rn.prototype.clear = UL;
    rn.prototype.delete = $L;
    rn.prototype.get = WL;
    rn.prototype.has = QL;
    rn.prototype.set = tq;
    var xv = rn;
    function rq() {
      (this.__data__ = []), (this.size = 0);
    }
    var nq = rq;
    function oq(e, t) {
      for (var r = e.length; r--; ) if (LL(e[r][0], t)) return r;
      return -1;
    }
    var Ia = oq,
      aq = Array.prototype,
      iq = aq.splice;
    function sq(e) {
      var t = this.__data__,
        r = Ia(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : iq.call(t, r, 1), --this.size, !0;
    }
    var lq = sq;
    function uq(e) {
      var t = this.__data__,
        r = Ia(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    var cq = uq;
    function pq(e) {
      return Ia(this.__data__, e) > -1;
    }
    var dq = pq;
    function fq(e, t) {
      var r = this.__data__,
        n = Ia(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    var yq = fq;
    function nn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    nn.prototype.clear = nq;
    nn.prototype.delete = lq;
    nn.prototype.get = cq;
    nn.prototype.has = dq;
    nn.prototype.set = yq;
    var hq = nn,
      mq = b2(Ml, 'Map'),
      gq = mq;
    function bq() {
      (this.size = 0),
        (this.__data__ = {
          hash: new xv(),
          map: new (gq || hq)(),
          string: new xv(),
        });
    }
    var vq = bq;
    function xq(e) {
      var t = typeof e;
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
    }
    var Eq = xq;
    function wq(e, t) {
      var r = e.__data__;
      return Eq(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
    }
    var Pa = wq;
    function Sq(e) {
      var t = Pa(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    var Aq = Sq;
    function Tq(e) {
      return Pa(this, e).get(e);
    }
    var Cq = Tq;
    function _q(e) {
      return Pa(this, e).has(e);
    }
    var Oq = _q;
    function Iq(e, t) {
      var r = Pa(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    var Pq = Iq;
    function on(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    on.prototype.clear = vq;
    on.prototype.delete = Aq;
    on.prototype.get = Cq;
    on.prototype.has = Oq;
    on.prototype.set = Pq;
    var v2 = on,
      kq = 'Expected a function';
    function Ul(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(kq);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(o)) return a.get(o);
        var i = e.apply(this, n);
        return (r.cache = a.set(o, i) || a), i;
      };
      return (r.cache = new (Ul.Cache || v2)()), r;
    }
    Ul.Cache = v2;
    var Rq = Ul,
      Dq = 500;
    function Fq(e) {
      var t = Rq(e, function (n) {
          return r.size === Dq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    var jq = Fq,
      Nq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Bq = /\\(\\)?/g;
    jq(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Nq, function (r, n, o, a) {
          t.push(o ? a.replace(Bq, '$1') : n || r);
        }),
        t
      );
    });
    var Lq = (e) => {
      let t = null,
        r = !1,
        n = !1,
        o = !1,
        a = '';
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !o
            ? e[i] === '"' || e[i] === "'" || e[i] === '`'
              ? (t = e[i])
              : e[i] === '/' && e[i + 1] === '*'
                ? (r = !0)
                : e[i] === '/' && e[i + 1] === '/'
                  ? (n = !0)
                  : e[i] === '/' && e[i + 1] !== '/' && (o = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== '\\') ||
                  (e[i] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              o &&
                ((e[i] === '/' && e[i - 1] !== '\\') ||
                  e[i] ===
                    `
`) &&
                (o = !1),
              r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (a += e[i]);
      else a = e;
      return a;
    };
    (0, qB.default)(1e4)((e) => Lq(e).replace(/\n\s*/g, '').trim());
    var qq = nr({
        '../../node_modules/tocbot/src/js/default-options.js'(e, t) {
          t.exports = {
            tocSelector: '.js-toc',
            contentSelector: '.js-toc-content',
            headingSelector: 'h1, h2, h3',
            ignoreSelector: '.js-toc-ignore',
            hasInnerContainers: !1,
            linkClass: 'toc-link',
            extraLinkClasses: '',
            activeLinkClass: 'is-active-link',
            listClass: 'toc-list',
            extraListClasses: '',
            isCollapsedClass: 'is-collapsed',
            collapsibleClass: 'is-collapsible',
            listItemClass: 'toc-list-item',
            activeListItemClass: 'is-active-li',
            collapseDepth: 0,
            scrollSmooth: !0,
            scrollSmoothDuration: 420,
            scrollSmoothOffset: 0,
            scrollEndCallback: function (r) {},
            headingsOffset: 1,
            throttleTimeout: 50,
            positionFixedSelector: null,
            positionFixedClass: 'is-position-fixed',
            fixedSidebarOffset: 'auto',
            includeHtml: !1,
            includeTitleTags: !1,
            onClick: function (r) {},
            orderedList: !0,
            scrollContainer: null,
            skipRendering: !1,
            headingLabelCallback: !1,
            ignoreHiddenElements: !1,
            headingObjectCallback: null,
            basePath: '',
            disableTocScrollSync: !1,
            tocScrollOffset: 0,
          };
        },
      }),
      Mq = nr({
        '../../node_modules/tocbot/src/js/build-html.js'(e, t) {
          t.exports = function (r) {
            var n = [].forEach,
              o = [].some,
              a = document.body,
              i,
              s = !0,
              l = ' ';
            function u(C, I) {
              var P = I.appendChild(d(C));
              if (C.children.length) {
                var F = y(C.isCollapsed);
                C.children.forEach(function (D) {
                  u(D, F);
                }),
                  P.appendChild(F);
              }
            }
            function c(C, I) {
              var P = !1,
                F = y(P);
              if (
                (I.forEach(function (D) {
                  u(D, F);
                }),
                (i = C || i),
                i !== null)
              )
                return (
                  i.firstChild && i.removeChild(i.firstChild),
                  I.length === 0 ? i : i.appendChild(F)
                );
            }
            function d(C) {
              var I = document.createElement('li'),
                P = document.createElement('a');
              return (
                r.listItemClass && I.setAttribute('class', r.listItemClass),
                r.onClick && (P.onclick = r.onClick),
                r.includeTitleTags && P.setAttribute('title', C.textContent),
                r.includeHtml && C.childNodes.length
                  ? n.call(C.childNodes, function (F) {
                      P.appendChild(F.cloneNode(!0));
                    })
                  : (P.textContent = C.textContent),
                P.setAttribute('href', r.basePath + '#' + C.id),
                P.setAttribute(
                  'class',
                  r.linkClass +
                    l +
                    'node-name--' +
                    C.nodeName +
                    l +
                    r.extraLinkClasses
                ),
                I.appendChild(P),
                I
              );
            }
            function y(C) {
              var I = r.orderedList ? 'ol' : 'ul',
                P = document.createElement(I),
                F = r.listClass + l + r.extraListClasses;
              return (
                C &&
                  ((F = F + l + r.collapsibleClass),
                  (F = F + l + r.isCollapsedClass)),
                P.setAttribute('class', F),
                P
              );
            }
            function f() {
              if (
                r.scrollContainer &&
                document.querySelector(r.scrollContainer)
              ) {
                var C;
                C = document.querySelector(r.scrollContainer).scrollTop;
              } else C = document.documentElement.scrollTop || a.scrollTop;
              var I = document.querySelector(r.positionFixedSelector);
              r.fixedSidebarOffset === 'auto' &&
                (r.fixedSidebarOffset = i.offsetTop),
                C > r.fixedSidebarOffset
                  ? I.className.indexOf(r.positionFixedClass) === -1 &&
                    (I.className += l + r.positionFixedClass)
                  : (I.className = I.className.replace(
                      l + r.positionFixedClass,
                      ''
                    ));
            }
            function h(C) {
              var I = 0;
              return (
                C !== null &&
                  ((I = C.offsetTop),
                  r.hasInnerContainers && (I += h(C.offsetParent))),
                I
              );
            }
            function g(C, I) {
              return C && C.className !== I && (C.className = I), C;
            }
            function _(C) {
              if (
                r.scrollContainer &&
                document.querySelector(r.scrollContainer)
              ) {
                var I;
                I = document.querySelector(r.scrollContainer).scrollTop;
              } else I = document.documentElement.scrollTop || a.scrollTop;
              r.positionFixedSelector && f();
              var P = C,
                F;
              if (s && i !== null && P.length > 0) {
                o.call(P, function (R, q) {
                  if (h(R) > I + r.headingsOffset + 10) {
                    var M = q === 0 ? q : q - 1;
                    return (F = P[M]), !0;
                  } else if (q === P.length - 1)
                    return (F = P[P.length - 1]), !0;
                });
                var D = i.querySelector('.' + r.activeLinkClass),
                  U = i.querySelector(
                    '.' +
                      r.linkClass +
                      '.node-name--' +
                      F.nodeName +
                      '[href="' +
                      r.basePath +
                      '#' +
                      F.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                      '"]'
                  );
                if (D === U) return;
                var G = i.querySelectorAll('.' + r.linkClass);
                n.call(G, function (R) {
                  g(R, R.className.replace(l + r.activeLinkClass, ''));
                });
                var X = i.querySelectorAll('.' + r.listItemClass);
                n.call(X, function (R) {
                  g(R, R.className.replace(l + r.activeListItemClass, ''));
                }),
                  U &&
                    U.className.indexOf(r.activeLinkClass) === -1 &&
                    (U.className += l + r.activeLinkClass);
                var Q = U && U.parentNode;
                Q &&
                  Q.className.indexOf(r.activeListItemClass) === -1 &&
                  (Q.className += l + r.activeListItemClass);
                var V = i.querySelectorAll(
                  '.' + r.listClass + '.' + r.collapsibleClass
                );
                n.call(V, function (R) {
                  R.className.indexOf(r.isCollapsedClass) === -1 &&
                    (R.className += l + r.isCollapsedClass);
                }),
                  U &&
                    U.nextSibling &&
                    U.nextSibling.className.indexOf(r.isCollapsedClass) !==
                      -1 &&
                    g(
                      U.nextSibling,
                      U.nextSibling.className.replace(
                        l + r.isCollapsedClass,
                        ''
                      )
                    ),
                  x(U && U.parentNode.parentNode);
              }
            }
            function x(C) {
              return C &&
                C.className.indexOf(r.collapsibleClass) !== -1 &&
                C.className.indexOf(r.isCollapsedClass) !== -1
                ? (g(C, C.className.replace(l + r.isCollapsedClass, '')),
                  x(C.parentNode.parentNode))
                : C;
            }
            function v(C) {
              var I = C.target || C.srcElement;
              typeof I.className != 'string' ||
                I.className.indexOf(r.linkClass) === -1 ||
                (s = !1);
            }
            function O() {
              s = !0;
            }
            return {
              enableTocAnimation: O,
              disableTocAnimation: v,
              render: c,
              updateToc: _,
            };
          };
        },
      }),
      Uq = nr({
        '../../node_modules/tocbot/src/js/parse-content.js'(e, t) {
          t.exports = function (r) {
            var n = [].reduce;
            function o(d) {
              return d[d.length - 1];
            }
            function a(d) {
              return +d.nodeName.toUpperCase().replace('H', '');
            }
            function i(d) {
              try {
                return (
                  d instanceof window.HTMLElement ||
                  d instanceof window.parent.HTMLElement
                );
              } catch {
                return d instanceof window.HTMLElement;
              }
            }
            function s(d) {
              if (!i(d)) return d;
              if (
                r.ignoreHiddenElements &&
                (!d.offsetHeight || !d.offsetParent)
              )
                return null;
              let y =
                d.getAttribute('data-heading-label') ||
                (r.headingLabelCallback
                  ? String(r.headingLabelCallback(d.innerText))
                  : (d.innerText || d.textContent).trim());
              var f = {
                id: d.id,
                children: [],
                nodeName: d.nodeName,
                headingLevel: a(d),
                textContent: y,
              };
              return (
                r.includeHtml && (f.childNodes = d.childNodes),
                r.headingObjectCallback ? r.headingObjectCallback(f, d) : f
              );
            }
            function l(d, y) {
              for (
                var f = s(d),
                  h = f.headingLevel,
                  g = y,
                  _ = o(g),
                  x = _ ? _.headingLevel : 0,
                  v = h - x;
                v > 0 && ((_ = o(g)), !(_ && h === _.headingLevel));

              )
                _ && _.children !== void 0 && (g = _.children), v--;
              return h >= r.collapseDepth && (f.isCollapsed = !0), g.push(f), g;
            }
            function u(d, y) {
              var f = y;
              r.ignoreSelector &&
                (f = y.split(',').map(function (h) {
                  return h.trim() + ':not(' + r.ignoreSelector + ')';
                }));
              try {
                return d.querySelectorAll(f);
              } catch {
                return (
                  console.warn('Headers not found with selector: ' + f), null
                );
              }
            }
            function c(d) {
              return n.call(
                d,
                function (y, f) {
                  var h = s(f);
                  return h && l(h, y.nest), y;
                },
                { nest: [] }
              );
            }
            return { nestHeadingsArray: c, selectHeadings: u };
          };
        },
      }),
      Jq = nr({
        '../../node_modules/tocbot/src/js/update-toc-scroll.js'(e, t) {
          t.exports = function (r) {
            var n = r.tocElement || document.querySelector(r.tocSelector);
            if (n && n.scrollHeight > n.clientHeight) {
              var o = n.querySelector('.' + r.activeListItemClass);
              o && (n.scrollTop = o.offsetTop - r.tocScrollOffset);
            }
          };
        },
      }),
      $q = nr({
        '../../node_modules/tocbot/src/js/scroll-smooth/index.js'(e) {
          e.initSmoothScrolling = t;
          function t(n) {
            var o = n.duration,
              a = n.offset,
              i = location.hash ? u(location.href) : location.href;
            s();
            function s() {
              document.body.addEventListener('click', d, !1);
              function d(y) {
                !l(y.target) ||
                  y.target.className.indexOf('no-smooth-scroll') > -1 ||
                  (y.target.href.charAt(y.target.href.length - 2) === '#' &&
                    y.target.href.charAt(y.target.href.length - 1) === '!') ||
                  y.target.className.indexOf(n.linkClass) === -1 ||
                  r(y.target.hash, {
                    duration: o,
                    offset: a,
                    callback: function () {
                      c(y.target.hash);
                    },
                  });
              }
            }
            function l(d) {
              return (
                d.tagName.toLowerCase() === 'a' &&
                (d.hash.length > 0 ||
                  d.href.charAt(d.href.length - 1) === '#') &&
                (u(d.href) === i || u(d.href) + '#' === i)
              );
            }
            function u(d) {
              return d.slice(0, d.lastIndexOf('#'));
            }
            function c(d) {
              var y = document.getElementById(d.substring(1));
              y &&
                (/^(?:a|select|input|button|textarea)$/i.test(y.tagName) ||
                  (y.tabIndex = -1),
                y.focus());
            }
          }
          function r(n, o) {
            var a = window.pageYOffset,
              i = {
                duration: o.duration,
                offset: o.offset || 0,
                callback: o.callback,
                easing: o.easing || h,
              },
              s =
                document.querySelector(
                  '[id="' + decodeURI(n).split('#').join('') + '"]'
                ) ||
                document.querySelector('[id="' + n.split('#').join('') + '"]'),
              l =
                typeof n == 'string'
                  ? i.offset +
                    (n
                      ? (s && s.getBoundingClientRect().top) || 0
                      : -(
                          document.documentElement.scrollTop ||
                          document.body.scrollTop
                        ))
                  : n,
              u = typeof i.duration == 'function' ? i.duration(l) : i.duration,
              c,
              d;
            requestAnimationFrame(function (g) {
              (c = g), y(g);
            });
            function y(g) {
              (d = g - c),
                window.scrollTo(0, i.easing(d, a, l, u)),
                d < u ? requestAnimationFrame(y) : f();
            }
            function f() {
              window.scrollTo(0, a + l),
                typeof i.callback == 'function' && i.callback();
            }
            function h(g, _, x, v) {
              return (
                (g /= v / 2),
                g < 1
                  ? (x / 2) * g * g + _
                  : (g--, (-x / 2) * (g * (g - 2) - 1) + _)
              );
            }
          }
        },
      }),
      zq = nr({
        '../../node_modules/tocbot/src/js/index.js'(e, t) {
          (function (r, n) {
            typeof define == 'function' && define.amd
              ? define([], n(r))
              : typeof e == 'object'
                ? (t.exports = n(r))
                : (r.tocbot = n(r));
          })(typeof window < 'u' ? window : window || window, function (r) {
            var n = qq(),
              o = {},
              a = {},
              i = Mq(),
              s = Uq(),
              l = Jq(),
              u,
              c,
              d =
                !!r &&
                !!r.document &&
                !!r.document.querySelector &&
                !!r.addEventListener;
            if (typeof window > 'u' && !d) return;
            var y,
              f = Object.prototype.hasOwnProperty;
            function h() {
              for (var v = {}, O = 0; O < arguments.length; O++) {
                var C = arguments[O];
                for (var I in C) f.call(C, I) && (v[I] = C[I]);
              }
              return v;
            }
            function g(v, O, C) {
              O || (O = 250);
              var I, P;
              return function () {
                var F = C || this,
                  D = +new Date(),
                  U = arguments;
                I && D < I + O
                  ? (clearTimeout(P),
                    (P = setTimeout(function () {
                      (I = D), v.apply(F, U);
                    }, O)))
                  : ((I = D), v.apply(F, U));
              };
            }
            function _(v) {
              try {
                return (
                  v.contentElement || document.querySelector(v.contentSelector)
                );
              } catch {
                return (
                  console.warn(
                    'Contents element not found: ' + v.contentSelector
                  ),
                  null
                );
              }
            }
            function x(v) {
              try {
                return v.tocElement || document.querySelector(v.tocSelector);
              } catch {
                return (
                  console.warn('TOC element not found: ' + v.tocSelector), null
                );
              }
            }
            return (
              (a.destroy = function () {
                var v = x(o);
                v !== null &&
                  (o.skipRendering || (v && (v.innerHTML = '')),
                  o.scrollContainer && document.querySelector(o.scrollContainer)
                    ? (document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          'scroll',
                          this._scrollListener,
                          !1
                        ),
                      document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          'resize',
                          this._scrollListener,
                          !1
                        ),
                      u &&
                        document
                          .querySelector(o.scrollContainer)
                          .removeEventListener(
                            'click',
                            this._clickListener,
                            !1
                          ))
                    : (document.removeEventListener(
                        'scroll',
                        this._scrollListener,
                        !1
                      ),
                      document.removeEventListener(
                        'resize',
                        this._scrollListener,
                        !1
                      ),
                      u &&
                        document.removeEventListener(
                          'click',
                          this._clickListener,
                          !1
                        )));
              }),
              (a.init = function (v) {
                if (d) {
                  (o = h(n, v || {})),
                    (this.options = o),
                    (this.state = {}),
                    o.scrollSmooth &&
                      ((o.duration = o.scrollSmoothDuration),
                      (o.offset = o.scrollSmoothOffset),
                      (a.scrollSmooth = $q().initSmoothScrolling(o))),
                    (u = i(o)),
                    (c = s(o)),
                    (this._buildHtml = u),
                    (this._parseContent = c),
                    (this._headingsArray = y),
                    a.destroy();
                  var O = _(o);
                  if (O !== null) {
                    var C = x(o);
                    if (
                      C !== null &&
                      ((y = c.selectHeadings(O, o.headingSelector)), y !== null)
                    ) {
                      var I = c.nestHeadingsArray(y),
                        P = I.nest;
                      if (!o.skipRendering) u.render(C, P);
                      else return this;
                      (this._scrollListener = g(function (D) {
                        u.updateToc(y), !o.disableTocScrollSync && l(o);
                        var U =
                          D &&
                          D.target &&
                          D.target.scrollingElement &&
                          D.target.scrollingElement.scrollTop === 0;
                        ((D &&
                          (D.eventPhase === 0 || D.currentTarget === null)) ||
                          U) &&
                          (u.updateToc(y),
                          o.scrollEndCallback && o.scrollEndCallback(D));
                      }, o.throttleTimeout)),
                        this._scrollListener(),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? (document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                'scroll',
                                this._scrollListener,
                                !1
                              ),
                            document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                'resize',
                                this._scrollListener,
                                !1
                              ))
                          : (document.addEventListener(
                              'scroll',
                              this._scrollListener,
                              !1
                            ),
                            document.addEventListener(
                              'resize',
                              this._scrollListener,
                              !1
                            ));
                      var F = null;
                      return (
                        (this._clickListener = g(function (D) {
                          o.scrollSmooth && u.disableTocAnimation(D),
                            u.updateToc(y),
                            F && clearTimeout(F),
                            (F = setTimeout(function () {
                              u.enableTocAnimation();
                            }, o.scrollSmoothDuration));
                        }, o.throttleTimeout)),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                'click',
                                this._clickListener,
                                !1
                              )
                          : document.addEventListener(
                              'click',
                              this._clickListener,
                              !1
                            ),
                        this
                      );
                    }
                  }
                }
              }),
              (a.refresh = function (v) {
                a.destroy(), a.init(v || this.options);
              }),
              (r.tocbot = a),
              a
            );
          });
        },
      }),
      Vq = W.div(Pr, ({ theme: e }) => ({
        backgroundColor:
          e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
        borderRadius: e.appBorderRadius,
        border: `1px dashed ${e.appBorderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: '25px 0 40px',
        color: ve(0.3, e.color.defaultText),
        fontSize: e.typography.size.s2,
      })),
      x2 = (e) =>
        E.createElement(Vq, {
          ...e,
          className: 'docblock-emptyblock sb-unstyled',
        }),
      Hq = W(so)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        lineHeight: '19px',
        margin: '25px 0 40px',
        borderRadius: e.appBorderRadius,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        'pre.prismjs': { padding: 20, background: 'inherit' },
      })),
      Gq = W.div(({ theme: e }) => ({
        background: e.background.content,
        borderRadius: e.appBorderRadius,
        border: `1px solid ${e.appBorderColor}`,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        margin: '25px 0 40px',
        padding: '20px 20px 20px 22px',
      })),
      xa = W.div(({ theme: e }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        height: 17,
        marginTop: 1,
        width: '60%',
        [`&:first-child${Fu}`]: { margin: 0 },
      })),
      Wq = () =>
        E.createElement(
          Gq,
          null,
          E.createElement(xa, null),
          E.createElement(xa, { style: { width: '80%' } }),
          E.createElement(xa, { style: { width: '30%' } }),
          E.createElement(xa, { style: { width: '80%' } })
        ),
      Kq = ({
        isLoading: e,
        error: t,
        language: r,
        code: n,
        dark: o,
        format: a = !1,
        ...i
      }) => {
        let { typography: s } = ni();
        if (e) return E.createElement(Wq, null);
        if (t) return E.createElement(x2, null, t);
        let l = E.createElement(
          Hq,
          {
            bordered: !0,
            copyable: !0,
            format: a,
            language: r,
            className: 'docblock-source sb-unstyled',
            ...i,
          },
          n
        );
        if (typeof o > 'u') return l;
        let u = o ? ri.dark : ri.light;
        return E.createElement(
          Ru,
          {
            theme: Du({ ...u, fontCode: s.fonts.mono, fontBase: s.fonts.base }),
          },
          l
        );
      },
      Ne = (e) =>
        `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
      Jl = 600;
    W.h1(Pr, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${Jl}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '16px',
      },
    }));
    W.h2(Pr, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${Jl}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: ve(0.25, e.color.defaultText),
    }));
    W.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': { marginTop: 0, paddingTop: 0 },
          '&:hover a.anchor': { textDecoration: 'none' },
          '& code': { fontSize: 'inherit' },
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light'
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === 'light'
              ? ve(0.1, e.color.defaultText)
              : ve(0.3, e.color.defaultText),
          backgroundColor:
            e.base === 'light' ? e.color.lighter : e.color.border,
        };
      return {
        maxWidth: 1e3,
        width: '100%',
        [Ne('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': { color: '#cc0000' },
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [Ne('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': { marginTop: 0 },
          '& > :last-child': { marginBottom: 0 },
        },
        [Ne('div')]: t,
        [Ne('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': { padding: 0 },
          '& dt > :first-of-type': { marginTop: 0 },
          '& dt > :last-child': { marginBottom: 0 },
          '& dd': { margin: '0 0 16px', padding: '0 15px' },
          '& dd > :first-of-type': { marginTop: 0 },
          '& dd > :last-child': { marginBottom: 0 },
        },
        [Ne('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [Ne('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [Ne('h3')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [Ne('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [Ne('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [Ne('h6')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [Ne('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [Ne('img')]: { maxWidth: '100%' },
        [Ne('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': { marginTop: '.25em' },
          '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
          '& code': n,
        },
        [Ne('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
        },
        [Ne('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [Ne('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: { color: 'inherit', fontSize: 'inherit' },
          },
          '& code': { whiteSpace: 'pre' },
          '& code, & tt': { border: 'none' },
        },
        [Ne('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': { display: 'block', float: 'left' },
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': { margin: '0 auto', textAlign: 'center' },
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': { margin: 0, textAlign: 'right' },
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': { margin: '13px 0 0' },
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [Ne('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor:
              e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
          '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
        },
        [Ne('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
          listStyle: 'disc',
        },
      };
    });
    W.div(({ theme: e }) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      gap: '3rem',
      [`@media (min-width: ${Jl}px)`]: {},
    }));
    var ka = (e) => ({
        borderRadius: e.appBorderRadius,
        background: e.background.content,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        border: `1px solid ${e.appBorderColor}`,
      }),
      Yq = W(Ua)({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        transition: 'transform .2s linear',
      }),
      Xq = W.div({ display: 'flex', alignItems: 'center', gap: 4 }),
      Qq = W.div(({ theme: e }) => ({
        width: 14,
        height: 14,
        borderRadius: 2,
        margin: '0 7px',
        backgroundColor: e.appBorderColor,
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      })),
      Zq = ({
        isLoading: e,
        storyId: t,
        baseUrl: r,
        zoom: n,
        resetZoom: o,
        ...a
      }) =>
        E.createElement(
          Yq,
          { ...a },
          E.createElement(
            Xq,
            { key: 'left' },
            e
              ? [1, 2, 3].map((i) => E.createElement(Qq, { key: i }))
              : E.createElement(
                  E.Fragment,
                  null,
                  E.createElement(
                    ht,
                    {
                      key: 'zoomin',
                      onClick: (i) => {
                        i.preventDefault(), n(0.8);
                      },
                      title: 'Zoom in',
                    },
                    E.createElement(Vu, null)
                  ),
                  E.createElement(
                    ht,
                    {
                      key: 'zoomout',
                      onClick: (i) => {
                        i.preventDefault(), n(1.25);
                      },
                      title: 'Zoom out',
                    },
                    E.createElement(Hu, null)
                  ),
                  E.createElement(
                    ht,
                    {
                      key: 'zoomreset',
                      onClick: (i) => {
                        i.preventDefault(), o();
                      },
                      title: 'Reset zoom',
                    },
                    E.createElement(Gu, null)
                  )
                )
          )
        ),
      eM = vn({ scale: 1 });
    W.strong(({ theme: e }) => ({ color: e.color.orange }));
    var tM = W.div(
        ({ isColumn: e, columns: t, layout: r }) => ({
          display: e || !t ? 'block' : 'flex',
          position: 'relative',
          flexWrap: 'wrap',
          overflow: 'auto',
          flexDirection: e ? 'column' : 'row',
          '& .innerZoomElementWrapper > *': e
            ? {
                width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'block',
              }
            : {
                maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'inline-block',
              },
        }),
        ({ layout: e = 'padded' }) =>
          e === 'centered' || e === 'padded'
            ? {
                padding: '30px 20px',
                '& .innerZoomElementWrapper > *': {
                  width: 'auto',
                  border: '10px solid transparent!important',
                },
              }
            : {},
        ({ layout: e = 'padded' }) =>
          e === 'centered'
            ? {
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }
            : {},
        ({ columns: e }) =>
          e && e > 1
            ? {
                '.innerZoomElementWrapper > *': {
                  minWidth: `calc(100% / ${e} - 20px)`,
                },
              }
            : {}
      ),
      Ev = W(Kq)(({ theme: e }) => ({
        margin: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: e.appBorderRadius,
        borderBottomRightRadius: e.appBorderRadius,
        border: 'none',
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : vt(0.05, e.background.content),
        color: e.color.lightest,
        button: {
          background:
            e.base === 'light'
              ? 'rgba(0, 0, 0, 0.85)'
              : vt(0.05, e.background.content),
        },
      })),
      rM = W.div(
        ({ theme: e, withSource: t, isExpanded: r }) => ({
          position: 'relative',
          overflow: 'hidden',
          margin: '25px 0 40px',
          ...ka(e),
          borderBottomLeftRadius: t && r && 0,
          borderBottomRightRadius: t && r && 0,
          borderBottomWidth: r && 0,
          'h3 + &': { marginTop: '16px' },
        }),
        ({ withToolbar: e }) => e && { paddingTop: 40 }
      ),
      nM = (e, t, r) => {
        switch (!0) {
          case !!(e && e.error):
            return {
              source: null,
              actionItem: {
                title: 'No code available',
                className:
                  'docblock-code-toggle docblock-code-toggle--disabled',
                disabled: !0,
                onClick: () => r(!1),
              },
            };
          case t:
            return {
              source: E.createElement(Ev, { ...e, dark: !0 }),
              actionItem: {
                title: 'Hide code',
                className:
                  'docblock-code-toggle docblock-code-toggle--expanded',
                onClick: () => r(!1),
              },
            };
          default:
            return {
              source: E.createElement(Ev, { ...e, dark: !0 }),
              actionItem: {
                title: 'Show code',
                className: 'docblock-code-toggle',
                onClick: () => r(!0),
              },
            };
        }
      };
    function oM(e) {
      if (Ql.count(e) === 1) {
        let t = e;
        if (t.props) return t.props.id;
      }
      return null;
    }
    var aM = W(Zq)({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
      }),
      iM = W.div({ overflow: 'hidden', position: 'relative' }),
      sM = ({
        isLoading: e,
        isColumn: t,
        columns: r,
        children: n,
        withSource: o,
        withToolbar: a = !1,
        isExpanded: i = !1,
        additionalActions: s,
        className: l,
        layout: u = 'padded',
        ...c
      }) => {
        let [d, y] = he(i),
          { source: f, actionItem: h } = nM(o, d, y),
          [g, _] = he(1),
          x = [l].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
          v = o ? [h] : [],
          [O, C] = he(s ? [...s] : []),
          I = [...v, ...O],
          { window: P } = xt,
          F = $e(async (U) => {
            let { createCopyToClipboardFunction: G } =
              await Promise.resolve().then(() => (lo(), au));
            G();
          }, []),
          D = (U) => {
            let G = P.getSelection();
            (G && G.type === 'Range') ||
              (U.preventDefault(),
              O.filter((X) => X.title === 'Copied').length === 0 &&
                F(f.props.code).then(() => {
                  C([...O, { title: 'Copied', onClick: () => {} }]),
                    P.setTimeout(
                      () => C(O.filter((X) => X.title !== 'Copied')),
                      1500
                    );
                }));
          };
        return E.createElement(
          rM,
          { withSource: o, withToolbar: a, ...c, className: x.join(' ') },
          a &&
            E.createElement(aM, {
              isLoading: e,
              border: !0,
              zoom: (U) => _(g * U),
              resetZoom: () => _(1),
              storyId: oM(n),
              baseUrl: './iframe.html',
            }),
          E.createElement(
            eM.Provider,
            { value: { scale: g } },
            E.createElement(
              iM,
              { className: 'docs-story', onCopyCapture: o && D },
              E.createElement(
                tM,
                { isColumn: t || !Array.isArray(n), columns: r, layout: u },
                E.createElement(
                  Ha.Element,
                  { scale: g },
                  Array.isArray(n)
                    ? n.map((U, G) => E.createElement('div', { key: G }, U))
                    : E.createElement('div', null, n)
                )
              ),
              E.createElement(Na, { actionItems: I })
            )
          ),
          o && d && f
        );
      };
    W(sM)(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } }));
    var lM = W.table(({ theme: e }) => ({
        '&&': {
          borderCollapse: 'collapse',
          borderSpacing: 0,
          border: 'none',
          tr: { border: 'none !important', background: 'none' },
          'td, th': { padding: 0, border: 'none', width: 'auto!important' },
          marginTop: 0,
          marginBottom: 0,
          'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
          'th:last-of-type, td:last-of-type': { paddingRight: 0 },
          td: {
            paddingTop: 0,
            paddingBottom: 4,
            '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
          },
          tbody: { boxShadow: 'none', border: 'none' },
          code: Ir({ theme: e }),
          div: { span: { fontWeight: 'bold' } },
          '& code': {
            margin: 0,
            display: 'inline-block',
            fontSize: e.typography.size.s1,
          },
        },
      })),
      uM = ({ tags: e }) => {
        let t = (e.params || []).filter((a) => a.description),
          r = t.length !== 0,
          n = e.deprecated != null,
          o = e.returns != null && e.returns.description != null;
        return !r && !o && !n
          ? null
          : E.createElement(
              E.Fragment,
              null,
              E.createElement(
                lM,
                null,
                E.createElement(
                  'tbody',
                  null,
                  n &&
                    E.createElement(
                      'tr',
                      { key: 'deprecated' },
                      E.createElement(
                        'td',
                        { colSpan: 2 },
                        E.createElement('strong', null, 'Deprecated'),
                        ': ',
                        e.deprecated.toString()
                      )
                    ),
                  r &&
                    t.map((a) =>
                      E.createElement(
                        'tr',
                        { key: a.name },
                        E.createElement(
                          'td',
                          null,
                          E.createElement('code', null, a.name)
                        ),
                        E.createElement('td', null, a.description)
                      )
                    ),
                  o &&
                    E.createElement(
                      'tr',
                      { key: 'returns' },
                      E.createElement(
                        'td',
                        null,
                        E.createElement('code', null, 'Returns')
                      ),
                      E.createElement('td', null, e.returns.description)
                    )
                )
              )
            );
      },
      Dl = 8,
      wv = W.div(({ isExpanded: e }) => ({
        display: 'flex',
        flexDirection: e ? 'column' : 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: '-4px',
        minWidth: 100,
      })),
      cM = W.span(Ir, ({ theme: e, simple: t = !1 }) => ({
        flex: '0 0 auto',
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        maxWidth: '100%',
        margin: 0,
        marginRight: '4px',
        marginBottom: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
        lineHeight: '13px',
        ...(t && {
          background: 'transparent',
          border: '0 none',
          paddingLeft: 0,
        }),
      })),
      pM = W.button(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        marginBottom: '4px',
        background: 'none',
        border: 'none',
      })),
      dM = W.div(Ir, ({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        fontSize: e.typography.size.s1,
        margin: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
      })),
      fM = W.div(({ theme: e, width: t }) => ({
        width: t,
        minWidth: 200,
        maxWidth: 800,
        padding: 15,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        boxSizing: 'content-box',
        '& code': { padding: '0 !important' },
      })),
      yM = W(Lu)({ marginLeft: 4 }),
      hM = W(ii)({ marginLeft: 4 }),
      mM = () => E.createElement('span', null, '-'),
      E2 = ({ text: e, simple: t }) => E.createElement(cM, { simple: t }, e),
      gM = (0, DB.default)(1e3)((e) => {
        let t = e.split(/\r?\n/);
        return `${Math.max(...t.map((r) => r.length))}ch`;
      }),
      bM = (e) => {
        if (!e) return [e];
        let t = e.split('|').map((r) => r.trim());
        return (0, Bv.default)(t);
      },
      Sv = (e, t = !0) => {
        let r = e;
        return (
          t || (r = e.slice(0, Dl)),
          r.map((n) =>
            E.createElement(E2, { key: n, text: n === '' ? '""' : n })
          )
        );
      },
      vM = ({ value: e, initialExpandedArgs: t }) => {
        let { summary: r, detail: n } = e,
          [o, a] = he(!1),
          [i, s] = he(t || !1);
        if (r == null) return null;
        let l = typeof r.toString == 'function' ? r.toString() : r;
        if (n == null) {
          if (/[(){}[\]<>]/.test(l)) return E.createElement(E2, { text: l });
          let u = bM(l),
            c = u.length;
          return c > Dl
            ? E.createElement(
                wv,
                { isExpanded: i },
                Sv(u, i),
                E.createElement(
                  pM,
                  { onClick: () => s(!i) },
                  i ? 'Show less...' : `Show ${c - Dl} more...`
                )
              )
            : E.createElement(wv, null, Sv(u));
        }
        return E.createElement(
          Va,
          {
            closeOnOutsideClick: !0,
            placement: 'bottom',
            visible: o,
            onVisibleChange: (u) => {
              a(u);
            },
            tooltip: E.createElement(
              fM,
              { width: gM(n) },
              E.createElement(so, { language: 'jsx', format: !1 }, n)
            ),
          },
          E.createElement(
            dM,
            { className: 'sbdocs-expandable' },
            E.createElement('span', null, l),
            o ? E.createElement(yM, null) : E.createElement(hM, null)
          )
        );
      },
      Sl = ({ value: e, initialExpandedArgs: t }) =>
        e == null
          ? E.createElement(mM, null)
          : E.createElement(vM, { value: e, initialExpandedArgs: t }),
      xM = W.label(({ theme: e }) => ({
        lineHeight: '18px',
        alignItems: 'center',
        marginBottom: 8,
        display: 'inline-block',
        position: 'relative',
        whiteSpace: 'nowrap',
        background: e.boolean.background,
        borderRadius: '3em',
        padding: 1,
        '&[aria-disabled="true"]': {
          opacity: 0.5,
          input: { cursor: 'not-allowed' },
        },
        input: {
          appearance: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          margin: 0,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '3em',
          '&:focus': {
            outline: 'none',
            boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
          },
        },
        span: {
          textAlign: 'center',
          fontSize: e.typography.size.s1,
          fontWeight: e.typography.weight.bold,
          lineHeight: '1',
          cursor: 'pointer',
          display: 'inline-block',
          padding: '7px 15px',
          transition: 'all 100ms ease-out',
          userSelect: 'none',
          borderRadius: '3em',
          color: ve(0.5, e.color.defaultText),
          background: 'transparent',
          '&:hover': {
            boxShadow: `${va(0.3, e.appBorderColor)} 0 0 0 1px inset`,
          },
          '&:active': {
            boxShadow: `${va(0.05, e.appBorderColor)} 0 0 0 2px inset`,
            color: va(1, e.appBorderColor),
          },
          '&:first-of-type': { paddingRight: 8 },
          '&:last-of-type': { paddingLeft: 8 },
        },
        'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
          {
            background: e.boolean.selectedBackground,
            boxShadow:
              e.base === 'light'
                ? `${va(0.1, e.appBorderColor)} 0 0 2px`
                : `${e.appBorderColor} 0 0 0 1px`,
            color: e.color.defaultText,
            padding: '7px 15px',
          },
      })),
      EM = (e) => e === 'true',
      wM = ({
        name: e,
        value: t,
        onChange: r,
        onBlur: n,
        onFocus: o,
        argType: a,
      }) => {
        let i = $e(() => r(!1), [r]),
          s = !!a?.table?.readonly;
        if (t === void 0)
          return E.createElement(
            Bt,
            {
              variant: 'outline',
              size: 'medium',
              id: bn(e),
              onClick: i,
              disabled: s,
            },
            'Set boolean'
          );
        let l = tt(e),
          u = typeof t == 'string' ? EM(t) : t;
        return E.createElement(
          xM,
          { 'aria-disabled': s, htmlFor: l, 'aria-label': e },
          E.createElement('input', {
            id: l,
            type: 'checkbox',
            onChange: (c) => r(c.target.checked),
            checked: u,
            role: 'switch',
            disabled: s,
            name: e,
            onBlur: n,
            onFocus: o,
          }),
          E.createElement('span', { 'aria-hidden': 'true' }, 'False'),
          E.createElement('span', { 'aria-hidden': 'true' }, 'True')
        );
      },
      SM = (e) => {
        let [t, r, n] = e.split('-'),
          o = new Date();
        return (
          o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)),
          o
        );
      },
      AM = (e) => {
        let [t, r] = e.split(':'),
          n = new Date();
        return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
      },
      TM = (e) => {
        let t = new Date(e),
          r = `000${t.getFullYear()}`.slice(-4),
          n = `0${t.getMonth() + 1}`.slice(-2),
          o = `0${t.getDate()}`.slice(-2);
        return `${r}-${n}-${o}`;
      },
      CM = (e) => {
        let t = new Date(e),
          r = `0${t.getHours()}`.slice(-2),
          n = `0${t.getMinutes()}`.slice(-2);
        return `${r}:${n}`;
      },
      Av = W(dt.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })),
      _M = W.div(({ theme: e }) => ({
        flex: 1,
        display: 'flex',
        input: {
          marginLeft: 10,
          flex: 1,
          height: 32,
          '&::-webkit-calendar-picker-indicator': {
            opacity: 0.5,
            height: 12,
            filter: e.base === 'light' ? void 0 : 'invert(1)',
          },
        },
        'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
        'input:last-of-type': { flexGrow: 3 },
      })),
      OM = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: o,
        argType: a,
      }) => {
        let [i, s] = he(!0),
          l = Xe(),
          u = Xe(),
          c = !!a?.table?.readonly;
        ze(() => {
          i !== !1 &&
            (l && l.current && (l.current.value = t ? TM(t) : ''),
            u && u.current && (u.current.value = t ? CM(t) : ''));
        }, [t]);
        let d = (h) => {
            if (!h.target.value) return r();
            let g = SM(h.target.value),
              _ = new Date(t);
            _.setFullYear(g.getFullYear(), g.getMonth(), g.getDate());
            let x = _.getTime();
            x && r(x), s(!!x);
          },
          y = (h) => {
            if (!h.target.value) return r();
            let g = AM(h.target.value),
              _ = new Date(t);
            _.setHours(g.getHours()), _.setMinutes(g.getMinutes());
            let x = _.getTime();
            x && r(x), s(!!x);
          },
          f = tt(e);
        return E.createElement(
          _M,
          null,
          E.createElement(Av, {
            type: 'date',
            max: '9999-12-31',
            ref: l,
            id: `${f}-date`,
            name: `${f}-date`,
            readOnly: c,
            onChange: d,
            onFocus: n,
            onBlur: o,
          }),
          E.createElement(Av, {
            type: 'time',
            id: `${f}-time`,
            name: `${f}-time`,
            ref: u,
            onChange: y,
            readOnly: c,
            onFocus: n,
            onBlur: o,
          }),
          i ? null : E.createElement('div', null, 'invalid')
        );
      },
      IM = W.label({ display: 'flex' }),
      PM = (e) => {
        let t = parseFloat(e);
        return Number.isNaN(t) ? void 0 : t;
      },
      kM = W(dt.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })),
      RM = ({
        name: e,
        value: t,
        onChange: r,
        min: n,
        max: o,
        step: a,
        onBlur: i,
        onFocus: s,
        argType: l,
      }) => {
        let [u, c] = he(typeof t == 'number' ? t : ''),
          [d, y] = he(!1),
          [f, h] = he(null),
          g = !!l?.table?.readonly,
          _ = $e(
            (O) => {
              c(O.target.value);
              let C = parseFloat(O.target.value);
              Number.isNaN(C)
                ? h(new Error(`'${O.target.value}' is not a number`))
                : (r(C), h(null));
            },
            [r, h]
          ),
          x = $e(() => {
            c('0'), r(0), y(!0);
          }, [y]),
          v = Xe(null);
        return (
          ze(() => {
            d && v.current && v.current.select();
          }, [d]),
          ze(() => {
            u !== (typeof t == 'number' ? t : '') && c(t);
          }, [t]),
          t === void 0
            ? E.createElement(
                Bt,
                {
                  variant: 'outline',
                  size: 'medium',
                  id: bn(e),
                  onClick: x,
                  disabled: g,
                },
                'Set number'
              )
            : E.createElement(
                IM,
                null,
                E.createElement(kM, {
                  ref: v,
                  id: tt(e),
                  type: 'number',
                  onChange: _,
                  size: 'flex',
                  placeholder: 'Edit number...',
                  value: u,
                  valid: f ? 'error' : null,
                  autoFocus: d,
                  readOnly: g,
                  name: e,
                  min: n,
                  max: o,
                  step: a,
                  onFocus: s,
                  onBlur: i,
                })
              )
        );
      },
      w2 = (e, t) => {
        let r = t && Object.entries(t).find(([n, o]) => o === e);
        return r ? r[0] : void 0;
      },
      Fl = (e, t) =>
        e && t
          ? Object.entries(t)
              .filter((r) => e.includes(r[1]))
              .map((r) => r[0])
          : [],
      S2 = (e, t) => e && t && e.map((r) => t[r]),
      DM = W.div(
        ({ isInline: e }) =>
          e
            ? {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                label: { display: 'inline-flex', marginRight: 15 },
              }
            : { label: { display: 'flex' } },
        (e) => {
          if (e['aria-readonly'] === 'true')
            return { input: { cursor: 'not-allowed' } };
        }
      ),
      FM = W.span({ '[aria-readonly=true] &': { opacity: 0.5 } }),
      jM = W.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      Tv = ({
        name: e,
        options: t,
        value: r,
        onChange: n,
        isInline: o,
        argType: a,
      }) => {
        if (!t)
          return (
            Bo.warn(`Checkbox with no options: ${e}`),
            E.createElement(E.Fragment, null, '-')
          );
        let i = Fl(r, t),
          [s, l] = he(i),
          u = !!a?.table?.readonly,
          c = (y) => {
            let f = y.target.value,
              h = [...s];
            h.includes(f) ? h.splice(h.indexOf(f), 1) : h.push(f),
              n(S2(h, t)),
              l(h);
          };
        ze(() => {
          l(Fl(r, t));
        }, [r]);
        let d = tt(e);
        return E.createElement(
          DM,
          { 'aria-readonly': u, isInline: o },
          Object.keys(t).map((y, f) => {
            let h = `${d}-${f}`;
            return E.createElement(
              jM,
              { key: h, htmlFor: h },
              E.createElement('input', {
                type: 'checkbox',
                disabled: u,
                id: h,
                name: h,
                value: y,
                onChange: c,
                checked: s?.includes(y),
              }),
              E.createElement(FM, null, y)
            );
          })
        );
      },
      NM = W.div(
        ({ isInline: e }) =>
          e
            ? {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                label: { display: 'inline-flex', marginRight: 15 },
              }
            : { label: { display: 'flex' } },
        (e) => {
          if (e['aria-readonly'] === 'true')
            return { input: { cursor: 'not-allowed' } };
        }
      ),
      BM = W.span({ '[aria-readonly=true] &': { opacity: 0.5 } }),
      LM = W.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      Cv = ({
        name: e,
        options: t,
        value: r,
        onChange: n,
        isInline: o,
        argType: a,
      }) => {
        if (!t)
          return (
            Bo.warn(`Radio with no options: ${e}`),
            E.createElement(E.Fragment, null, '-')
          );
        let i = w2(r, t),
          s = tt(e),
          l = !!a?.table?.readonly;
        return E.createElement(
          NM,
          { 'aria-readonly': l, isInline: o },
          Object.keys(t).map((u, c) => {
            let d = `${s}-${c}`;
            return E.createElement(
              LM,
              { key: d, htmlFor: d },
              E.createElement('input', {
                type: 'radio',
                id: d,
                name: s,
                disabled: l,
                value: u,
                onChange: (y) => n(t[y.currentTarget.value]),
                checked: u === i,
              }),
              E.createElement(BM, null, u)
            );
          })
        );
      },
      qM = {
        appearance: 'none',
        border: '0 none',
        boxSizing: 'inherit',
        display: ' block',
        margin: ' 0',
        background: 'transparent',
        padding: 0,
        fontSize: 'inherit',
        position: 'relative',
      },
      A2 = W.select(qM, ({ theme: e }) => ({
        boxSizing: 'border-box',
        position: 'relative',
        padding: '6px 10px',
        width: '100%',
        color: e.input.color || 'inherit',
        background: e.input.background,
        borderRadius: e.input.borderRadius,
        boxShadow: `${e.input.border} 0 0 0 1px inset`,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '20px',
        '&:focus': {
          boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
          outline: 'none',
        },
        '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
        '::placeholder': { color: e.textMutedColor },
        '&[multiple]': {
          overflow: 'auto',
          padding: 0,
          option: {
            display: 'block',
            padding: '6px 10px',
            marginLeft: 1,
            marginRight: 1,
          },
        },
      })),
      T2 = W.span(({ theme: e }) => ({
        display: 'inline-block',
        lineHeight: 'normal',
        overflow: 'hidden',
        position: 'relative',
        verticalAlign: 'top',
        width: '100%',
        svg: {
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
          height: '12px',
          marginTop: '-6px',
          right: '12px',
          top: '50%',
          fill: e.textMutedColor,
          path: { fill: e.textMutedColor },
        },
      })),
      _v = 'Choose option...',
      MM = ({ name: e, value: t, options: r, onChange: n, argType: o }) => {
        let a = (u) => {
            n(r[u.currentTarget.value]);
          },
          i = w2(t, r) || _v,
          s = tt(e),
          l = !!o?.table?.readonly;
        return E.createElement(
          T2,
          null,
          E.createElement(ii, null),
          E.createElement(
            A2,
            { disabled: l, id: s, value: i, onChange: a },
            E.createElement(
              'option',
              { key: 'no-selection', disabled: !0 },
              _v
            ),
            Object.keys(r).map((u) =>
              E.createElement('option', { key: u, value: u }, u)
            )
          )
        );
      },
      UM = ({ name: e, value: t, options: r, onChange: n, argType: o }) => {
        let a = (u) => {
            let c = Array.from(u.currentTarget.options)
              .filter((d) => d.selected)
              .map((d) => d.value);
            n(S2(c, r));
          },
          i = Fl(t, r),
          s = tt(e),
          l = !!o?.table?.readonly;
        return E.createElement(
          T2,
          null,
          E.createElement(
            A2,
            { disabled: l, id: s, multiple: !0, value: i, onChange: a },
            Object.keys(r).map((u) =>
              E.createElement('option', { key: u, value: u }, u)
            )
          )
        );
      },
      Ov = (e) => {
        let { name: t, options: r } = e;
        return r
          ? e.isMulti
            ? E.createElement(UM, { ...e })
            : E.createElement(MM, { ...e })
          : (Bo.warn(`Select with no options: ${t}`),
            E.createElement(E.Fragment, null, '-'));
      },
      JM = (e, t) =>
        Array.isArray(e)
          ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
          : e,
      $M = {
        check: Tv,
        'inline-check': Tv,
        radio: Cv,
        'inline-radio': Cv,
        select: Ov,
        'multi-select': Ov,
      },
      Zr = (e) => {
        let { type: t = 'select', labels: r, argType: n } = e,
          o = {
            ...e,
            argType: n,
            options: n ? JM(n.options, r) : {},
            isInline: t.includes('inline'),
            isMulti: t.includes('multi'),
          },
          a = $M[t];
        if (a) return E.createElement(a, { ...o });
        throw new Error(`Unknown options type: ${t}`);
      },
      $l = 'value',
      zM = 'key',
      VM = 'Error',
      HM = 'Object',
      GM = 'Array',
      WM = 'String',
      KM = 'Number',
      YM = 'Boolean',
      XM = 'Date',
      QM = 'Null',
      ZM = 'Undefined',
      e4 = 'Function',
      t4 = 'Symbol',
      C2 = 'ADD_DELTA_TYPE',
      _2 = 'REMOVE_DELTA_TYPE',
      O2 = 'UPDATE_DELTA_TYPE';
    function vr(e) {
      return e !== null &&
        typeof e == 'object' &&
        !Array.isArray(e) &&
        typeof e[Symbol.iterator] == 'function'
        ? 'Iterable'
        : Object.prototype.toString.call(e).slice(8, -1);
    }
    function I2(e, t) {
      let r = vr(e),
        n = vr(t);
      return (r === 'Function' || n === 'Function') && n !== r;
    }
    var zl = class extends jt {
      constructor(e) {
        super(e),
          (this.state = { inputRefKey: null, inputRefValue: null }),
          (this.refInputValue = this.refInputValue.bind(this)),
          (this.refInputKey = this.refInputKey.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this)),
          (this.onSubmit = this.onSubmit.bind(this));
      }
      componentDidMount() {
        let { inputRefKey: e, inputRefValue: t } = this.state,
          { onlyValue: r } = this.props;
        e && typeof e.focus == 'function' && e.focus(),
          r && t && typeof t.focus == 'function' && t.focus(),
          document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.onSubmit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.props.handleCancel()));
      }
      onSubmit() {
        let {
            handleAdd: e,
            onlyValue: t,
            onSubmitValueParser: r,
            keyPath: n,
            deep: o,
          } = this.props,
          { inputRefKey: a, inputRefValue: i } = this.state,
          s = {};
        if (!t) {
          if (!a.value) return;
          s.key = a.value;
        }
        (s.newValue = r(!1, n, o, s.key, i.value)), e(s);
      }
      refInputKey(e) {
        this.state.inputRefKey = e;
      }
      refInputValue(e) {
        this.state.inputRefValue = e;
      }
      render() {
        let {
            handleCancel: e,
            onlyValue: t,
            addButtonElement: r,
            cancelButtonElement: n,
            inputElementGenerator: o,
            keyPath: a,
            deep: i,
          } = this.props,
          s = Oe(r, { onClick: this.onSubmit }),
          l = Oe(n, { onClick: e }),
          u = o($l, a, i),
          c = Oe(u, { placeholder: 'Value', ref: this.refInputValue }),
          d = null;
        if (!t) {
          let y = o(zM, a, i);
          d = Oe(y, { placeholder: 'Key', ref: this.refInputKey });
        }
        return E.createElement(
          'span',
          { className: 'rejt-add-value-node' },
          d,
          c,
          l,
          s
        );
      }
    };
    zl.defaultProps = {
      onlyValue: !1,
      addButtonElement: E.createElement('button', null, '+'),
      cancelButtonElement: E.createElement('button', null, 'c'),
    };
    var P2 = class extends jt {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: o } = this.props,
          a = n.length;
        o(n[a - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleRemoveItem(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: o, nextDeep: a } = this.state,
            i = n[e];
          t(e, o, a, i)
            .then(() => {
              let s = { keyPath: o, deep: a, key: e, oldValue: i, type: _2 };
              n.splice(e, 1), this.setState({ data: n });
              let { onUpdate: l, onDeltaUpdate: u } = this.props;
              l(o[o.length - 1], n), u(s);
            })
            .catch(r.error);
        };
      }
      handleAddValueAdd({ newValue: e }) {
        let { data: t, keyPath: r, nextDeep: n } = this.state,
          { beforeAddAction: o, logger: a } = this.props;
        o(t.length, r, n, e)
          .then(() => {
            let i = [...t, e];
            this.setState({ data: i }), this.handleAddValueCancel();
            let { onUpdate: s, onDeltaUpdate: l } = this.props;
            s(r[r.length - 1], i),
              l({
                type: C2,
                keyPath: r,
                deep: n,
                key: i.length - 1,
                newValue: e,
              });
          })
          .catch(a.error);
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: o } = this.props,
            { data: a, keyPath: i, nextDeep: s } = this.state,
            l = a[e];
          o(e, i, s, l, t)
            .then(() => {
              (a[e] = t), this.setState({ data: a });
              let { onUpdate: u, onDeltaUpdate: c } = this.props;
              u(i[i.length - 1], a),
                c({
                  type: O2,
                  keyPath: i,
                  deep: s,
                  key: e,
                  newValue: t,
                  oldValue: l,
                }),
                r(void 0);
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, data: t, keyPath: r, deep: n } = this.state,
          {
            handleRemove: o,
            readOnly: a,
            getStyle: i,
            dataType: s,
            minusMenuElement: l,
          } = this.props,
          { minus: u, collapsed: c } = i(e, t, r, n, s),
          d = a(e, t, r, n, s),
          y = Oe(l, { onClick: o, className: 'rejt-minus-menu', style: u });
        return E.createElement(
          'span',
          { className: 'rejt-collapsed' },
          E.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: c,
              onClick: this.handleCollapseMode,
            },
            '[...] ',
            t.length,
            ' ',
            t.length === 1 ? 'item' : 'items'
          ),
          !d && y
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            addFormVisible: o,
            nextDeep: a,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: s,
            onDeltaUpdate: l,
            readOnly: u,
            getStyle: c,
            dataType: d,
            addButtonElement: y,
            cancelButtonElement: f,
            editButtonElement: h,
            inputElementGenerator: g,
            textareaElementGenerator: _,
            minusMenuElement: x,
            plusMenuElement: v,
            beforeRemoveAction: O,
            beforeAddAction: C,
            beforeUpdateAction: I,
            logger: P,
            onSubmitValueParser: F,
          } = this.props,
          {
            minus: D,
            plus: U,
            delimiter: G,
            ul: X,
            addForm: Q,
          } = c(e, t, r, n, d),
          V = u(e, t, r, n, d),
          R = Oe(v, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: U,
          }),
          q = Oe(x, { onClick: s, className: 'rejt-minus-menu', style: D });
        return E.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          E.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: G },
            '['
          ),
          !o && R,
          E.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: X },
            t.map((M, Y) =>
              E.createElement(Ra, {
                key: Y,
                name: Y.toString(),
                data: M,
                keyPath: r,
                deep: a,
                isCollapsed: i,
                handleRemove: this.handleRemoveItem(Y),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: l,
                readOnly: u,
                getStyle: c,
                addButtonElement: y,
                cancelButtonElement: f,
                editButtonElement: h,
                inputElementGenerator: g,
                textareaElementGenerator: _,
                minusMenuElement: x,
                plusMenuElement: v,
                beforeRemoveAction: O,
                beforeAddAction: C,
                beforeUpdateAction: I,
                logger: P,
                onSubmitValueParser: F,
              })
            )
          ),
          !V &&
            o &&
            E.createElement(
              'div',
              { className: 'rejt-add-form', style: Q },
              E.createElement(zl, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: !0,
                addButtonElement: y,
                cancelButtonElement: f,
                inputElementGenerator: g,
                keyPath: r,
                deep: n,
                onSubmitValueParser: F,
              })
            ),
          E.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: G },
            ']'
          ),
          !V && q
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: o,
          } = this.state,
          { dataType: a, getStyle: i } = this.props,
          s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          l = i(e, r, n, o, a);
        return E.createElement(
          'div',
          { className: 'rejt-array-node' },
          E.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            E.createElement(
              'span',
              { className: 'rejt-name', style: l.name },
              e,
              ' :',
              ' '
            )
          ),
          s
        );
      }
    };
    P2.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: E.createElement('span', null, ' - '),
      plusMenuElement: E.createElement('span', null, ' + '),
    };
    var k2 = class extends jt {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: o,
            deep: a,
          } = this.state,
          { readOnly: i, dataType: s } = this.props,
          l = i(r, n, o, a, s);
        e && !l && typeof t.focus == 'function' && t.focus();
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: o,
          } = this.props,
          { inputRef: a, name: i, deep: s } = this.state;
        if (!a) return;
        let l = n(!0, o, s, i, a.value);
        e({ value: l, key: i })
          .then(() => {
            I2(t, l) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: o,
          } = this.state,
          {
            handleRemove: a,
            originalValue: i,
            readOnly: s,
            dataType: l,
            getStyle: u,
            editButtonElement: c,
            cancelButtonElement: d,
            textareaElementGenerator: y,
            minusMenuElement: f,
            keyPath: h,
          } = this.props,
          g = u(e, i, n, o, l),
          _ = null,
          x = null,
          v = s(e, i, n, o, l);
        if (r && !v) {
          let O = y($l, h, o, e, i, l),
            C = Oe(c, { onClick: this.handleEdit }),
            I = Oe(d, { onClick: this.handleCancelEdit }),
            P = Oe(O, { ref: this.refInput, defaultValue: i });
          (_ = E.createElement(
            'span',
            { className: 'rejt-edit-form', style: g.editForm },
            P,
            ' ',
            I,
            C
          )),
            (x = null);
        } else {
          _ = E.createElement(
            'span',
            {
              className: 'rejt-value',
              style: g.value,
              onClick: v ? null : this.handleEditMode,
            },
            t
          );
          let O = Oe(f, {
            onClick: a,
            className: 'rejt-minus-menu',
            style: g.minus,
          });
          x = v ? null : O;
        }
        return E.createElement(
          'li',
          { className: 'rejt-function-value-node', style: g.li },
          E.createElement(
            'span',
            { className: 'rejt-name', style: g.name },
            e,
            ' :',
            ' '
          ),
          _,
          x
        );
      }
    };
    k2.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => {},
      editButtonElement: E.createElement('button', null, 'e'),
      cancelButtonElement: E.createElement('button', null, 'c'),
      minusMenuElement: E.createElement('span', null, ' - '),
    };
    var Ra = class extends jt {
      constructor(e) {
        super(e),
          (this.state = {
            data: e.data,
            name: e.name,
            keyPath: e.keyPath,
            deep: e.deep,
          });
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      render() {
        let { data: e, name: t, keyPath: r, deep: n } = this.state,
          {
            isCollapsed: o,
            handleRemove: a,
            handleUpdateValue: i,
            onUpdate: s,
            onDeltaUpdate: l,
            readOnly: u,
            getStyle: c,
            addButtonElement: d,
            cancelButtonElement: y,
            editButtonElement: f,
            inputElementGenerator: h,
            textareaElementGenerator: g,
            minusMenuElement: _,
            plusMenuElement: x,
            beforeRemoveAction: v,
            beforeAddAction: O,
            beforeUpdateAction: C,
            logger: I,
            onSubmitValueParser: P,
          } = this.props,
          F = () => !0,
          D = vr(e);
        switch (D) {
          case VM:
            return E.createElement(jl, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: a,
              onUpdate: s,
              onDeltaUpdate: l,
              readOnly: F,
              dataType: D,
              getStyle: c,
              addButtonElement: d,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              textareaElementGenerator: g,
              minusMenuElement: _,
              plusMenuElement: x,
              beforeRemoveAction: v,
              beforeAddAction: O,
              beforeUpdateAction: C,
              logger: I,
              onSubmitValueParser: P,
            });
          case HM:
            return E.createElement(jl, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: a,
              onUpdate: s,
              onDeltaUpdate: l,
              readOnly: u,
              dataType: D,
              getStyle: c,
              addButtonElement: d,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              textareaElementGenerator: g,
              minusMenuElement: _,
              plusMenuElement: x,
              beforeRemoveAction: v,
              beforeAddAction: O,
              beforeUpdateAction: C,
              logger: I,
              onSubmitValueParser: P,
            });
          case GM:
            return E.createElement(P2, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: a,
              onUpdate: s,
              onDeltaUpdate: l,
              readOnly: u,
              dataType: D,
              getStyle: c,
              addButtonElement: d,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              textareaElementGenerator: g,
              minusMenuElement: _,
              plusMenuElement: x,
              beforeRemoveAction: v,
              beforeAddAction: O,
              beforeUpdateAction: C,
              logger: I,
              onSubmitValueParser: P,
            });
          case WM:
            return E.createElement(Wt, {
              name: t,
              value: `"${e}"`,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case KM:
            return E.createElement(Wt, {
              name: t,
              value: e,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case YM:
            return E.createElement(Wt, {
              name: t,
              value: e ? 'true' : 'false',
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case XM:
            return E.createElement(Wt, {
              name: t,
              value: e.toISOString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: F,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case QM:
            return E.createElement(Wt, {
              name: t,
              value: 'null',
              originalValue: 'null',
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case ZM:
            return E.createElement(Wt, {
              name: t,
              value: 'undefined',
              originalValue: 'undefined',
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case e4:
            return E.createElement(k2, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              textareaElementGenerator: g,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          case t4:
            return E.createElement(Wt, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: F,
              dataType: D,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: _,
              logger: I,
              onSubmitValueParser: P,
            });
          default:
            return null;
        }
      }
    };
    Ra.defaultProps = { keyPath: [], deep: 0 };
    var jl = class extends jt {
      constructor(e) {
        super(e);
        let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
        (this.state = {
          name: e.name,
          data: e.data,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: o } = this.props,
          a = n.length;
        o(n[a - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleAddValueAdd({ key: e, newValue: t }) {
        let { data: r, keyPath: n, nextDeep: o } = this.state,
          { beforeAddAction: a, logger: i } = this.props;
        a(e, n, o, t)
          .then(() => {
            (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
            let { onUpdate: s, onDeltaUpdate: l } = this.props;
            s(n[n.length - 1], r),
              l({ type: C2, keyPath: n, deep: o, key: e, newValue: t });
          })
          .catch(i.error);
      }
      handleRemoveValue(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: o, nextDeep: a } = this.state,
            i = n[e];
          t(e, o, a, i)
            .then(() => {
              let s = { keyPath: o, deep: a, key: e, oldValue: i, type: _2 };
              delete n[e], this.setState({ data: n });
              let { onUpdate: l, onDeltaUpdate: u } = this.props;
              l(o[o.length - 1], n), u(s);
            })
            .catch(r.error);
        };
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: o } = this.props,
            { data: a, keyPath: i, nextDeep: s } = this.state,
            l = a[e];
          o(e, i, s, l, t)
            .then(() => {
              (a[e] = t), this.setState({ data: a });
              let { onUpdate: u, onDeltaUpdate: c } = this.props;
              u(i[i.length - 1], a),
                c({
                  type: O2,
                  keyPath: i,
                  deep: s,
                  key: e,
                  newValue: t,
                  oldValue: l,
                }),
                r();
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, keyPath: t, deep: r, data: n } = this.state,
          {
            handleRemove: o,
            readOnly: a,
            dataType: i,
            getStyle: s,
            minusMenuElement: l,
          } = this.props,
          { minus: u, collapsed: c } = s(e, n, t, r, i),
          d = Object.getOwnPropertyNames(n),
          y = a(e, n, t, r, i),
          f = Oe(l, { onClick: o, className: 'rejt-minus-menu', style: u });
        return E.createElement(
          'span',
          { className: 'rejt-collapsed' },
          E.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: c,
              onClick: this.handleCollapseMode,
            },
            '{...}',
            ' ',
            d.length,
            ' ',
            d.length === 1 ? 'key' : 'keys'
          ),
          !y && f
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            nextDeep: o,
            addFormVisible: a,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: s,
            onDeltaUpdate: l,
            readOnly: u,
            getStyle: c,
            dataType: d,
            addButtonElement: y,
            cancelButtonElement: f,
            editButtonElement: h,
            inputElementGenerator: g,
            textareaElementGenerator: _,
            minusMenuElement: x,
            plusMenuElement: v,
            beforeRemoveAction: O,
            beforeAddAction: C,
            beforeUpdateAction: I,
            logger: P,
            onSubmitValueParser: F,
          } = this.props,
          {
            minus: D,
            plus: U,
            addForm: G,
            ul: X,
            delimiter: Q,
          } = c(e, t, r, n, d),
          V = Object.getOwnPropertyNames(t),
          R = u(e, t, r, n, d),
          q = Oe(v, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: U,
          }),
          M = Oe(x, { onClick: s, className: 'rejt-minus-menu', style: D }),
          Y = V.map((te) =>
            E.createElement(Ra, {
              key: te,
              name: te,
              data: t[te],
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveValue(te),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: l,
              readOnly: u,
              getStyle: c,
              addButtonElement: y,
              cancelButtonElement: f,
              editButtonElement: h,
              inputElementGenerator: g,
              textareaElementGenerator: _,
              minusMenuElement: x,
              plusMenuElement: v,
              beforeRemoveAction: O,
              beforeAddAction: C,
              beforeUpdateAction: I,
              logger: P,
              onSubmitValueParser: F,
            })
          );
        return E.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          E.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: Q },
            '{'
          ),
          !R && q,
          E.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: X },
            Y
          ),
          !R &&
            a &&
            E.createElement(
              'div',
              { className: 'rejt-add-form', style: G },
              E.createElement(zl, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: y,
                cancelButtonElement: f,
                inputElementGenerator: g,
                keyPath: r,
                deep: n,
                onSubmitValueParser: F,
              })
            ),
          E.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: Q },
            '}'
          ),
          !R && M
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: o,
          } = this.state,
          { getStyle: a, dataType: i } = this.props,
          s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          l = a(e, r, n, o, i);
        return E.createElement(
          'div',
          { className: 'rejt-object-node' },
          E.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            E.createElement(
              'span',
              { className: 'rejt-name', style: l.name },
              e,
              ' :',
              ' '
            )
          ),
          s
        );
      }
    };
    jl.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: E.createElement('span', null, ' - '),
      plusMenuElement: E.createElement('span', null, ' + '),
    };
    var Wt = class extends jt {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: o,
            deep: a,
          } = this.state,
          { readOnly: i, dataType: s } = this.props,
          l = i(r, n, o, a, s);
        e && !l && typeof t.focus == 'function' && t.focus();
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: o,
          } = this.props,
          { inputRef: a, name: i, deep: s } = this.state;
        if (!a) return;
        let l = n(!0, o, s, i, a.value);
        e({ value: l, key: i })
          .then(() => {
            I2(t, l) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: o,
          } = this.state,
          {
            handleRemove: a,
            originalValue: i,
            readOnly: s,
            dataType: l,
            getStyle: u,
            editButtonElement: c,
            cancelButtonElement: d,
            inputElementGenerator: y,
            minusMenuElement: f,
            keyPath: h,
          } = this.props,
          g = u(e, i, n, o, l),
          _ = s(e, i, n, o, l),
          x = r && !_,
          v = y($l, h, o, e, i, l),
          O = Oe(c, { onClick: this.handleEdit }),
          C = Oe(d, { onClick: this.handleCancelEdit }),
          I = Oe(v, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
          P = Oe(f, {
            onClick: a,
            className: 'rejt-minus-menu',
            style: g.minus,
          });
        return E.createElement(
          'li',
          { className: 'rejt-value-node', style: g.li },
          E.createElement(
            'span',
            { className: 'rejt-name', style: g.name },
            e,
            ' : '
          ),
          x
            ? E.createElement(
                'span',
                { className: 'rejt-edit-form', style: g.editForm },
                I,
                ' ',
                C,
                O
              )
            : E.createElement(
                'span',
                {
                  className: 'rejt-value',
                  style: g.value,
                  onClick: _ ? null : this.handleEditMode,
                },
                String(t)
              ),
          !_ && !x && P
        );
      }
    };
    Wt.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => Promise.resolve(),
      editButtonElement: E.createElement('button', null, 'e'),
      cancelButtonElement: E.createElement('button', null, 'c'),
      minusMenuElement: E.createElement('span', null, ' - '),
    };
    var r4 = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      n4 = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      o4 = {
        minus: { color: 'red' },
        editForm: {},
        value: { color: '#7bba3d' },
        li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
        name: { color: '#2287CD' },
      };
    function a4(e) {
      let t = e;
      if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
      try {
        t = JSON.parse(e);
      } catch {}
      return t;
    }
    var R2 = class extends jt {
      constructor(e) {
        super(e),
          (this.state = { data: e.data, rootName: e.rootName }),
          (this.onUpdate = this.onUpdate.bind(this)),
          (this.removeRoot = this.removeRoot.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data || e.rootName !== t.rootName
          ? { data: e.data, rootName: e.rootName }
          : null;
      }
      onUpdate(e, t) {
        this.setState({ data: t }), this.props.onFullyUpdate(t);
      }
      removeRoot() {
        this.onUpdate(null, null);
      }
      render() {
        let { data: e, rootName: t } = this.state,
          {
            isCollapsed: r,
            onDeltaUpdate: n,
            readOnly: o,
            getStyle: a,
            addButtonElement: i,
            cancelButtonElement: s,
            editButtonElement: l,
            inputElement: u,
            textareaElement: c,
            minusMenuElement: d,
            plusMenuElement: y,
            beforeRemoveAction: f,
            beforeAddAction: h,
            beforeUpdateAction: g,
            logger: _,
            onSubmitValueParser: x,
            fallback: v = null,
          } = this.props,
          O = vr(e),
          C = o;
        vr(o) === 'Boolean' && (C = () => o);
        let I = u;
        u && vr(u) !== 'Function' && (I = () => u);
        let P = c;
        return (
          c && vr(c) !== 'Function' && (P = () => c),
          O === 'Object' || O === 'Array'
            ? E.createElement(
                'div',
                { className: 'rejt-tree' },
                E.createElement(Ra, {
                  data: e,
                  name: t,
                  deep: -1,
                  isCollapsed: r,
                  onUpdate: this.onUpdate,
                  onDeltaUpdate: n,
                  readOnly: C,
                  getStyle: a,
                  addButtonElement: i,
                  cancelButtonElement: s,
                  editButtonElement: l,
                  inputElementGenerator: I,
                  textareaElementGenerator: P,
                  minusMenuElement: d,
                  plusMenuElement: y,
                  handleRemove: this.removeRoot,
                  beforeRemoveAction: f,
                  beforeAddAction: h,
                  beforeUpdateAction: g,
                  logger: _,
                  onSubmitValueParser: x,
                })
              )
            : v
        );
      }
    };
    R2.defaultProps = {
      rootName: 'root',
      isCollapsed: (e, t) => t !== -1,
      getStyle: (e, t, r, n, o) => {
        switch (o) {
          case 'Object':
          case 'Error':
            return r4;
          case 'Array':
            return n4;
          default:
            return o4;
        }
      },
      readOnly: () => !1,
      onFullyUpdate: () => {},
      onDeltaUpdate: () => {},
      beforeRemoveAction: () => Promise.resolve(),
      beforeAddAction: () => Promise.resolve(),
      beforeUpdateAction: () => Promise.resolve(),
      logger: { error: () => {} },
      onSubmitValueParser: (e, t, r, n, o) => a4(o),
      inputElement: () => E.createElement('input', null),
      textareaElement: () => E.createElement('textarea', null),
      fallback: null,
    };
    var { window: i4 } = xt,
      s4 = W.div(({ theme: e }) => ({
        position: 'relative',
        display: 'flex',
        '&[aria-readonly="true"]': { opacity: 0.5 },
        '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
        '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
          { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
        '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
          { '& > svg': { opacity: 1 } },
        '.rejt-edit-form button': { display: 'none' },
        '.rejt-add-form': { marginLeft: 10 },
        '.rejt-add-value-node': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.rejt-name': { lineHeight: '22px' },
        '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
        '.rejt-plus-menu': { marginLeft: 5 },
        '.rejt-object-node > span > *, .rejt-array-node > span > *': {
          position: 'relative',
          zIndex: 2,
        },
        '.rejt-object-node, .rejt-array-node': { position: 'relative' },
        '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
          {
            content: '""',
            position: 'absolute',
            top: 0,
            display: 'block',
            width: '100%',
            marginLeft: '-1rem',
            padding: '0 4px 0 1rem',
            height: 22,
          },
        '.rejt-collapsed::before, .rejt-not-collapsed::before': {
          zIndex: 1,
          background: 'transparent',
          borderRadius: 4,
          transition: 'background 0.2s',
          pointerEvents: 'none',
          opacity: 0.1,
        },
        '.rejt-object-node:hover, .rejt-array-node:hover': {
          '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
            background: e.color.secondary,
          },
        },
        '.rejt-collapsed::after, .rejt-not-collapsed::after': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          pointerEvents: 'none',
          width: 0,
          height: 0,
        },
        '.rejt-collapsed::after': {
          left: -8,
          top: 8,
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          borderLeft: '3px solid rgba(153,153,153,0.6)',
        },
        '.rejt-not-collapsed::after': {
          left: -10,
          top: 10,
          borderTop: '3px solid rgba(153,153,153,0.6)',
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
        },
        '.rejt-value': {
          display: 'inline-block',
          border: '1px solid transparent',
          borderRadius: 4,
          margin: '1px 0',
          padding: '0 4px',
          cursor: 'text',
          color: e.color.defaultText,
        },
        '.rejt-value-node:hover > .rejt-value': {
          background: e.color.lighter,
          borderColor: e.appBorderColor,
        },
      })),
      Al = W.button(({ theme: e, primary: t }) => ({
        border: 0,
        height: 20,
        margin: 1,
        borderRadius: 4,
        background: t ? e.color.secondary : 'transparent',
        color: t ? e.color.lightest : e.color.dark,
        fontWeight: t ? 'bold' : 'normal',
        cursor: 'pointer',
        order: t ? 'initial' : 9,
      })),
      l4 = W(ai)(({ theme: e, disabled: t }) => ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: t ? 'not-allowed' : 'pointer',
        color: e.textMutedColor,
        '&:hover': t ? {} : { color: e.color.ancillary },
        'svg + &': { marginLeft: 0 },
      })),
      u4 = W($u)(({ theme: e, disabled: t }) => ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: t ? 'not-allowed' : 'pointer',
        color: e.textMutedColor,
        '&:hover': t ? {} : { color: e.color.negative },
        'svg + &': { marginLeft: 0 },
      })),
      Iv = W.input(({ theme: e, placeholder: t }) => ({
        outline: 0,
        margin: t ? 1 : '1px 0',
        padding: '3px 4px',
        color: e.color.defaultText,
        background: e.background.app,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 4,
        lineHeight: '14px',
        width: t === 'Key' ? 80 : 120,
        '&:focus': { border: `1px solid ${e.color.secondary}` },
      })),
      c4 = W(ht)(({ theme: e }) => ({
        position: 'absolute',
        zIndex: 2,
        top: 2,
        right: 2,
        height: 21,
        padding: '0 3px',
        background: e.background.bar,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
        color: e.textMutedColor,
        fontSize: '9px',
        fontWeight: 'bold',
        textDecoration: 'none',
        span: { marginLeft: 3, marginTop: 1 },
      })),
      p4 = W(dt.Textarea)(({ theme: e }) => ({
        flex: 1,
        padding: '7px 6px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        lineHeight: '18px',
        '&::placeholder': {
          fontFamily: e.typography.fonts.base,
          fontSize: '13px',
        },
        '&:placeholder-shown': { padding: '7px 10px' },
      })),
      d4 = {
        bubbles: !0,
        cancelable: !0,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
      },
      f4 = (e) => {
        e.currentTarget.dispatchEvent(new i4.KeyboardEvent('keydown', d4));
      },
      y4 = (e) => {
        e.currentTarget.select();
      },
      h4 = (e) => () => ({
        name: { color: e.color.secondary },
        collapsed: { color: e.color.dark },
        ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
        li: { outline: 0 },
      }),
      Pv = ({ name: e, value: t, onChange: r, argType: n }) => {
        let o = ni(),
          a = Nt(() => t && (0, Lv.default)(t), [t]),
          i = a != null,
          [s, l] = he(!i),
          [u, c] = he(null),
          d = !!n?.table?.readonly,
          y = $e(
            (O) => {
              try {
                O && r(JSON.parse(O)), c(void 0);
              } catch (C) {
                c(C);
              }
            },
            [r]
          ),
          [f, h] = he(!1),
          g = $e(() => {
            r({}), h(!0);
          }, [h]),
          _ = Xe(null);
        if (
          (ze(() => {
            f && _.current && _.current.select();
          }, [f]),
          !i)
        )
          return E.createElement(
            Bt,
            { disabled: d, id: bn(e), onClick: g },
            'Set object'
          );
        let x = E.createElement(p4, {
            ref: _,
            id: tt(e),
            name: e,
            defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
            onBlur: (O) => y(O.target.value),
            placeholder: 'Edit JSON string...',
            autoFocus: f,
            valid: u ? 'error' : null,
            readOnly: d,
          }),
          v =
            Array.isArray(t) ||
            (typeof t == 'object' && t?.constructor === Object);
        return E.createElement(
          s4,
          { 'aria-readonly': d },
          v &&
            E.createElement(
              c4,
              {
                onClick: (O) => {
                  O.preventDefault(), l((C) => !C);
                },
              },
              s ? E.createElement(qu, null) : E.createElement(Mu, null),
              E.createElement('span', null, 'RAW')
            ),
          s
            ? x
            : E.createElement(R2, {
                readOnly: d || !v,
                isCollapsed: v ? void 0 : () => !0,
                data: a,
                rootName: e,
                onFullyUpdate: r,
                getStyle: h4(o),
                cancelButtonElement: E.createElement(
                  Al,
                  { type: 'button' },
                  'Cancel'
                ),
                editButtonElement: E.createElement(
                  Al,
                  { type: 'submit' },
                  'Save'
                ),
                addButtonElement: E.createElement(
                  Al,
                  { type: 'submit', primary: !0 },
                  'Save'
                ),
                plusMenuElement: E.createElement(l4, null),
                minusMenuElement: E.createElement(u4, null),
                inputElement: (O, C, I, P) =>
                  P
                    ? E.createElement(Iv, { onFocus: y4, onBlur: f4 })
                    : E.createElement(Iv, null),
                fallback: x,
              })
        );
      },
      m4 = W.input(({ theme: e, min: t, max: r, value: n, disabled: o }) => ({
        '&': {
          width: '100%',
          backgroundColor: 'transparent',
          appearance: 'none',
        },
        '&::-webkit-slider-runnable-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${vt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${vt(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${gr(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${gr(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: o ? 'not-allowed' : 'pointer',
        },
        '&::-webkit-slider-thumb': {
          marginTop: '-6px',
          width: 16,
          height: 16,
          border: `1px solid ${Dt(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${Dt(e.appBorderColor, 0.2)}`,
          cursor: o ? 'not-allowed' : 'grab',
          appearance: 'none',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${vt(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: o ? 'not-allowed' : 'grab',
          },
        },
        '&:focus': {
          outline: 'none',
          '&::-webkit-slider-runnable-track': {
            borderColor: Dt(e.color.secondary, 0.4),
          },
          '&::-webkit-slider-thumb': {
            borderColor: e.color.secondary,
            boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
          },
        },
        '&::-moz-range-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${vt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${vt(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${gr(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${gr(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: o ? 'not-allowed' : 'pointer',
          outline: 'none',
        },
        '&::-moz-range-thumb': {
          width: 16,
          height: 16,
          border: `1px solid ${Dt(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${Dt(e.appBorderColor, 0.2)}`,
          cursor: o ? 'not-allowed' : 'grap',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${vt(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: 'grabbing',
          },
        },
        '&::-ms-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${vt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${vt(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${gr(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${gr(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          color: 'transparent',
          width: '100%',
          height: '6px',
          cursor: 'pointer',
        },
        '&::-ms-fill-lower': { borderRadius: 6 },
        '&::-ms-fill-upper': { borderRadius: 6 },
        '&::-ms-thumb': {
          width: 16,
          height: 16,
          background: `${e.input.background}`,
          border: `1px solid ${Dt(e.appBorderColor, 0.2)}`,
          borderRadius: 50,
          cursor: 'grab',
          marginTop: 0,
        },
        '@supports (-ms-ime-align:auto)': {
          'input[type=range]': { margin: '0' },
        },
      })),
      D2 = W.span({
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        whiteSpace: 'nowrap',
        fontFeatureSettings: 'tnum',
        fontVariantNumeric: 'tabular-nums',
        '[aria-readonly=true] &': { opacity: 0.5 },
      }),
      g4 = W(D2)(({ numberOFDecimalsPlaces: e, max: t }) => ({
        width: `${e + t.toString().length * 2 + 3}ch`,
        textAlign: 'right',
        flexShrink: 0,
      })),
      b4 = W.div({ display: 'flex', alignItems: 'center', width: '100%' });
    function v4(e) {
      let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
    }
    var x4 = ({
        name: e,
        value: t,
        onChange: r,
        min: n = 0,
        max: o = 100,
        step: a = 1,
        onBlur: i,
        onFocus: s,
        argType: l,
      }) => {
        let u = (f) => {
            r(PM(f.target.value));
          },
          c = t !== void 0,
          d = Nt(() => v4(a), [a]),
          y = !!l?.table?.readonly;
        return E.createElement(
          b4,
          { 'aria-readonly': y },
          E.createElement(D2, null, n),
          E.createElement(m4, {
            id: tt(e),
            type: 'range',
            disabled: y,
            onChange: u,
            name: e,
            value: t,
            min: n,
            max: o,
            step: a,
            onFocus: s,
            onBlur: i,
          }),
          E.createElement(
            g4,
            { numberOFDecimalsPlaces: d, max: o },
            c ? t.toFixed(d) : '--',
            ' / ',
            o
          )
        );
      },
      E4 = W.label({ display: 'flex' }),
      w4 = W.div(({ isMaxed: e }) => ({
        marginLeft: '0.75rem',
        paddingTop: '0.35rem',
        color: e ? 'red' : void 0,
      })),
      S4 = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: o,
        maxLength: a,
        argType: i,
      }) => {
        let s = (f) => {
            r(f.target.value);
          },
          l = !!i?.table?.readonly,
          [u, c] = he(!1),
          d = $e(() => {
            r(''), c(!0);
          }, [c]);
        if (t === void 0)
          return E.createElement(
            Bt,
            {
              variant: 'outline',
              size: 'medium',
              disabled: l,
              id: bn(e),
              onClick: d,
            },
            'Set string'
          );
        let y = typeof t == 'string';
        return E.createElement(
          E4,
          null,
          E.createElement(dt.Textarea, {
            id: tt(e),
            maxLength: a,
            onChange: s,
            disabled: l,
            size: 'flex',
            placeholder: 'Edit string...',
            autoFocus: u,
            valid: y ? null : 'error',
            name: e,
            value: y ? t : '',
            onFocus: n,
            onBlur: o,
          }),
          a &&
            E.createElement(
              w4,
              { isMaxed: t?.length === a },
              t?.length ?? 0,
              ' / ',
              a
            )
        );
      },
      A4 = W(dt.Input)({ padding: 10 });
    function T4(e) {
      e.forEach((t) => {
        t.startsWith('blob:') && URL.revokeObjectURL(t);
      });
    }
    var C4 = ({
        onChange: e,
        name: t,
        accept: r = 'image/*',
        value: n,
        argType: o,
      }) => {
        let a = Xe(null),
          i = o?.control?.readOnly;
        function s(l) {
          if (!l.target.files) return;
          let u = Array.from(l.target.files).map((c) => URL.createObjectURL(c));
          e(u), T4(n);
        }
        return (
          ze(() => {
            n == null && a.current && (a.current.value = null);
          }, [n, t]),
          E.createElement(A4, {
            ref: a,
            id: tt(t),
            type: 'file',
            name: t,
            multiple: !0,
            disabled: i,
            onChange: s,
            accept: r,
            size: 'flex',
          })
        );
      },
      _4 = eu(() => Promise.resolve().then(() => (av(), ov))),
      O4 = (e) =>
        E.createElement(
          Zl,
          { fallback: E.createElement('div', null) },
          E.createElement(_4, { ...e })
        ),
      I4 = {
        array: Pv,
        object: Pv,
        boolean: wM,
        color: O4,
        date: OM,
        number: RM,
        check: Zr,
        'inline-check': Zr,
        radio: Zr,
        'inline-radio': Zr,
        select: Zr,
        'multi-select': Zr,
        range: x4,
        text: S4,
        file: C4,
      },
      kv = () => E.createElement(E.Fragment, null, '-'),
      P4 = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
        let { key: o, control: a } = e,
          [i, s] = he(!1),
          [l, u] = he({ value: t });
        ze(() => {
          i || u({ value: t });
        }, [i, t]);
        let c = $e((g) => (u({ value: g }), r({ [o]: g }), g), [r, o]),
          d = $e(() => s(!1), []),
          y = $e(() => s(!0), []);
        if (!a || a.disable) {
          let g = a?.disable !== !0 && e?.type?.name !== 'function';
          return n && g
            ? E.createElement(
                ar,
                {
                  href: 'https://storybook.js.org/docs/react/essentials/controls',
                  target: '_blank',
                  withArrow: !0,
                },
                'Setup controls'
              )
            : E.createElement(kv, null);
        }
        let f = {
            name: o,
            argType: e,
            value: l.value,
            onChange: c,
            onBlur: d,
            onFocus: y,
          },
          h = I4[a.type] || kv;
        return E.createElement(h, { ...f, ...a, controlType: a.type });
      },
      k4 = W.span({ fontWeight: 'bold' }),
      R4 = W.span(({ theme: e }) => ({
        color: e.color.negative,
        fontFamily: e.typography.fonts.mono,
        cursor: 'help',
      })),
      D4 = W.div(({ theme: e }) => ({
        '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
        code: {
          ...Ir({ theme: e }),
          fontSize: 12,
          fontFamily: e.typography.fonts.mono,
        },
        '& code': { margin: 0, display: 'inline-block' },
        '& pre > code': { whiteSpace: 'pre-wrap' },
      })),
      F4 = W.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? ve(0.1, e.color.defaultText)
            : ve(0.2, e.color.defaultText),
        marginTop: t ? 4 : 0,
      })),
      j4 = W.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? ve(0.1, e.color.defaultText)
            : ve(0.2, e.color.defaultText),
        marginTop: t ? 12 : 0,
        marginBottom: 12,
      })),
      N4 = W.td(({ theme: e, expandable: t }) => ({
        paddingLeft: t ? '40px !important' : '20px !important',
      })),
      B4 = (e) => e && { summary: typeof e == 'string' ? e : e.name },
      Ea = (e) => {
        let [t, r] = he(!1),
          {
            row: n,
            updateArgs: o,
            compact: a,
            expandable: i,
            initialExpandedArgs: s,
          } = e,
          { name: l, description: u } = n,
          c = n.table || {},
          d = c.type || B4(n.type),
          y = c.defaultValue || n.defaultValue,
          f = n.type?.required,
          h = u != null && u !== '';
        return E.createElement(
          'tr',
          { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
          E.createElement(
            N4,
            { expandable: i },
            E.createElement(k4, null, l),
            f ? E.createElement(R4, { title: 'Required' }, '*') : null
          ),
          a
            ? null
            : E.createElement(
                'td',
                null,
                h && E.createElement(D4, null, E.createElement(RB, null, u)),
                c.jsDocTags != null
                  ? E.createElement(
                      E.Fragment,
                      null,
                      E.createElement(
                        j4,
                        { hasDescription: h },
                        E.createElement(Sl, {
                          value: d,
                          initialExpandedArgs: s,
                        })
                      ),
                      E.createElement(uM, { tags: c.jsDocTags })
                    )
                  : E.createElement(
                      F4,
                      { hasDescription: h },
                      E.createElement(Sl, { value: d, initialExpandedArgs: s })
                    )
              ),
          a
            ? null
            : E.createElement(
                'td',
                null,
                E.createElement(Sl, { value: y, initialExpandedArgs: s })
              ),
          o
            ? E.createElement(
                'td',
                null,
                E.createElement(P4, { ...e, isHovered: t })
              )
            : null
        );
      },
      L4 = W(Nu)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === 'light'
            ? ve(0.25, e.color.defaultText)
            : ve(0.3, e.color.defaultText),
        border: 'none',
        display: 'inline-block',
      })),
      q4 = W(Bu)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === 'light'
            ? ve(0.25, e.color.defaultText)
            : ve(0.3, e.color.defaultText),
        border: 'none',
        display: 'inline-block',
      })),
      M4 = W.span(({ theme: e }) => ({
        display: 'flex',
        lineHeight: '20px',
        alignItems: 'center',
      })),
      U4 = W.td(({ theme: e }) => ({
        position: 'relative',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s1 - 1,
        color:
          e.base === 'light'
            ? ve(0.4, e.color.defaultText)
            : ve(0.6, e.color.defaultText),
        background: `${e.background.app} !important`,
        '& ~ td': { background: `${e.background.app} !important` },
      })),
      J4 = W.td(({ theme: e }) => ({
        position: 'relative',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        background: e.background.app,
      })),
      $4 = W.td(() => ({ position: 'relative' })),
      z4 = W.tr(({ theme: e }) => ({
        '&:hover > td': {
          backgroundColor: `${gr(0.005, e.background.app)} !important`,
          boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
          cursor: 'row-resize',
        },
      })),
      Rv = W.button(() => ({
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        color: 'transparent',
        cursor: 'row-resize !important',
      })),
      Tl = ({
        level: e = 'section',
        label: t,
        children: r,
        initialExpanded: n = !0,
        colSpan: o = 3,
      }) => {
        let [a, i] = he(n),
          s = e === 'subsection' ? J4 : U4,
          l = r?.length || 0,
          u = e === 'subsection' ? `${l} item${l !== 1 ? 's' : ''}` : '',
          c = `${a ? 'Hide' : 'Show'} ${e === 'subsection' ? l : t} item${l !== 1 ? 's' : ''}`;
        return E.createElement(
          E.Fragment,
          null,
          E.createElement(
            z4,
            { title: c },
            E.createElement(
              s,
              { colSpan: 1 },
              E.createElement(Rv, { onClick: (d) => i(!a), tabIndex: 0 }, c),
              E.createElement(
                M4,
                null,
                a ? E.createElement(L4, null) : E.createElement(q4, null),
                t
              )
            ),
            E.createElement(
              $4,
              { colSpan: o - 1 },
              E.createElement(
                Rv,
                {
                  onClick: (d) => i(!a),
                  tabIndex: -1,
                  style: { outline: 'none' },
                },
                c
              ),
              a ? null : u
            )
          ),
          a ? r : null
        );
      },
      wa = W.div(({ theme: e }) => ({
        display: 'flex',
        gap: 16,
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:last-child': { borderBottom: 0 },
      })),
      We = W.div(({ numColumn: e }) => ({
        display: 'flex',
        flexDirection: 'column',
        flex: e || 1,
        gap: 5,
        padding: '12px 20px',
      })),
      Be = W.div(({ theme: e, width: t, height: r }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        width: t || '100%',
        height: r || 16,
        borderRadius: 3,
      })),
      Ke = [2, 4, 2, 2],
      V4 = () =>
        E.createElement(
          E.Fragment,
          null,
          E.createElement(
            wa,
            null,
            E.createElement(
              We,
              { numColumn: Ke[0] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[1] },
              E.createElement(Be, { width: '30%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[2] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[3] },
              E.createElement(Be, { width: '60%' })
            )
          ),
          E.createElement(
            wa,
            null,
            E.createElement(
              We,
              { numColumn: Ke[0] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[1] },
              E.createElement(Be, { width: '80%' }),
              E.createElement(Be, { width: '30%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[2] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[3] },
              E.createElement(Be, { width: '60%' })
            )
          ),
          E.createElement(
            wa,
            null,
            E.createElement(
              We,
              { numColumn: Ke[0] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[1] },
              E.createElement(Be, { width: '80%' }),
              E.createElement(Be, { width: '30%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[2] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[3] },
              E.createElement(Be, { width: '60%' })
            )
          ),
          E.createElement(
            wa,
            null,
            E.createElement(
              We,
              { numColumn: Ke[0] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[1] },
              E.createElement(Be, { width: '80%' }),
              E.createElement(Be, { width: '30%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[2] },
              E.createElement(Be, { width: '60%' })
            ),
            E.createElement(
              We,
              { numColumn: Ke[3] },
              E.createElement(Be, { width: '60%' })
            )
          )
        ),
      H4 = W.div(({ inAddonPanel: e, theme: t }) => ({
        height: e ? '100%' : 'auto',
        display: 'flex',
        border: e ? 'none' : `1px solid ${t.appBorderColor}`,
        borderRadius: e ? 0 : t.appBorderRadius,
        padding: e ? 0 : 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15,
        background: t.background.content,
        boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
      })),
      G4 = W.div(({ theme: e }) => ({
        display: 'flex',
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      W4 = W.div(({ theme: e }) => ({
        width: 1,
        height: 16,
        backgroundColor: e.appBorderColor,
      })),
      K4 = ({ inAddonPanel: e }) => {
        let [t, r] = he(!0);
        return (
          ze(() => {
            let n = setTimeout(() => {
              r(!1);
            }, 100);
            return () => clearTimeout(n);
          }, []),
          t
            ? null
            : E.createElement(
                H4,
                { inAddonPanel: e },
                E.createElement(Ma, {
                  title: e
                    ? 'Interactive story playground'
                    : "Args table with interactive controls couldn't be auto-generated",
                  description: E.createElement(
                    E.Fragment,
                    null,
                    "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
                  ),
                  footer: E.createElement(
                    G4,
                    null,
                    e &&
                      E.createElement(
                        E.Fragment,
                        null,
                        E.createElement(
                          ar,
                          {
                            href: 'https://youtu.be/0gOfS6K0x0E',
                            target: '_blank',
                            withArrow: !0,
                          },
                          E.createElement(zu, null),
                          ' Watch 5m video'
                        ),
                        E.createElement(W4, null),
                        E.createElement(
                          ar,
                          {
                            href: 'https://storybook.js.org/docs/essentials/controls',
                            target: '_blank',
                            withArrow: !0,
                          },
                          E.createElement(bo, null),
                          ' Read docs'
                        )
                      ),
                    !e &&
                      E.createElement(
                        ar,
                        {
                          href: 'https://storybook.js.org/docs/essentials/controls',
                          target: '_blank',
                          withArrow: !0,
                        },
                        E.createElement(bo, null),
                        ' Learn how to set that up'
                      )
                  ),
                })
              )
        );
      },
      Y4 = W.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? ve(0.25, e.color.defaultText)
                : ve(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      })),
      X4 = W(ht)(({ theme: e }) => ({ margin: '-4px -12px -4px 0' })),
      Q4 = W.span({ display: 'flex', justifyContent: 'space-between' }),
      Z4 = {
        alpha: (e, t) => e.name.localeCompare(t.name),
        requiredFirst: (e, t) =>
          +!!t.type?.required - +!!e.type?.required ||
          e.name.localeCompare(t.name),
        none: void 0,
      },
      e6 = (e, t) => {
        let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
        if (!e) return r;
        Object.entries(e).forEach(([a, i]) => {
          let { category: s, subcategory: l } = i?.table || {};
          if (s) {
            let u = r.sections[s] || { ungrouped: [], subsections: {} };
            if (!l) u.ungrouped.push({ key: a, ...i });
            else {
              let c = u.subsections[l] || [];
              c.push({ key: a, ...i }), (u.subsections[l] = c);
            }
            r.sections[s] = u;
          } else if (l) {
            let u = r.ungroupedSubsections[l] || [];
            u.push({ key: a, ...i }), (r.ungroupedSubsections[l] = u);
          } else r.ungrouped.push({ key: a, ...i });
        });
        let n = Z4[t],
          o = (a) =>
            n
              ? Object.keys(a).reduce(
                  (i, s) => ({ ...i, [s]: a[s].sort(n) }),
                  {}
                )
              : a;
        return {
          ungrouped: r.ungrouped.sort(n),
          ungroupedSubsections: o(r.ungroupedSubsections),
          sections: Object.keys(r.sections).reduce(
            (a, i) => ({
              ...a,
              [i]: {
                ungrouped: r.sections[i].ungrouped.sort(n),
                subsections: o(r.sections[i].subsections),
              },
            }),
            {}
          ),
        };
      },
      t6 = (e, t, r) => {
        try {
          return _3(e, t, r);
        } catch (n) {
          return fy.warn(n.message), !1;
        }
      },
      r6 = (e) => {
        let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: o,
          initialExpandedArgs: a,
          sort: i = 'none',
          isLoading: s,
        } = e;
        if ('error' in e) {
          let { error: v } = e;
          return E.createElement(
            x2,
            null,
            v,
            '\xA0',
            E.createElement(
              ar,
              {
                href: 'http://storybook.js.org/docs/',
                target: '_blank',
                withArrow: !0,
              },
              E.createElement(bo, null),
              ' Read the docs'
            )
          );
        }
        if (s) return E.createElement(V4, null);
        let { rows: l, args: u, globals: c } = 'rows' in e && e,
          d = e6(
            (0, Nv.default)(
              l,
              (v) => !v?.table?.disable && t6(v, u || {}, c || {})
            ),
            i
          ),
          y = d.ungrouped.length === 0,
          f = Object.entries(d.sections).length === 0,
          h = Object.entries(d.ungroupedSubsections).length === 0;
        if (y && f && h) return E.createElement(K4, { inAddonPanel: o });
        let g = 1;
        t && (g += 1), n || (g += 2);
        let _ = Object.keys(d.sections).length > 0,
          x = {
            updateArgs: t,
            compact: n,
            inAddonPanel: o,
            initialExpandedArgs: a,
          };
        return E.createElement(
          $a,
          null,
          E.createElement(
            Y4,
            {
              compact: n,
              inAddonPanel: o,
              className: 'docblock-argstable sb-unstyled',
            },
            E.createElement(
              'thead',
              { className: 'docblock-argstable-head' },
              E.createElement(
                'tr',
                null,
                E.createElement(
                  'th',
                  null,
                  E.createElement('span', null, 'Name')
                ),
                n
                  ? null
                  : E.createElement(
                      'th',
                      null,
                      E.createElement('span', null, 'Description')
                    ),
                n
                  ? null
                  : E.createElement(
                      'th',
                      null,
                      E.createElement('span', null, 'Default')
                    ),
                t
                  ? E.createElement(
                      'th',
                      null,
                      E.createElement(
                        Q4,
                        null,
                        'Control',
                        ' ',
                        !s &&
                          r &&
                          E.createElement(
                            X4,
                            { onClick: () => r(), title: 'Reset controls' },
                            E.createElement(si, { 'aria-hidden': !0 })
                          )
                      )
                    )
                  : null
              )
            ),
            E.createElement(
              'tbody',
              { className: 'docblock-argstable-body' },
              d.ungrouped.map((v) =>
                E.createElement(Ea, {
                  key: v.key,
                  row: v,
                  arg: u && u[v.key],
                  ...x,
                })
              ),
              Object.entries(d.ungroupedSubsections).map(([v, O]) =>
                E.createElement(
                  Tl,
                  { key: v, label: v, level: 'subsection', colSpan: g },
                  O.map((C) =>
                    E.createElement(Ea, {
                      key: C.key,
                      row: C,
                      arg: u && u[C.key],
                      expandable: _,
                      ...x,
                    })
                  )
                )
              ),
              Object.entries(d.sections).map(([v, O]) =>
                E.createElement(
                  Tl,
                  { key: v, label: v, level: 'section', colSpan: g },
                  O.ungrouped.map((C) =>
                    E.createElement(Ea, {
                      key: C.key,
                      row: C,
                      arg: u && u[C.key],
                      ...x,
                    })
                  ),
                  Object.entries(O.subsections).map(([C, I]) =>
                    E.createElement(
                      Tl,
                      { key: C, label: C, level: 'subsection', colSpan: g },
                      I.map((P) =>
                        E.createElement(Ea, {
                          key: P.key,
                          row: P,
                          arg: u && u[P.key],
                          expandable: _,
                          ...x,
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    W.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === 'light'
          ? ve(0.4, e.color.defaultText)
          : ve(0.6, e.color.defaultText),
    }));
    W.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    });
    W.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': { marginBottom: '1rem' },
    });
    W.div(Pr, ({ theme: e }) => ({
      ...ka(e),
      margin: '25px 0 40px',
      padding: '30px 20px',
    }));
    W.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    }));
    W.div(({ theme: e }) => ({
      color:
        e.base === 'light'
          ? ve(0.2, e.color.defaultText)
          : ve(0.6, e.color.defaultText),
    }));
    W.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 });
    W.div(({ theme: e }) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? ve(0.4, e.color.defaultText)
          : ve(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    }));
    W.div({ display: 'flex', flexDirection: 'row' });
    W.div(({ background: e }) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    }));
    W.div(({ theme: e }) => ({
      ...ka(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    }));
    W.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    });
    W.div({ flex: 1, display: 'flex', flexDirection: 'row' });
    W.div({ display: 'flex', alignItems: 'flex-start' });
    W.div({ flex: '0 0 30%' });
    W.div({ flex: 1 });
    W.div(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? ve(0.4, e.color.defaultText)
          : ve(0.6, e.color.defaultText),
    }));
    W.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }));
    W.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    }));
    W.div(({ theme: e }) => ({
      ...ka(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    }));
    W.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    });
    W.div({ display: 'flex', flexFlow: 'row wrap' });
    xt &&
      xt.__DOCS_CONTEXT__ === void 0 &&
      ((xt.__DOCS_CONTEXT__ = vn(null)),
      (xt.__DOCS_CONTEXT__.displayName = 'DocsContext'));
    var n6 = xt ? xt.__DOCS_CONTEXT__ : vn(null);
    vn({ sources: {} });
    var { document: o6 } = xt;
    function a6(e, t) {
      e.channel.emit(pu, t);
    }
    Ga.a;
    var F2 = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      i6 = F2.reduce(
        (e, t) => ({
          ...e,
          [t]: W(t)({
            '& svg': {
              position: 'relative',
              top: '-0.1em',
              visibility: 'hidden',
            },
            '&:hover svg': { visibility: 'visible' },
          }),
        }),
        {}
      ),
      s6 = W.a(() => ({
        float: 'left',
        lineHeight: 'inherit',
        paddingRight: '10px',
        marginLeft: '-24px',
        color: 'inherit',
      })),
      l6 = ({ as: e, id: t, children: r, ...n }) => {
        let o = tu(n6),
          a = i6[e],
          i = `#${t}`;
        return E.createElement(
          a,
          { id: t, ...n },
          E.createElement(
            s6,
            {
              'aria-hidden': 'true',
              href: i,
              tabIndex: -1,
              target: '_self',
              onClick: (s) => {
                o6.getElementById(t) && a6(o, i);
              },
            },
            E.createElement(Uu, null)
          ),
          r
        );
      },
      j2 = (e) => {
        let { as: t, id: r, children: n, ...o } = e;
        if (r) return E.createElement(l6, { as: t, id: r, ...o }, n);
        let a = t,
          { as: i, ...s } = e;
        return E.createElement(a, { ...Wa(s, t) });
      };
    F2.reduce(
      (e, t) => ({ ...e, [t]: (r) => E.createElement(j2, { as: t, ...r }) }),
      {}
    );
    var u6 = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(u6 || {});
    Xl(zq());
    W.div(({ theme: e }) => ({
      width: '10rem',
      '@media (max-width: 768px)': { display: 'none' },
    }));
    W.div(({ theme: e }) => ({
      position: 'fixed',
      bottom: 0,
      top: 0,
      width: '10rem',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      overflowY: 'auto',
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch',
      '& *': { boxSizing: 'border-box' },
      '& > .toc-wrapper > .toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          '.toc-list': {
            paddingLeft: 0,
            borderLeft: `solid 2px ${e.color.mediumlight}`,
          },
        },
      },
      '& .toc-list-item': {
        position: 'relative',
        listStyleType: 'none',
        marginLeft: 20,
        paddingTop: 3,
        paddingBottom: 3,
      },
      '& .toc-list-item::before': {
        content: '""',
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        transform: 'translateX(calc(-2px - 20px))',
        borderLeft: `solid 2px ${e.color.mediumdark}`,
        opacity: 0,
        transition: 'opacity 0.2s',
      },
      '& .toc-list-item.is-active-li::before': { opacity: 1 },
      '& .toc-list-item > a': {
        color: e.color.defaultText,
        textDecoration: 'none',
      },
      '& .toc-list-item.is-active-li > a': {
        fontWeight: 600,
        color: e.color.secondary,
        textDecoration: 'none',
      },
    }));
    W.p(({ theme: e }) => ({
      fontWeight: 600,
      fontSize: '0.875em',
      color: e.textColor,
      textTransform: 'uppercase',
      marginBottom: 10,
    }));
    var c6 = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != 'string') return E.createElement(Ja, null, e);
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      return E.createElement(j2, { as: 'h2', id: n, ...r }, e);
    };
    W(c6)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: '16px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: e.textMutedColor,
      border: 0,
      marginBottom: '12px',
      '&:first-of-type': { marginTop: '56px' },
    }));
    var Dv = 'addon-controls',
      N2 = 'controls',
      p6 = ti({
        from: { transform: 'translateY(40px)' },
        to: { transform: 'translateY(0)' },
      }),
      d6 = ti({ from: { background: 'var(--highlight-bg-color)' }, to: {} }),
      f6 = W.div({
        containerType: 'size',
        position: 'sticky',
        bottom: 0,
        height: 39,
        overflow: 'hidden',
        zIndex: 1,
      }),
      y6 = W(qa)(({ theme: e }) => ({
        '--highlight-bg-color': e.base === 'dark' ? '#153B5B' : '#E0F0FF',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 6,
        padding: '6px 10px',
        animation: `${p6} 300ms, ${d6} 2s`,
        background: e.background.bar,
        borderTop: `1px solid ${e.appBorderColor}`,
        fontSize: e.typography.size.s2,
        '@container (max-width: 799px)': {
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
      })),
      h6 = W.div({
        display: 'flex',
        flex: '99 0 auto',
        alignItems: 'center',
        marginLeft: 10,
        gap: 6,
      }),
      m6 = W.div(({ theme: e }) => ({
        display: 'flex',
        flex: '1 0 0',
        alignItems: 'center',
        gap: 2,
        color: e.color.mediumdark,
        fontSize: e.typography.size.s2,
      })),
      Cl = W.div({
        '@container (max-width: 799px)': {
          lineHeight: 0,
          textIndent: '-9999px',
          '&::after': {
            content: 'attr(data-short-label)',
            display: 'block',
            lineHeight: 'initial',
            textIndent: '0',
          },
        },
      }),
      g6 = W(dt.Input)(({ theme: e }) => ({
        '::placeholder': { color: e.color.mediumdark },
        '&:invalid:not(:placeholder-shown)': {
          boxShadow: `${e.color.negative} 0 0 0 1px inset`,
        },
      })),
      b6 = ({ saveStory: e, createStory: t, resetArgs: r }) => {
        let n = E.useRef(null),
          [o, a] = E.useState(!1),
          [i, s] = E.useState(!1),
          [l, u] = E.useState(''),
          [c, d] = E.useState(null),
          y = async () => {
            o || (a(!0), await e().catch(() => {}), a(!1));
          },
          f = () => {
            s(!0), u(''), setTimeout(() => n.current?.focus(), 0);
          },
          h = (g) => {
            let _ = g.target.value
              .replace(/^[^a-z]/i, '')
              .replace(/[^a-z0-9-_ ]/gi, '')
              .replaceAll(/([-_ ]+[a-z0-9])/gi, (x) =>
                x.toUpperCase().replace(/[-_ ]/g, '')
              );
            u(_.charAt(0).toUpperCase() + _.slice(1));
          };
        return E.createElement(
          f6,
          { id: 'save-from-controls' },
          E.createElement(
            y6,
            null,
            E.createElement(
              m6,
              null,
              E.createElement(
                Lt,
                {
                  as: 'div',
                  hasChrome: !1,
                  trigger: 'hover',
                  tooltip: E.createElement(ir, {
                    note: 'Save changes to story',
                  }),
                },
                E.createElement(
                  ht,
                  {
                    'aria-label': 'Save changes to story',
                    disabled: o,
                    onClick: y,
                  },
                  E.createElement(ju, null),
                  E.createElement(
                    Cl,
                    { 'data-short-label': 'Save' },
                    'Update story'
                  )
                )
              ),
              E.createElement(
                Lt,
                {
                  as: 'div',
                  hasChrome: !1,
                  trigger: 'hover',
                  tooltip: E.createElement(ir, {
                    note: 'Create new story with these settings',
                  }),
                },
                E.createElement(
                  ht,
                  {
                    'aria-label': 'Create new story with these settings',
                    onClick: f,
                  },
                  E.createElement(ai, null),
                  E.createElement(
                    Cl,
                    { 'data-short-label': 'New' },
                    'Create new story'
                  )
                )
              ),
              E.createElement(
                Lt,
                {
                  as: 'div',
                  hasChrome: !1,
                  trigger: 'hover',
                  tooltip: E.createElement(ir, { note: 'Reset changes' }),
                },
                E.createElement(
                  ht,
                  { 'aria-label': 'Reset changes', onClick: () => r() },
                  E.createElement(si, null),
                  E.createElement('span', null, 'Reset')
                )
              )
            ),
            E.createElement(
              h6,
              null,
              E.createElement(
                Cl,
                { 'data-short-label': 'Unsaved changes' },
                'You modified this story. Do you want to save your changes?'
              )
            ),
            E.createElement(
              mt,
              { width: 350, open: i, onOpenChange: s },
              E.createElement(
                dt,
                {
                  onSubmit: async (g) => {
                    if ((g.preventDefault(), !o))
                      try {
                        d(null),
                          a(!0),
                          await t(
                            l
                              .replace(/^[^a-z]/i, '')
                              .replaceAll(/[^a-z0-9]/gi, '')
                          ),
                          s(!1),
                          a(!1);
                      } catch (_) {
                        d(_.message), a(!1);
                      }
                  },
                  id: 'create-new-story-form',
                },
                E.createElement(
                  mt.Content,
                  null,
                  E.createElement(
                    mt.Header,
                    null,
                    E.createElement(mt.Title, null, 'Create new story'),
                    E.createElement(
                      mt.Description,
                      null,
                      'This will add a new story to your existing stories file.'
                    )
                  ),
                  E.createElement(g6, {
                    onChange: h,
                    placeholder: 'Story export name',
                    readOnly: o,
                    ref: n,
                    value: l,
                  }),
                  E.createElement(
                    mt.Actions,
                    null,
                    E.createElement(
                      Bt,
                      {
                        disabled: o || !l,
                        size: 'medium',
                        type: 'submit',
                        variant: 'solid',
                      },
                      'Create'
                    ),
                    E.createElement(
                      mt.Dialog.Close,
                      { asChild: !0 },
                      E.createElement(
                        Bt,
                        { disabled: o, size: 'medium', type: 'reset' },
                        'Cancel'
                      )
                    )
                  )
                )
              ),
              c && E.createElement(mt.Error, null, c)
            )
          )
        );
      },
      Fv = (e) =>
        Object.entries(e).reduce(
          (t, [r, n]) => (n !== void 0 ? Object.assign(t, { [r]: n }) : t),
          {}
        ),
      v6 = W.div({
        display: 'grid',
        gridTemplateRows: '1fr 39px',
        height: '100%',
        maxHeight: '100vh',
        overflowY: 'auto',
      }),
      x6 = ({ saveStory: e, createStory: t }) => {
        let [r, n] = he(!0),
          [o, a, i, s] = Ou(),
          [l] = Iu(),
          u = ei(),
          { expanded: c, sort: d, presetColors: y } = Pu(N2, {}),
          { path: f, previewInitialized: h } = ku();
        ze(() => {
          h && n(!1);
        }, [h]);
        let g = Object.values(u).some((v) => v?.control),
          _ = Object.entries(u).reduce((v, [O, C]) => {
            let I = C?.control;
            return (
              typeof I != 'object' || I?.type !== 'color' || I?.presetColors
                ? (v[O] = C)
                : (v[O] = { ...C, control: { ...I, presetColors: y } }),
              v
            );
          }, {}),
          x = Nt(() => !!o && !!s && !or(Fv(o), Fv(s)), [o, s]);
        return E.createElement(
          v6,
          null,
          E.createElement(r6, {
            key: f,
            compact: !c && g,
            rows: _,
            args: o,
            globals: l,
            updateArgs: a,
            resetArgs: i,
            inAddonPanel: !0,
            sort: d,
            isLoading: r,
          }),
          g &&
            x &&
            xt.CONFIG_TYPE === 'DEVELOPMENT' &&
            E.createElement(b6, { resetArgs: i, saveStory: e, createStory: t })
        );
      };
    function E6() {
      let e = ei(),
        t = Object.values(e).filter(
          (r) => r?.control && !r?.table?.disable
        ).length;
      return E.createElement(
        'div',
        null,
        E.createElement(
          za,
          { col: 1 },
          E.createElement(
            'span',
            { style: { display: 'inline-block', verticalAlign: 'middle' } },
            'Controls'
          ),
          t === 0 ? '' : E.createElement(La, { status: 'neutral' }, t)
        )
      );
    }
    var jv = (e) =>
      JSON.stringify(e, (t, r) =>
        typeof r == 'function' ? '__sb_empty_function_arg__' : r
      );
    mo.register(Dv, (e) => {
      let t = mo.getChannel(),
        r = async () => {
          let o = e.getCurrentStoryData();
          if (o.type !== 'story') throw new Error('Not a story');
          try {
            let a = await Za(t, Xa, fo, {
              args: jv(
                Object.entries(o.args || {}).reduce(
                  (i, [s, l]) => (or(l, o.initialArgs?.[s]) || (i[s] = l), i),
                  {}
                )
              ),
              csfId: o.id,
              importPath: o.importPath,
            });
            e.addNotification({
              id: 'save-story-success',
              icon: { name: 'passed', color: go.positive },
              content: {
                headline: 'Story saved',
                subHeadline: E.createElement(
                  E.Fragment,
                  null,
                  'Updated story ',
                  E.createElement('b', null, a.sourceStoryName),
                  '.'
                ),
              },
              duration: 8e3,
            });
          } catch (a) {
            throw (
              (e.addNotification({
                id: 'save-story-error',
                icon: { name: 'failed', color: go.negative },
                content: {
                  headline: 'Failed to save story',
                  subHeadline:
                    a?.message ||
                    'Check the Storybook process on the command line for more details.',
                },
                duration: 8e3,
              }),
              a)
            );
          }
        },
        n = async (o) => {
          let a = e.getCurrentStoryData();
          if (a.type !== 'story') throw new Error('Not a story');
          let i = await Za(t, Xa, fo, {
            args: a.args && jv(a.args),
            csfId: a.id,
            importPath: a.importPath,
            name: o,
          });
          e.addNotification({
            id: 'save-story-success',
            icon: { name: 'passed', color: go.positive },
            content: {
              headline: 'Story created',
              subHeadline: E.createElement(
                E.Fragment,
                null,
                'Added story ',
                E.createElement('b', null, i.newStoryName),
                ' based on ',
                E.createElement('b', null, i.sourceStoryName),
                '.'
              ),
            },
            duration: 8e3,
            onClick: ({ onDismiss: s }) => {
              s(), e.selectStory(i.newStoryId);
            },
          });
        };
      mo.add(Dv, {
        title: E6,
        type: _u.PANEL,
        paramKey: N2,
        render: ({ active: o }) =>
          !o || !e.getCurrentStoryData()
            ? null
            : E.createElement(
                Ba,
                { active: o },
                E.createElement(x6, { saveStory: r, createStory: n })
              ),
      }),
        t.on(fo, (o) => {
          if (!o.success) return;
          let a = e.getCurrentStoryData();
          a.type === 'story' &&
            (e.resetStoryArgs(a),
            o.payload.newStoryId && e.selectStory(o.payload.newStoryId));
        });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
